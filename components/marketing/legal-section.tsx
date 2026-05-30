/**
 * LegalSection — editorial chrome for /privacy and /terms.
 * Mono section number in red, serif title in navy, Source Serif 4 body.
 * Rule-divided sections, no rounded chrome.
 */
export function LegalSection({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-10"
      style={{ borderBottom: "1px solid var(--color-rule)" }}
    >
      <p
        className="text-red"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.08em",
          paddingTop: 6,
        }}
      >
        § {num}
      </p>
      <div>
        <h2
          className="text-navy mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 22,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <div className="legal-body text-ink-body space-y-4">{children}</div>
      </div>
    </section>
  )
}

/**
 * LegalHeader — shared header band for /privacy and /terms.
 */
export function LegalHeader({
  eyebrow = "Legal",
  title,
  effective,
  intro,
}: {
  eyebrow?: string
  title: string
  effective: string
  intro: React.ReactNode
}) {
  return (
    <section className="border-b border-rule">
      <div className="max-w-[820px] mx-auto px-6 md:px-[34px] pt-14 md:pt-[64px] pb-12">
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-red)",
            fontWeight: 600,
          }}
        >
          {eyebrow}
        </p>
        <h1
          className="text-navy mt-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(34px, 5vw, 48px)",
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
          }}
        >
          {title}
        </h1>
        <span className="block w-[54px] h-[2px] bg-red mt-5" />
        <p
          className="mt-5 text-sand"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Effective · {effective}
        </p>
        <div
          className="mt-6 text-ink-body legal-body"
          style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65 }}
        >
          {intro}
        </div>
      </div>
    </section>
  )
}
