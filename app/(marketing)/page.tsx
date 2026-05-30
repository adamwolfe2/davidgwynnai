import Image from "next/image"
import Link from "next/link"
import { DecisionReceipt } from "@/components/marketing/decision-receipt"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

// Single offer name sitewide (CLAUDE.md)
const CTA_LABEL = "Request Your Exposure Assessment"

// ---------------------------------------------------------------------------
// SECTION DATA
// ---------------------------------------------------------------------------

const PROBLEM_TRIPLET = [
  { word: "Policies", desc: "describe intent." },
  { word: "Frameworks", desc: "describe aspiration." },
  { word: "Certifications", desc: "describe effort." },
]

const SERVICES = [
  {
    n: "01",
    title: "Decision Exposure Assessment",
    body:
      "Where your highest-exposure AI decisions live, and what your evidence file looks like today.",
  },
  {
    n: "02",
    title: "PrescienceOS™ Implementation",
    body:
      "Decision Receipt™ architecture and Decision Registry, live before your next examination.",
  },
  {
    n: "03",
    title: "Director Safe Harbor",
    body:
      "Fiduciary documentation and board attestation built on process integrity, not intentions.",
  },
  {
    n: "04",
    title: "Examination Readiness",
    body:
      "OCC model-risk, state insurance, and healthcare AI response. Demonstrated, not described.",
  },
]

const HOW_IT_WORKS = [
  {
    n: "I",
    title: "Map the terrain",
    sub: "Decision Exposure Assessment",
    body:
      "We map every AI-influenced decision that carries material regulatory, fiduciary, or legal exposure, and audit the evidence you have today. You receive a prioritized exposure report.",
  },
  {
    n: "II",
    title: "Build the infrastructure",
    sub: "PrescienceOS™ Implementation",
    body:
      "Decision Receipt™ architecture, Decision Registry, and control binding, calibrated to your regulatory environment and live before your next examination.",
  },
  {
    n: "III",
    title: "Protect the people",
    sub: "Director Safe Harbor & Board Governance",
    body:
      "Director safe harbor memoranda, board attestation framework, and GC advisory. Fiduciary documentation built on process integrity, not assumption.",
  },
]

// Testimonials — Kumar and Tran removed (photos didn't match the people in
// the previous template's wiring), Alldridge [pending] slot removed (collapses
// in once David supplies the real quote). Williamson IPO quote stands alone
// as the single pull quote, which reads stronger editorially anyway.
const TESTIMONIALS = [
  {
    name: "R. Glenn Williamson",
    initials: "RW",
    role: "Founder & CEO, Canada-Arizona Business Council",
    context: "On David's WavePhone IPO leadership",
    photo: "/images/testimonials/QEc1J5NpW8H1Ly5PxgRNEoCQxHk.avif",
    quote:
      "David's innovative capital markets approach at WavePhone transformed how we delivered digital data over broadcast TV signals. His expertise directly increased revenue, created jobs, and led to a successful $18 million NASDAQ IPO. Beyond raising capital, David was a true partner who transformed both our business and my career.",
  },
]

// Partner logos — 17 assets in /public/images/partners. Render as a small
// editorial logo rail ("Aligned with"). Keep grayscale-ish on paper-2 band so
// they don't fight the editorial palette.
const PARTNER_LOGOS = [
  "1sM8Y0OnHlPjStk7nEaoNdVlmU.avif",
  "9YLe44uAb48dDcYLHbq3kpj0i4.avif",
  "D7rnliPAgSJ20uq2RmGUXQwWUs0.avif",
  "Ftbs1mLQJr5rmpKgaqqP2BLIFI.avif",
  "KbiOomK1eCrGHt9gjd0DbgB6U.avif",
  "OmUmGExykzHFyBFIYmEoYO2Iyw4.avif",
  "R569WrfDBKIlGsESRiYSg6CiQPY.avif",
  "RjSgBKkvwb1BEf48ipbENSH7YMo.avif",
  "d47HCaLBtdKq1xW1Get4WbllEg.avif",
  "g0wzN9aJF7DG9vJaaQR7UD3Ns.avif",
  "gPdMe2SH51luuw22zPuPCRMzfQk.avif",
  "hVfYXZ0nAG4EmEnyG1CzJuAiE.avif",
  "oYLZOHBI9l917jYrDaHzUyvM9o.avif",
  "pOrGqiOKLJyC8xnDCoSkAOKI.avif",
  "udOYGYZGDjy66MXSCNVxfpMjTg.png",
  "yUj4fNy4CUuQVo7XgzQsNabOIuY.avif",
  "ywU2SlgM4DblXToMuJFR4HnIfKI.avif",
]

