"use client"

import { useState } from "react"

const FIELD_BASE_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  // 16px prevents iOS Safari zoom-on-focus
  fontSize: 16,
  color: "var(--color-navy)",
  backgroundColor: "var(--color-white)",
  border: "1px solid var(--color-rule)",
  // 12px vertical padding × 2 + 16px font + 1.4 line-height ≈ 46px — clears
  // Apple HIG / Material 44–48px touch target
  padding: "12px 14px",
  width: "100%",
  borderRadius: 0,
  minHeight: 46,
}

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-sand)",
  fontWeight: 600,
  display: "block",
  marginBottom: 6,
}

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string }

/**
 * Native contact form — replaces the Typeform embed.
 *
 * Posts JSON to /api/contact. Includes:
 * - Honeypot field `website` (visually hidden, real users won't fill it)
 * - Inline success / error states (no toast lib)
 * - Disable submit while in-flight to prevent double-posts
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status.kind === "submitting") return

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      role: String(data.get("role") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""), // honeypot
    }

    setStatus({ kind: "submitting" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        setStatus({
          kind: "error",
          message: body.error ?? "Could not send your message. Please try again.",
        })
        return
      }
      setStatus({ kind: "success" })
      form.reset()
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again.",
      })
    }
  }

  if (status.kind === "success") {
    return (
      <div
        className="border-t-2 border-navy"
        style={{ paddingTop: 28 }}
      >
        <p
          className="text-red"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Message sent
        </p>
        <p
          className="text-navy mt-3"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 26,
            lineHeight: 1.2,
          }}
        >
          Thank you. David will be in touch shortly.
        </p>
        <p
          className="text-ink-body mt-4"
          style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6 }}
        >
          For time-sensitive matters, you can also book directly via the call link.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 text-red border-b border-red pb-0.5 hover:text-[#A50C25] transition-colors"
          style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
        >
          Send another →
        </button>
      </div>
    )
  }

  const isSubmitting = status.kind === "submitting"

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — visually hidden, off-screen, not focusable */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label htmlFor="website">Website (leave blank)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" style={LABEL_STYLE}>
            Name <span className="text-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            placeholder="Jane Smith"
            style={FIELD_BASE_STYLE}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="company" style={LABEL_STYLE}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={200}
            autoComplete="organization"
            placeholder="First National Bank"
            style={FIELD_BASE_STYLE}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" style={LABEL_STYLE}>
            Email <span className="text-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={320}
            autoComplete="email"
            placeholder="jane@firstnational.com"
            style={FIELD_BASE_STYLE}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="role" style={LABEL_STYLE}>
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            maxLength={200}
            autoComplete="organization-title"
            placeholder="General Counsel"
            style={FIELD_BASE_STYLE}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" style={LABEL_STYLE}>
          What are you trying to defend? <span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={5000}
          placeholder="A short note on the AI decisions in scope, the timeline, and where you are today on documentation."
          style={{
            ...FIELD_BASE_STYLE,
            fontFamily: "var(--font-body)",
            fontSize: 16,
            resize: "vertical",
            minHeight: 160,
          }}
          disabled={isSubmitting}
        />
      </div>

      {status.kind === "error" && (
        <div
          role="alert"
          className="bg-paper-2 border border-red px-4 py-3"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 13,
            color: "var(--color-red)",
          }}
        >
          {status.message}
        </div>
      )}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-navy text-white px-6 hover:bg-[#0f1d36] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 13,
            letterSpacing: "0.03em",
            minHeight: 48,
          }}
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
        <p
          className="text-sand"
          style={{ fontFamily: "var(--font-ui)", fontSize: 11.5 }}
        >
          We respond within one business day.
        </p>
      </div>
    </form>
  )
}
