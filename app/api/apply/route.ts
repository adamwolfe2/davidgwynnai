import { NextResponse } from "next/server"

/**
 * POST /api/apply
 *
 * Native Private Advisory Application endpoint. Replaces David's Google Form
 * (docs.google.com/forms/...) so applications come straight into his inbox
 * with the AI Advisors brand on every touch.
 *
 * Behavior mirrors /api/contact:
 * - Server-side validation of every required field.
 * - Honeypot field (`website`) — populated bots auto-fail silently.
 * - In-memory IP rate limit: 3 submissions per 30 minutes per IP (tighter
 *   than contact because this is a higher-intent form).
 * - Sends via Resend HTTP API when RESEND_API_KEY + CONTACT_FROM_EMAIL are
 *   set. Falls back to a structured server log so applications still work
 *   on first deploy before David wires Resend.
 *
 * Env vars (Vercel project settings):
 *   RESEND_API_KEY        — Resend secret
 *   CONTACT_FROM_EMAIL    — verified sender, e.g. "AI Advisors <noreply@aiadvisorsllc.com>"
 *   CONTACT_TO_EMAIL      — recipient (defaults to david@aiadvisorsllc.com)
 */

export const runtime = "nodejs"

const RATE_WINDOW_MS = 30 * 60 * 1000 // 30 minutes
const RATE_MAX = 3
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

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

const BUSINESS_TYPES = ["Service Business", "Technology Business", "Product Business", "Other"] as const
const REVENUE_BANDS = ["5 figures", "6 figures", "7 figures", "8 figures"] as const
const CHALLENGES = ["Branding", "Lead Generation", "Sales", "Speaking", "Partnerships", "Other"] as const

type ApplicationPayload = {
  name: string
  email: string
  phone: string
  businessType: string
  revenue: string
  challenge: string
  businessDescription: string
  opportunities: string
  links: string
  motivation: string
  website?: string // honeypot
}

function badRequest(msg: string) {
  return NextResponse.json({ error: msg }, { status: 400 })
}

export async function POST(req: Request) {
  let payload: ApplicationPayload
  try {
    payload = (await req.json()) as ApplicationPayload
  } catch {
    return badRequest("Invalid JSON body.")
  }

  // Honeypot — silently succeed so bots think the form accepted
  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const name = (payload.name ?? "").trim()
  const email = (payload.email ?? "").trim()
  const phone = (payload.phone ?? "").trim()
  const businessType = (payload.businessType ?? "").trim()
  const revenue = (payload.revenue ?? "").trim()
  const challenge = (payload.challenge ?? "").trim()
  const businessDescription = (payload.businessDescription ?? "").trim()
  const opportunities = (payload.opportunities ?? "").trim()
  const links = (payload.links ?? "").trim()
  const motivation = (payload.motivation ?? "").trim()

  if (!name || name.length > 200) return badRequest("Name is required.")
  if (!email || !isEmail(email) || email.length > 320) return badRequest("A valid email is required.")
  if (!phone || phone.length < 7 || phone.length > 40) return badRequest("A valid phone number is required.")
  if (!BUSINESS_TYPES.includes(businessType as (typeof BUSINESS_TYPES)[number])) {
    return badRequest("Select a business type.")
  }
  if (!REVENUE_BANDS.includes(revenue as (typeof REVENUE_BANDS)[number])) {
    return badRequest("Select a revenue band.")
  }
  if (!CHALLENGES.includes(challenge as (typeof CHALLENGES)[number])) {
    return badRequest("Select your biggest challenge.")
  }
  if (!businessDescription || businessDescription.length < 10 || businessDescription.length > 5000) {
    return badRequest("Please describe your business and revenue streams.")
  }
  if (!opportunities || opportunities.length < 10 || opportunities.length > 5000) {
    return badRequest("Please describe your opportunities and challenges.")
  }
  if (!links || links.length < 4 || links.length > 2000) {
    return badRequest("Please share at least one URL.")
  }
  if (!motivation || motivation.length < 10 || motivation.length > 5000) {
    return badRequest("Please tell us why you'd like to work with AI Advisors.")
  }

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

  const subject = `New Private Advisory Application from ${name}`

  const textBody = [
    `New Private Advisory Application — aiadvisorsllc.com`,
    ``,
    `Name:           ${name}`,
    `Email:          ${email}`,
    `Phone:          ${phone}`,
    `Business type:  ${businessType}`,
    `Revenue band:   ${revenue}`,
    `Top challenge:  ${challenge}`,
    ``,
    `Business & revenue streams:`,
    businessDescription,
    ``,
    `Opportunities & challenges:`,
    opportunities,
    ``,
    `Links:`,
    links,
    ``,
    `Why work with AI Advisors:`,
    motivation,
    ``,
    `— Sent ${new Date().toISOString()} · IP ${ip}`,
  ].join("\n")

  const labelRow = (k: string, v: string) =>
    `<tr><td style="padding:4px 16px 4px 0;color:#8A8170;white-space:nowrap;">${escapeHtml(k)}</td><td style="color:#1B2A4A;">${escapeHtml(v)}</td></tr>`

  const longBlock = (heading: string, body: string) => `
    <h3 style="margin:20px 0 6px;font-weight:600;font-size:11px;color:#8A8170;text-transform:uppercase;letter-spacing:0.18em;">${escapeHtml(heading)}</h3>
    <p style="white-space:pre-wrap;font-family:Georgia,serif;font-size:14px;line-height:1.6;color:#1B2A4A;margin:0;">${escapeHtml(body)}</p>
  `

  const htmlBody = `
    <div style="font-family:Georgia,'Times New Roman',serif;color:#1B2A4A;max-width:600px;">
      <h2 style="margin:0 0 4px;font-weight:600;">Private Advisory Application</h2>
      <p style="margin:0 0 16px;font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#8A8170;text-transform:uppercase;letter-spacing:0.18em;">aiadvisorsllc.com</p>

      <table style="border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#3A4355;">
        ${labelRow("Name", name)}
        ${labelRow("Email", email)}
        ${labelRow("Phone", phone)}
        ${labelRow("Business type", businessType)}
        ${labelRow("Revenue band", revenue)}
        ${labelRow("Top challenge", challenge)}
      </table>

      ${longBlock("Business & revenue streams", businessDescription)}
      ${longBlock("Opportunities & challenges", opportunities)}
      ${longBlock("Links", links)}
      ${longBlock("Why work with AI Advisors", motivation)}

      <hr style="border:none;border-top:1px solid #DAD5C7;margin:24px 0;" />
      <p style="font-family:Helvetica,Arial,sans-serif;font-size:11px;color:#8A8170;">
        Sent ${new Date().toISOString()} · IP ${escapeHtml(ip)}
      </p>
    </div>
  `

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
        console.error("[apply] Resend non-200:", res.status, detail)
        return NextResponse.json(
          { error: "Could not submit your application. Please try again." },
          { status: 502 }
        )
      }
    } catch (err) {
      console.error("[apply] Resend transport error:", err)
      return NextResponse.json(
        { error: "Could not submit your application. Please try again." },
        { status: 502 }
      )
    }
  } else {
    console.warn("[apply] RESEND_API_KEY or CONTACT_FROM_EMAIL not set; logging payload", {
      name,
      email,
      phone,
      businessType,
      revenue,
      challenge,
      ip,
    })
  }

  return NextResponse.json({ ok: true })
}