const FAQ_ITEMS = [
  {
    q: "What is Decision Defensibility Infrastructure?",
    a: "The contemporaneous, structured record of an AI-influenced decision: what was decided, why, by whom, under which controls, and with what outcome. It exists before scrutiny arrives, not after. PrescienceOS™ is the system that captures and holds it.",
  },
  {
    q: "How is this different from a policy or framework?",
    a: "Policies describe intent. Frameworks describe aspiration. Certifications describe effort. None of them survive a deposition. Decision Defensibility Infrastructure produces evidence at the moment of decision. A folder you can hand over, not a story you have to tell.",
  },
  {
    q: "Who is this for?",
    a: "General Counsel, Chief Risk Officers, Chief Compliance Officers, and boards in banks, insurers, and health systems. The leaders who will be asked to explain AI-influenced decisions under examination, in discovery, or before the board.",
  },
  {
    q: "What is the Decision Exposure Assessment?",
    a: "A structured, time-limited diagnostic, typically 2 to 3 weeks, that maps where your highest-exposure AI decisions live, audits your existing documentation, and produces a prioritized exposure report. It is the first step of every engagement.",
  },
  {
    q: "What does PrescienceOS™ implementation look like?",
    a: "A 6 to 10 week engagement that deploys Decision Receipt™ architecture, Decision Registry, and control binding records, calibrated to your specific regulatory environment (OCC SR 11-7, state insurance, healthcare AI accountability). The outcome is examination-ready, by design.",
  },
  {
    q: "How do I get started?",
    a: "Book a 15-minute introductory call. We identify your highest-exposure AI decisions and the right starting point for your organization.",
  },
]

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

/**
 * SectionHeader — eyebrow + H2 + optional red rule.
 *
 * Mobile-centered by default (per design feedback: everything below the hero
 * reads better centered on phone), reverts to left at md+ unless overridden.
 *
 * Hero uses Eyebrow + h1 directly to keep its left-aligned editorial feel.
 */
