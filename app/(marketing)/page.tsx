import Image from "next/image"
import Link from "next/link"
import { DecisionReceipt } from "@/components/marketing/decision-receipt"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"
const TYPEFORM_URL = "https://form.typeform.com/to/brq8lDnN"

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
      "OCC model-risk, state insurance, and healthcare AI response — demonstrated, not described.",
  },
]

const HOW_IT_WORKS = [
  {
    n: "I",
    title: "Map the terrain",
    sub: "Decision Exposure Assessment",
    body:
      "We map every AI-influenced decision that carries material regulatory, fiduciary, or legal exposure — and audit the evidence you have today. You receive a prioritized exposure report.",
  },
  {
    n: "II",
    title: "Build the infrastructure",
    sub: "PrescienceOS™ Implementation",
    body:
      "Decision Receipt™ architecture, Decision Registry, and control binding — calibrated to your regulatory environment and live before your next examination.",
  },
  {
    n: "III",
    title: "Protect the people",
    sub: "Director Safe Harbor & Board Governance",
    body:
      "Director safe harbor memoranda, board attestation framework, and GC advisory — fiduciary documentation built on process integrity, not assumption.",
  },
]

const TESTIMONIALS = [
  {
    name: "R. Glenn Williamson",
    role: "Founder & CEO, Canada-Arizona Business Council",
    photo: "/images/testimonials/QEc1J5NpW8H1Ly5PxgRNEoCQxHk.avif",
    quote:
      "David's innovative capital markets approach at WavePhone transformed how we delivered digital data over broadcast TV signals. His expertise directly increased revenue, created jobs, and led to a successful $18 million NASDAQ IPO. Beyond raising capital, David was a true partner, transforming both our business and my career.",
  },
  {
    name: "Jayanth Kumar",
    role: "Media Products, Apple",
    photo: "/images/testimonials/NrWEkANSuhU5alDIXE1hmiauNM4.webp",
    quote:
      "I had the pleasure of being in the same cohort as David in the AI for Leaders Post Graduate course at UT Austin. His domain knowledge and enthusiasm for AI-based healthcare initiatives makes him a very valuable asset.",
  },
  {
    name: "Thuy Tran",
    role: "Asst VP for Integrated Communications, Univ. of Oregon",
    photo: "/images/testimonials/aCSeWv6Et9jbSVtMxA51aqycOyw.webp",
    quote:
      "David is an exceptional person to work with: co-strategic, inclusive, collaborative, and creative. I continue to be impressed with David's vision and Oregon State University is fortunate to have worked with him.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Decision Defensibility Infrastructure?",
    a: "The contemporaneous, structured record of an AI-influenced decision — what was decided, why, by whom, under which controls, and with what outcome. It exists before scrutiny arrives, not after. PrescienceOS™ is the system that captures and holds it.",
  },
  {
    q: "How is this different from a policy or framework?",
    a: "Policies describe intent. Frameworks describe aspiration. Certifications describe effort. None of them survive a deposition. Decision Defensibility Infrastructure produces evidence at the moment of decision — a folder you can hand over, not a story you have to tell.",
  },
  {
    q: "Who is this for?",
    a: "General Counsel, Chief Risk Officers, Chief Compliance Officers, and boards in banks, insurers, and health systems — the leaders who will be asked to explain AI-influenced decisions under examination, in discovery, or before the board.",
  },
  {
    q: "What is the Decision Exposure Assessment?",
    a: "A structured, time-limited diagnostic — typically 2–3 weeks — that maps where your highest-exposure AI decisions live, audits your existing documentation, and produces a prioritized exposure report. It is the first step of every engagement.",
  },
  {
    q: "What does PrescienceOS™ implementation look like?",
    a: "A 6–10 week engagement that deploys Decision Receipt™ architecture, Decision Registry, and control binding records — calibrated to your specific regulatory environment (OCC SR 11-7, state insurance, healthcare AI accountability). The outcome is examination-ready, by design.",
  },
  {
    q: "How do I get started?",
    a: "Book a 15-minute introductory call. We identify your highest-exposure AI decisions and the right starting point for your organization.",
  },
]

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

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
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-12 md:pt-14 pb-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-[34px]">
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
              why, and who owned it. We build the evidence file before anyone asks — the
              contemporaneous record that holds when policies and dashboards do not.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <Link
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-5 py-3 hover:bg-[#0f1d36] transition-colors"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13, letterSpacing: "0.03em" }}
              >
                {CTA_LABEL}
              </Link>
              <Link
                href="#how-it-works"
                className="text-red border-b border-red pb-0.5 hover:text-[#A50C25] transition-colors"
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
              style={{ fontFamily: "var(--font-body)", fontSize: 14 }}
            >
              The regulatory direction is one way: evidence, on demand. <PendingTag>counsel-cleared EO N-5-26 copy</PendingTag>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* PROBLEM                                                       */}
      {/* =========================================================== */}
      <section className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-14 md:py-[52px]">
          <Eyebrow muted>The Problem</Eyebrow>
          <p
            className="mt-4 text-navy max-w-[18em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(26px, 3.5vw, 34px)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}
          >
            The question isn&rsquo;t if your AI decisions will be examined. It&rsquo;s whether
            you&rsquo;ll have anything to show.
          </p>

          <div className="mt-10 border-t border-navy grid grid-cols-1 md:grid-cols-3">
            {PROBLEM_TRIPLET.map((item, i) => (
              <div
                key={item.word}
                className={
                  "py-6 pr-6 md:pr-8 " +
                  (i < PROBLEM_TRIPLET.length - 1 ? "md:border-r border-rule" : "")
                }
              >
                <p
                  className="text-navy"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 21 }}
                >
                  {item.word}
                </p>
                <p
                  className="text-ink-body mt-1"
                  style={{ fontFamily: "var(--font-body)", fontSize: 14 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-7 italic text-red"
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
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-14 md:pt-[52px] pb-2">
          <Eyebrow muted>Services</Eyebrow>
          <p
            className="mt-4 text-navy max-w-[22em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(24px, 3vw, 32px)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}
          >
            Infrastructure built to withstand scrutiny — not survive it by luck.
          </p>
        </div>
        <div className="max-w-[1080px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-navy">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.n}
              className={
                "px-6 md:px-[22px] py-7 " +
                (i < SERVICES.length - 1 ? "lg:border-r border-rule" : "") +
                " " +
                (i % 2 === 0 ? "md:border-r lg:border-r" : "") +
                " " +
                (i < SERVICES.length - 2 ? "md:border-b lg:border-b-0" : "") +
                " border-rule"
              }
            >
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
      </section>

      {/* =========================================================== */}
      {/* ABOUT                                                         */}
      {/* =========================================================== */}
      <section id="about" className="border-b border-rule bg-paper-2">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-14 md:py-[52px] grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-[34px] items-start">
          <div>
            <div className="border border-rule bg-white">
              <Image
                src="/images/U9z34gdlWjkgtbkZ1DETif8Hg8M.webp"
                alt="David W. Gwynn"
                width={520}
                height={520}
                unoptimized
                className="w-full h-auto object-cover object-top"
              />
            </div>
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

          <div>
            <Eyebrow muted>About</Eyebrow>
            <p
              className="mt-4 text-navy"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(24px, 3vw, 32px)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              I&rsquo;ve seen what fails under scrutiny. I&rsquo;ve built what survives it.
            </p>
            <div className="mt-5">
              <RedRule />
            </div>
            <p
              className="mt-5 text-ink-body"
              style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65 }}
            >
              I founded AI Advisors after watching organizations deploy powerful AI systems with no
              evidence infrastructure behind them — then scramble when the questions came. My
              background spans AI governance, model risk management, and decision auditability for
              banks, insurers, and health systems.
            </p>
            <p
              className="mt-4 text-ink-body"
              style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65 }}
            >
              PrescienceOS™ is not a framework or a checklist. It is infrastructure — the kind that
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
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-14 md:pt-[52px] pb-2">
          <Eyebrow muted>How It Works</Eyebrow>
          <p
            className="mt-4 text-navy max-w-[22em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(24px, 3vw, 32px)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}
          >
            From exposure to evidence — three phases, in order.
          </p>
        </div>
        <div className="max-w-[1080px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 border-t border-navy">
          {HOW_IT_WORKS.map((phase, i) => (
            <div
              key={phase.n}
              className={
                "px-6 md:px-[22px] py-7 " +
                (i < HOW_IT_WORKS.length - 1 ? "md:border-r border-rule" : "")
              }
            >
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
      </section>

      {/* =========================================================== */}
      {/* TRACK RECORD                                                  */}
      {/* =========================================================== */}
      <section className="border-b border-rule bg-paper-2">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-14 md:py-[52px]">
          <Eyebrow muted>Track Record</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <p
                className="text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 44, lineHeight: 1 }}
              >
                30+ yrs
              </p>
              <p
                className="mt-2 text-ink-body"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
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
                className="mt-2 text-ink-body"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
              >
                including a $18M NASDAQ IPO at WavePhone
              </p>
              <p className="mt-2">
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
                className="mt-2 text-ink-body"
                style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
              >
                banks, insurers &amp; health systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* REVIEWS                                                       */}
      {/* =========================================================== */}
      <section id="testimonials" className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-14 md:pt-[52px] pb-2">
          <Eyebrow muted>Reviews</Eyebrow>
          <p
            className="mt-4 text-navy max-w-[20em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(24px, 3vw, 32px)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}
          >
            Credibility, built case by case.
          </p>
        </div>
        <div className="max-w-[1080px] mx-auto mt-10 border-t border-navy">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={
                "px-6 md:px-[34px] py-8 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-5 md:gap-8 " +
                (i < TESTIMONIALS.length - 1 ? "border-b border-rule" : "")
              }
            >
              <div className="border border-rule bg-white w-[80px] h-[80px] overflow-hidden">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={80}
                  height={80}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote
                  className="text-navy"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: 19,
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4">
                  <p
                    className="text-navy"
                    style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-sand"
                    style={{ fontFamily: "var(--font-ui)", fontSize: 12 }}
                  >
                    {t.role}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}

          {/* Pending Alldridge slot — visible placeholder per CLAUDE.md guardrail */}
          <div className="px-6 md:px-[34px] py-8 border-t border-rule bg-paper-2 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-5 md:gap-8">
            <div className="border border-rule bg-white w-[80px] h-[80px] flex items-center justify-center">
              <span
                className="text-sand"
                style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}
              >
                [pending]
              </span>
            </div>
            <div>
              <p
                className="text-sand"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 17,
                  lineHeight: 1.4,
                }}
              >
                Scott Alldridge testimonial — quote awaited.
              </p>
              <p className="mt-3">
                <PendingTag>Alldridge quote, attribution &amp; headshot</PendingTag>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* READINESS QUIZ (Typeform — preserved)                         */}
      {/* =========================================================== */}
      <section className="border-b border-rule bg-paper-2">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-14 md:py-[52px]">
          <Eyebrow muted>Readiness Quiz</Eyebrow>
          <p
            className="mt-4 text-navy max-w-[24em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(22px, 2.8vw, 28px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Find out exactly where your AI strategy stands — and what to fix next.
          </p>
          <div className="mt-8 border border-rule bg-white overflow-hidden" style={{ height: 500 }}>
            <iframe
              src={TYPEFORM_URL}
              width="100%"
              height="570"
              style={{ border: "none", display: "block", marginTop: "-70px" }}
              title="AI Readiness Quiz"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* FAQ                                                           */}
      {/* =========================================================== */}
      <section id="faq" className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-14 md:py-[52px]">
          <Eyebrow muted>FAQ</Eyebrow>
          <p
            className="mt-4 text-navy max-w-[22em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(24px, 3vw, 32px)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}
          >
            Common questions, plainly answered.
          </p>
          <div className="mt-8 border-t border-navy">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group border-b border-rule open:bg-paper-2/40"
              >
                <summary
                  className="cursor-pointer list-none py-5 flex items-start gap-5 text-navy"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18 }}
                >
                  <span
                    className="text-red mt-1 select-none"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 14 }}
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
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-14 md:py-16 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-[34px] items-center">
          <div>
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
            <p
              className="mt-3 text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(26px, 3.5vw, 36px)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
              }}
            >
              Find out where you&rsquo;re exposed — before someone else does.
            </p>
            <p
              className="mt-4 max-w-[36em]"
              style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "#C7D0E0" }}
            >
              Every engagement begins with an AI Decision Exposure Assessment: a focused review of
              where your highest-risk AI decisions live and what your current evidence file looks
              like. If you have gaps, you will know. If you are covered, you will have the
              documentation to prove it.
            </p>
            <p className="mt-3" style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
              <a href="mailto:david@aiadvisorsllc.com" className="underline-offset-2 hover:underline">
                david@aiadvisorsllc.com
              </a>
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red text-white px-6 py-4 hover:bg-[#A50C25] transition-colors"
              style={{ fontFamily: "var(--font-ui)", fontSize: 14, letterSpacing: "0.03em" }}
            >
              {CTA_LABEL}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
