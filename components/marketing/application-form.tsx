"use client"

import { useState } from "react"

const FIELD_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: 16,
  color: "var(--color-navy)",
  backgroundColor: "var(--color-white)",
  border: "1px solid var(--color-rule)",
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
  marginBottom: 10,
}

const QUESTION_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: 17,
  color: "var(--color-navy)",
  lineHeight: 1.3,
  marginBottom: 14,
  display: "block",
}

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string }

const BUSINESS_TYPES = ["Service Business", "Technology Business", "Product Business", "Other"]
const REVENUE_BANDS = ["5 figures", "6 figures", "7 figures", "8 figures"]
const CHALLENGES = ["Branding", "Lead Generation", "Sales", "Speaking", "Partnerships", "Other"]

/**
 * RadioRow — controlled radio with editorial styling. Square indicator
 * (no rounded edges anywhere on the site), red fill when selected, navy
 * border on the selected row. Each row is a full-width clickable label
 * so tap targets are generous on mobile.
 */
function RadioRow({
  name,
  value,
  selected,
  onChange,
}: {
  name: string
  value: string
  selected: boolean
  onChange: (v: string) => void
}) {
  return (
    <label
      className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-paper-2 transition-colors text-left"
      style={{
        border: selected ? "1px solid var(--color-navy)" : "1px solid var(--color-rule)",
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        color: "var(--color-navy)",
        minHeight: 48,
        backgroundColor: selected ? "var(--color-paper-2)" : "var(--color-white)",
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="sr-only"
        required
      />
      <span
        aria-hidden="true"
        className="relative flex-shrink-0 inline-block"
        style={{
          width: 16,
          height: 16,
          border: "1.5px solid",
          borderColor: selected ? "var(--color-navy)" : "var(--color-sand)",
          backgroundColor: "var(--color-white)",
        }}
      >
        {selected && (
          <span
            className="absolute inset-1"
            style={{ backgroundColor: "var(--color-red)" }}
          />
        )}
      </span>
      <span>{value}</span>
    </label>
  )
}

function ControlledRadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: readonly string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map((opt) => (
        <RadioRow
          key={opt}
          name={name}
          value={opt}
          selected={value === opt}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

/**
 * Native Private Advisory Application form.
 *
 * Replaces David's Google Form. Posts JSON to /api/apply with full server-side
 * validation, honeypot, and Resend delivery to david@aiadvisorsllc.com.
 */
export function ApplicationForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const [businessType, setBusinessType] = useState("")
  const [revenue, setRevenue] = useState("")
  const [challenge, setChallenge] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status.kind === "submitting") return

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      businessType,
      revenue,
      challenge,
      businessDescription: String(data.get("businessDescription") ?? ""),
      opportunities: String(data.get("opportunities") ?? ""),
      links: String(data.get("links") ?? ""),
      motivation: String(data.get("motivation") ?? ""),
      website: String(data.get("website") ?? ""),
    }

    // Client-side validation for radio groups (HTML required doesn't fire
    // on hidden inputs from our controlled state pattern)
    if (!payload.businessType) {
      setStatus({ kind: "error", message: "Please select a business type." })
      return
    }
    if (!payload.revenue) {
      setStatus({ kind: "error", message: "Please select a revenue band." })
      return
    }
    if (!payload.challenge) {
      setStatus({ kind: "error", message: "Please select your biggest challenge." })
      return
    }

    setStatus({ kind: "submitting" })
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        setStatus({
          kind: "error",
          message: body.error ?? "Could not submit your application. Please try again.",
        })
        return
      }
      setStatus({ kind: "success" })
      form.reset()
      setBusinessType("")
      setRevenue("")
      setChallenge("")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." })
    }
  }

  if (status.kind === "success") {
    return (
      <div
        className="border-t-2 border-navy"
        style={{ paddingTop: 32 }}
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
          Application received
        </p>
        <p
          className="text-navy mt-3"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 28,
            lineHeight: 1.2,
          }}
        >
          Thank you. We&rsquo;ll review and reach out within a few business days.
        </p>
        <p
          className="text-ink-body mt-4 max-w-[40em]"
          style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6 }}
        >
          Private advisory engagements are scoped to fit each organization, so the next step is a
          conversation about exposure and fit. We&rsquo;ll be in touch.
        </p>
      </div>
    )
  }

  const isSubmitting = status.kind === "submitting"
  const fieldDisabled = { opacity: isSubmitting ? 0.6 : 1 }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      {/* Honeypot */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Identity */}
      <fieldset disabled={isSubmitting} style={fieldDisabled} className="space-y-6">
        <legend className="sr-only">Identity</legend>

        <div>
          <label htmlFor="name" style={LABEL_STYLE}>
            First &amp; Last Name <span className="text-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            placeholder="Jane Smith"
            style={FIELD_STYLE}
          />
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
              style={FIELD_STYLE}
            />
          </div>
          <div>
            <label htmlFor="phone" style={LABEL_STYLE}>
              Phone Number <span className="text-red">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              maxLength={40}
              autoComplete="tel"
              placeholder="+1 555 555 5555"
              style={FIELD_STYLE}
            />
          </div>
        </div>
      </fieldset>

      {/* Business type */}
      <fieldset disabled={isSubmitting} style={fieldDisabled}>
        <legend style={QUESTION_STYLE}>
          What kind of business are you in? <span className="text-red">*</span>
        </legend>
        <ControlledRadioGroup
          name="businessType"
          options={BUSINESS_TYPES}
          value={businessType}
          onChange={setBusinessType}
        />
      </fieldset>

      {/* Revenue */}
      <fieldset disabled={isSubmitting} style={fieldDisabled}>
        <legend style={QUESTION_STYLE}>
          What has been your business&rsquo;s approximate gross revenue in the last 12 months
          (in US dollars)? <span className="text-red">*</span>
        </legend>
        <ControlledRadioGroup
          name="revenue"
          options={REVENUE_BANDS}
          value={revenue}
          onChange={setRevenue}
        />
      </fieldset>

      {/* Challenge */}
      <fieldset disabled={isSubmitting} style={fieldDisabled}>
        <legend style={QUESTION_STYLE}>
          What is the biggest challenge you are currently facing in your business?{" "}
          <span className="text-red">*</span>
        </legend>
        <ControlledRadioGroup
          name="challenge"
          options={CHALLENGES}
          value={challenge}
          onChange={setChallenge}
        />
      </fieldset>

      {/* Long-form questions */}
      <fieldset disabled={isSubmitting} style={fieldDisabled} className="space-y-7">
        <div>
          <label htmlFor="businessDescription" style={QUESTION_STYLE} className="block">
            Please describe your business and revenue streams.{" "}
            <span className="text-red">*</span>
          </label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            required
            rows={5}
            minLength={10}
            maxLength={5000}
            placeholder="What does your business do, who do you sell to, and how do you make money?"
            style={{
              ...FIELD_STYLE,
              fontFamily: "var(--font-body)",
              fontSize: 16,
              resize: "vertical",
              minHeight: 140,
            }}
          />
        </div>

        <div>
          <label htmlFor="opportunities" style={QUESTION_STYLE} className="block">
            What are the biggest opportunities and challenges you are currently facing?{" "}
            <span className="text-red">*</span>
          </label>
          <textarea
            id="opportunities"
            name="opportunities"
            required
            rows={5}
            minLength={10}
            maxLength={5000}
            placeholder="Where do you see the most upside, and what's getting in the way?"
            style={{
              ...FIELD_STYLE,
              fontFamily: "var(--font-body)",
              fontSize: 16,
              resize: "vertical",
              minHeight: 140,
            }}
          />
        </div>

        <div>
          <label htmlFor="links" style={QUESTION_STYLE} className="block">
            Please share URLs of your main website and important social media links for David
            and the team to review. <span className="text-red">*</span>
          </label>
          <textarea
            id="links"
            name="links"
            required
            rows={3}
            minLength={4}
            maxLength={2000}
            placeholder={"https://yourcompany.com\nhttps://linkedin.com/in/you\nhttps://x.com/you"}
            style={{
              ...FIELD_STYLE,
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              resize: "vertical",
              minHeight: 100,
            }}
          />
        </div>

        <div>
          <label htmlFor="motivation" style={QUESTION_STYLE} className="block">
            Why would you like to work with AI Advisors, LLC?{" "}
            <span className="text-red">*</span>
          </label>
          <textarea
            id="motivation"
            name="motivation"
            required
            rows={5}
            minLength={10}
            maxLength={5000}
            placeholder="What outcomes would make this engagement worth it for you?"
            style={{
              ...FIELD_STYLE,
              fontFamily: "var(--font-body)",
              fontSize: 16,
              resize: "vertical",
              minHeight: 140,
            }}
          />
        </div>
      </fieldset>

      {status.kind === "error" && (
        <div
          role="alert"
          className="bg-paper-2 border border-red px-4 py-3"
          style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--color-red)" }}
        >
          {status.message}
        </div>
      )}

      <div className="flex items-center gap-4 flex-wrap pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-navy text-white px-7 hover:bg-[#0f1d36] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 13,
            letterSpacing: "0.03em",
            minHeight: 50,
          }}
        >
          {isSubmitting ? "Submitting…" : "Submit Application"}
        </button>
        <p
          className="text-sand"
          style={{ fontFamily: "var(--font-ui)", fontSize: 11.5 }}
        >
          We respond within a few business days.
        </p>
      </div>
    </form>
  )
}