function SectionHeader({
  eyebrow,
  eyebrowTone = "muted",
  children,
  size = "default",
  maxWidth = "22em",
  align = "mobile-center",
  rule = false,
}: {
  eyebrow: React.ReactNode
  eyebrowTone?: "muted" | "red"
  children: React.ReactNode
  size?: "default" | "large"
  maxWidth?: string
  align?: "mobile-center" | "left" | "center"
  rule?: boolean
}) {
  const alignClasses =
    align === "left"
      ? "text-left"
      : align === "center"
        ? "text-center"
        : "text-center md:text-left"
  const ruleMx =
    align === "left"
      ? "mx-0"
      : align === "center"
        ? "mx-auto"
        : "mx-auto md:mx-0"
  const ledeMx =
    align === "left"
      ? "mr-auto"
      : align === "center"
        ? "mx-auto"
        : "mx-auto md:mx-0"

  return (
    <div className={alignClasses}>
      <p
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color:
            eyebrowTone === "red"
              ? "var(--color-red)"
              : "var(--color-sand)",
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-navy ${ledeMx}`}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize:
            size === "large"
              ? "clamp(26px, 3.5vw, 34px)"
              : "clamp(24px, 3vw, 32px)",
          lineHeight: 1.18,
          letterSpacing: "-0.01em",
          maxWidth,
        }}
      >
        {children}
      </h2>
      {rule && (
        <span className={`block w-[54px] h-[2px] bg-red mt-5 ${ruleMx}`} />
      )}
    </div>
  )
}

// Hero-only eyebrow (left-aligned). Kept separate so the hero stays unique.
function Eyebrow({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: muted ? "var(--color-sand)" : "var(--color-red)",
        fontWeight: 600,
      }}
    >
      {children}
    </p>
  )
}

function RedRule() {
  return <span className="block w-[54px] h-[2px] bg-red" />
}

function PendingTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block border border-rule bg-paper-2 text-sand"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        padding: "2px 8px",
        letterSpacing: "0.04em",
      }}
    >
      [pending] {children}
    </span>
  )
}

// Editorial partner-logo ticker. Continuous horizontal scroll, edge-masked,
// pauses on hover and on prefers-reduced-motion. The logo array is duplicated
// in markup so translateX(-50%) yields a seamless loop.
function PartnerTicker() {
  const loop = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
  return (
    <div className="border-t border-rule bg-paper-2">
      <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-10 pb-12">
        <p
          className="text-sand text-center"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Aligned with
        </p>
      </div>
      <div className="ticker-mask overflow-hidden pb-12">
        <div
          className="ticker-track flex items-center gap-16 md:gap-20"
          style={{ width: "max-content" }}
        >
          {loop.map((file, i) => (
            <div
              key={`${file}-${i}`}
              className="flex-shrink-0 h-12 flex items-center justify-center"
              style={{ opacity: 0.55 }}
            >
              <Image
                src={`/images/partners/${file}`}
                alt=""
                width={160}
                height={48}
                unoptimized
                className="max-h-12 w-auto object-contain"
                style={{ filter: "grayscale(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="bg-paper">
      {/* =========================================================== */}
      {/* HERO                                                          */}
      {/* =========================================================== */}
      <section className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-10 md:pt-14 pb-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-[34px]">
          {/* Left: headline + lede + CTAs */}
          <div>
            <Eyebrow>Decision Defensibility Infrastructure</Eyebrow>
            <h1
              className="text-navy mt-3"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(36px, 6vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              The Flight Recorder for Your AI Decisions
            </h1>
            <div className="mt-5">
              <RedRule />
            </div>
            <p
              className="mt-5 max-w-[32em] text-ink-body"
              style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6 }}
            >
              Regulators, boards, insurers, and litigants are starting to ask what your AI decided,
              why, and who owned it. We build the evidence file before anyone asks. The
              contemporaneous record that holds when policies and dashboards do not.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-4 sm:gap-6">
              <Link
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-navy text-white px-5 hover:bg-[#0f1d36] transition-colors w-full sm:w-auto"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 13,
                  letterSpacing: "0.03em",
                  minHeight: 48,
                }}
              >
                {CTA_LABEL}
              </Link>
              <Link
                href="#how-it-works"
                className="self-start sm:self-auto text-red border-b border-red pb-0.5 hover:text-[#A50C25] transition-colors"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
              >
                See how it works →
              </Link>
            </div>
          </div>

          {/* Right: Decision Receipt specimen */}
          <div className="self-start w-full max-w-[420px] lg:max-w-none mx-auto lg:mx-0">
            <DecisionReceipt />
          </div>
        </div>

        {/* WHY-NOW ticker */}
        <div className="bg-paper-2 border-t border-rule">
          <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-3.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-red)",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              The clock is running
            </span>
            <span
              className="text-ink-body"
              style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55 }}
            >
              The regulatory direction is one way: evidence, on demand.{" "}
              <span className="inline-block mt-1 sm:mt-0">
                <PendingTag>counsel-cleared EO N-5-26 copy</PendingTag>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* PROBLEM                                                       */}
      {/* =========================================================== */}
      <section className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-16 md:py-[64px]">
          <SectionHeader
            eyebrow="The Problem"
            size="large"
            maxWidth="18em"
          >
            The question isn&rsquo;t if your AI decisions will be examined. It&rsquo;s whether
            you&rsquo;ll have anything to show.
          </SectionHeader>

          <div
            className="problem-grid mt-10 grid grid-cols-1 md:grid-cols-3 text-center md:text-left"
            style={{ borderTop: "1px solid var(--color-navy)" }}
          >
            {PROBLEM_TRIPLET.map((item) => (
              <div
                key={item.word}
                className="problem-cell py-7 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <p
                  className="text-navy"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: 1.1,
                  }}
                >
                  {item.word}
                </p>
                <p
                  className="text-ink-body mt-2"
                  style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.5 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-8 italic text-red text-center md:text-left"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20 }}
          >
            None of them survive a deposition.
          </p>
        </div>
      </section>

      {/* =========================================================== */}
      {/* SERVICES (4-col)                                              */}
      {/* =========================================================== */}
      <section id="services" className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-16 md:pt-[64px]">
          <SectionHeader eyebrow="Services">
            Infrastructure built to withstand scrutiny, not survive it by luck.
          </SectionHeader>
          <div
            className="services-grid mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left"
            style={{ borderTop: "1px solid var(--color-navy)" }}
          >
            {SERVICES.map((svc) => (
              <div key={svc.n} className="services-cell px-6 md:px-[22px] py-8 md:py-7">
                <p
                  className="text-red"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}
                >
                  {svc.n}
                </p>
                <h3
                  className="text-navy mt-2.5 mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: 1.2,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-ink-body"
                  style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55 }}
                >
                  {svc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-2" />
      </section>

      {/* =========================================================== */}
      {/* ABOUT                                                         */}
      {/* =========================================================== */}
      <section id="about" className="border-b border-rule bg-paper-2">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-16 md:py-[64px] grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-[34px] items-start">
          {/* Photo column — centered on mobile, left on md+ */}
          <div className="text-center md:text-left">
            <Image
              src="/images/U9z34gdlWjkgtbkZ1DETif8Hg8M.webp"
              alt="David W. Gwynn"
              width={520}
              height={520}
              sizes="(min-width: 768px) 40vw, 100vw"
              unoptimized
              priority={false}
              className="w-full max-w-[320px] md:max-w-none h-auto object-cover object-top block mx-auto md:mx-0"
              style={{ borderTop: "2px solid var(--color-navy)" }}
            />
            <p
              className="mt-3 text-sand"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              David W. Gwynn · Founder
            </p>
          </div>

          <div className="text-center md:text-left">
            <SectionHeader eyebrow="About" maxWidth="none" rule>
              I&rsquo;ve seen what fails under scrutiny. I&rsquo;ve built what survives it.
            </SectionHeader>
            <p
              className="mt-5 text-ink-body mx-auto md:mx-0 max-w-[40em]"
              style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65 }}
            >
              I founded AI Advisors after watching organizations deploy powerful AI systems with no
              evidence infrastructure behind them, then scramble when the questions came. My
              background spans AI governance, model risk management, and decision auditability for
              banks, insurers, and health systems.
            </p>
            <p
              className="mt-4 text-ink-body mx-auto md:mx-0 max-w-[40em]"
              style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65 }}
            >
              PrescienceOS™ is not a framework or a checklist. It is infrastructure. The kind that
              makes accountability real before anyone demands it.
            </p>
            <div className="mt-7">
              <Link
                href="https://www.linkedin.com/in/davidwgwynn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red border-b border-red pb-0.5 hover:text-[#A50C25] transition-colors"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
              >
                David Gwynn on LinkedIn →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* HOW IT WORKS                                                  */}
      {/* =========================================================== */}
      <section id="how-it-works" className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-16 md:pt-[64px] pb-16 md:pb-[64px]">
          <SectionHeader eyebrow="How It Works">
            From exposure to evidence. Three phases, in order.
          </SectionHeader>
          <div
            className="phases-grid mt-10 grid grid-cols-1 md:grid-cols-3 text-center md:text-left"
            style={{ borderTop: "1px solid var(--color-navy)" }}
          >
            {HOW_IT_WORKS.map((phase) => (
              <div key={phase.n} className="phase-cell px-6 md:px-[22px] py-8 md:py-7">
                <p
                  className="text-red"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em" }}
                >
                  Phase {phase.n}
                </p>
                <h3
                  className="text-navy mt-2.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: 1.2,
                  }}
                >
                  {phase.title}
                </h3>
                <p
                  className="text-sand mt-1"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {phase.sub}
                </p>
                <p
                  className="text-ink-body mt-4"
                  style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6 }}
                >
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* TRACK RECORD                                                  */}
      {/* =========================================================== */}
      <section className="border-b border-rule bg-paper-2">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-16 md:py-[64px]">
          <div className="text-center md:text-left">
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-sand)",
                fontWeight: 600,
              }}
            >
              Track Record
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 text-center md:text-left">
            <div>
              <p
                className="text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 44, lineHeight: 1 }}
              >
                30+ yrs
              </p>
              <p
                className="mt-3 text-ink-body mx-auto md:mx-0 max-w-[18em]"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13, lineHeight: 1.5 }}
              >
                in capital markets, technology &amp; strategy
              </p>
            </div>
            <div>
              <p
                className="text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 44, lineHeight: 1 }}
              >
                3 IPOs
              </p>
              <p
                className="mt-3 text-ink-body mx-auto md:mx-0 max-w-[18em]"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13, lineHeight: 1.5 }}
              >
                including a $18M NASDAQ IPO at WavePhone
              </p>
              <p className="mt-3">
                <PendingTag>$6.5B IPO/merger figure to confirm</PendingTag>
              </p>
            </div>
            <div>
              <p
                className="text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 44, lineHeight: 1 }}
              >
                Regulated
              </p>
              <p
                className="mt-3 text-ink-body mx-auto md:mx-0 max-w-[18em]"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13, lineHeight: 1.5 }}
              >
                banks, insurers &amp; health systems
              </p>
            </div>
          </div>
        </div>

        {/* Partner / affiliation logos — continuous ticker */}
        <PartnerTicker />
      </section>

      {/* =========================================================== */}
      {/* REVIEWS                                                       */}
      {/* =========================================================== */}
      <section id="testimonials" className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-16 md:pt-[64px] pb-10">
          <SectionHeader eyebrow="Reviews" maxWidth="20em" align="center">
            Credibility, built case by case.
          </SectionHeader>
        </div>
        <div className="max-w-[1080px] mx-auto" style={{ borderTop: "1px solid var(--color-navy)" }}>
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="px-6 md:px-[34px] py-12 md:py-12 grid grid-cols-1 md:grid-cols-[96px_1fr] gap-8 md:gap-10 text-center md:text-left"
              style={{
                borderBottom:
                  i < TESTIMONIALS.length - 1
                    ? "1px solid var(--color-rule)"
                    : "none",
              }}
            >
              {/* Editorial portrait — centered on mobile, left at md+ */}
              <div className="flex justify-center md:justify-start">
                <div
                  className="w-[112px] h-[112px] md:w-[96px] md:h-[96px] overflow-hidden bg-white"
                  style={{
                    border: "1px solid var(--color-rule)",
                    borderTop: "2px solid var(--color-navy)",
                  }}
                >
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={112}
                    height={112}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p
                  className="text-sand"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {t.context}
                </p>
                <blockquote
                  className="text-navy mt-4 mx-auto md:mx-0 max-w-[44em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: i === 0 ? 22 : 20,
                    lineHeight: 1.45,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-baseline gap-3 flex-wrap justify-center md:justify-start">
                  <span
                    className="text-navy"
                    style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600 }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-sand"
                    style={{ fontFamily: "var(--font-ui)", fontSize: 12 }}
                  >
                    {t.role}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* =========================================================== */}
      {/* FAQ                                                           */}
      {/* =========================================================== */}
      <section id="faq" className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-16 md:py-[64px]">
          <SectionHeader eyebrow="FAQ">
            Common questions, plainly answered.
          </SectionHeader>
          <div className="mt-8 border-t border-navy">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group border-b border-rule open:bg-paper-2/40"
              >
                <summary
                  className="cursor-pointer list-none py-6 flex items-start gap-4 sm:gap-5 text-navy"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 18,
                    minHeight: 60,
                  }}
                >
                  <span
                    className="text-red flex-shrink-0 mt-0.5 select-none flex items-center justify-center"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 18,
                      width: 24,
                      height: 24,
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                  <span className="flex-1">{item.q}</span>
                </summary>
                <div className="pl-8 pr-2 pb-6">
                  <p
                    className="text-ink-body"
                    style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.65 }}
                  >
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* FINAL CTA                                                     */}
      {/* =========================================================== */}
      <section className="bg-navy">
        <div className="max-w-[860px] mx-auto px-6 md:px-[34px] py-16 md:py-20 text-center">
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#E5536A",
              fontWeight: 600,
            }}
          >
            Start where the exposure is
          </p>
          <h2
            className="mt-4 text-white mx-auto max-w-[20em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Find out where you&rsquo;re exposed before someone else does.
          </h2>
          <p
            className="mt-5 mx-auto max-w-[38em]"
            style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "#C7D0E0" }}
          >
            Every engagement begins with an AI Decision Exposure Assessment: a focused review of
            where your highest-risk AI decisions live and what your current evidence file looks
            like. If you have gaps, you will know. If you are covered, you will have the
            documentation to prove it.
          </p>
          <div className="mt-9">
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red text-white px-7 py-4 hover:bg-[#A50C25] transition-colors"
              style={{ fontFamily: "var(--font-ui)", fontSize: 14, letterSpacing: "0.03em" }}
            >
              {CTA_LABEL}
            </Link>
          </div>
          <p
            className="mt-5"
            style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "rgba(255,255,255,0.55)" }}
          >
            <a href="mailto:david@aiadvisorsllc.com" className="underline-offset-2 hover:underline">
              david@aiadvisorsllc.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
