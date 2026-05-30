import { NextResponse } from "next/server"

/**
 * POST /api/contact
 *
 * Native contact-form endpoint. Replaces the previous Typeform embed.
 *
 * Behavior:
 * - Validates name, email, message (server-side, never trust the client).
 * - Honeypot field (`website`) — populated bots auto-fail silently.
 * - In-memory IP rate limit: 5 submissions per 10 minutes per IP.
 * - Sends via Resend HTTP API when RESEND_API_KEY + CONTACT_FROM_EMAIL are set.
 * - Falls back to a structured server log if Resend isn't configured, so the
 *   form works on first deploy and David can wire Resend at his pace.
 *
 * Required env vars (set in Vercel):
 *   RESEND_API_KEY        — Resend secret
 *   CONTACT_FROM_EMAIL    — verified sender (e.g. "AI Advisors <noreply@aiadvisorsllc.com>")
 *   CONTACT_TO_EMAIL      — recipient (defaults to david@aiadvisorsllc.com)
 */

export const runtime = "nodejs"

const RATE_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_MAX = 5
const ipHits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (hits.length >= RATE_MAX) {
    ipHits.set(ip, hits)
    return true
  }
  hits.push(now)
  ipHits.set(ip, hits)
  return false
}

function isEmail(value: string): boolean {
  // Practical, not RFC 5322. Real validation is sending an email.
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

type ContactPayload = {
  name: string
  email: string
  company?: string
  role?: string
  message: string
  website?: string // honeypot
}

export async function POST(req: Request) {
  let payload: ContactPayload
  try {
    payload = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  // Honeypot — silently succeed so bots think it worked
  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const name = (payload.name ?? "").trim()
  const email = (payload.email ?? "").trim()
  const message = (payload.message ?? "").trim()
  const company = (payload.company ?? "").trim()
  const role = (payload.role ?? "").trim()

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 })
  }
  if (!email || !isEmail(email) || email.length > 320) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 })
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 5,000 characters." },
      { status: 400 }
    )
  }

  // Best-effort client IP from Vercel headers
  const fwd = req.headers.get("x-forwarded-for") ?? ""
  const ip = fwd.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown"

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL ?? "david@aiadvisorsllc.com"

  const subject = `New inquiry from ${name}${company ? ` (${company})` : ""}`

  const textBody = [
    `New contact form submission — aiadvisorsllc.com`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    company ? `Company: ${company}` : null,
    role ? `Role:    ${role}` : null,
    ``,
    `Message:`,
    message,
    ``,
    `— Sent ${new Date().toISOString()} · IP ${ip}`,
  ]
    .filter(Boolean)
    .join("\n")

  const htmlBody = `
    <div style="font-family:Georgia,'Times New Roman',serif;color:#1B2A4A;max-width:560px;">
      <h2 style="margin:0 0 16px;font-weight:600;">New inquiry from ${escapeHtml(name)}</h2>
      <table style="border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#3A4355;">
        <tr><td style="padding:4px 16px 4px 0;color:#8A8170;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${company ? `<tr><td style="padding:4px 16px 4px 0;color:#8A8170;">Company</td><td>${escapeHtml(company)}</td></tr>` : ""}
        ${role ? `<tr><td style="padding:4px 16px 4px 0;color:#8A8170;">Role</td><td>${escapeHtml(role)}</td></tr>` : ""}
      </table>
      <h3 style="margin:24px 0 8px;font-weight:600;font-size:14px;color:#8A8170;text-transform:uppercase;letter-spacing:0.18em;">Message</h3>
      <p style="white-space:pre-wrap;font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#1B2A4A;">${escapeHtml(message)}</p>
      <hr style="border:none;border-top:1px solid #DAD5C7;margin:24px 0;" />
      <p style="font-family:Helvetica,Arial,sans-serif;font-size:11px;color:#8A8170;">
        Sent ${new Date().toISOString()} · IP ${escapeHtml(ip)}
      </p>
    </div>
  `

  // Send via Resend if configured. Otherwise log and still return 200 so the
  // form is functional on day one — David can wire env vars later.
  if (apiKey && from) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject,
          text: textBody,
          html: htmlBody,
        }),
      })

      if (!res.ok) {
        const detail = await res.text().catch(() => "")
        console.error("[contact] Resend non-200:", res.status, detail)
        return NextResponse.json(
          { error: "Could not send your message. Please try again." },
          { status: 502 }
        )
      }
    } catch (err) {
      console.error("[contact] Resend transport error:", err)
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      )
    }
  } else {
    // Fallback path — log structured so it's grep-able in Vercel logs.
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL not set; logging payload",
      { name, email, company, role, message, ip }
    )
  }

  return NextResponse.json({ ok: true })
}
