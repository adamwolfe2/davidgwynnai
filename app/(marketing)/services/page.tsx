import type { Metadata } from "next"
import { AnimatedSection } from "@/components/marketing/animated-section"
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata: Metadata = {
  title: "Services — What We Build & Why It Survives Scrutiny",
  description:
    "Every service AI Advisors offers produces one thing: evidence. Decision Defensibility Infrastructure for banks, insurers, and health systems.",
}

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

const services = [
  {
    num: "01",
    title: "Decision Exposure Assessment",
    tagline: "Find out where you're exposed before someone else does.",
    who: "Executives, compliance officers, general counsel, and risk leaders who know AI is in use but don't have a complete picture of where decisions are being made — or what evidence exists to support them.",
    what: "A structured, time-limited diagnostic engagement that maps your highest-exposure AI-influenced decisions, evaluates your existing documentation posture, and produces a clear picture of where the evidence gaps are.",
    deliverables: [
      "Decision Exposure Map — a structured inventory of AI-influenced decisions across your organization",
      "Evidence Gap Report — an honest assessment of what your current documentation would support under examination",
      "Prioritized Risk Register — ranked by exposure, regulatory salience, and remediation effort",
      "Recommended Next Steps — a clear path forward, whether that's PrescienceOS™ implementation or targeted remediation",
    ],
    analogy:
      "Think of this as the pre-flight checklist — not because anything has gone wrong, but because you want to know the status of every system before you're in the air.",
    engagementType: "Fixed-scope engagement, typically 2–3 weeks.",
  },
  {
    num: "02",
    title: "PrescienceOS™ Implementation",
    tagline: "The infrastructure that makes every AI decision defensible — before anyone asks.",
    who: "Organizations that have completed a Decision Exposure Assessment (or equivalent) and are ready to build permanent governance infrastructure around their highest-exposure AI decisions.",
    what: "PrescienceOS™ is AI Advisors' proprietary Decision Defensibility System. It creates a real-time, durable evidence layer around the AI decisions that carry the most regulatory, fiduciary, or legal exposure.",
    deliverables: [
      "Decision Receipt™ Architecture: A structured output layer that captures — at the moment of decision — the rationale, data inputs, model version, human oversight record, and applicable controls for each covered decision",
      "Decision Registry: A searchable, auditable log of all covered decisions, organized by risk tier, regulatory framework, and responsible officer",
      "Control Binding Records: Documentation that ties each AI-influenced decision to the specific policies, model risk procedures, and governance frameworks that were active at the time",
      "Examination-Ready Package: A folder — not a story — that can be handed to an examiner, auditor, or board within hours of a request",
    ],
    analogy:
      "PrescienceOS™ is the flight recorder for your AI decisions. When something is examined — and something will be examined — the record is already there.",
    engagementType: "Full implementation, typically 6–10 weeks.",
  },
  {
    num: "03",
    title: "Director Safe Harbor & Board Governance Package",
    tagline: "Fiduciary protection that's documented, not assumed.",
    who: "Board directors, audit committee members, and general counsel at organizations where AI is influencing material decisions — and who need to demonstrate that their oversight obligations are being met.",
    what: "A governance package designed to protect directors and general counsel from personal liability exposure in AI-related regulatory actions, litigation, or enforcement proceedings.",
    deliverables: [
      "Director Safe Harbor Memoranda — formal documentation of the oversight, inquiry, and reliance processes directors used in connection with AI-influenced decisions",
      "Board Attestation Framework — a structured process for boards to formally acknowledge, review, and ratify AI governance postures on a recurring basis",
      "GC Briefing Materials — plain-language summaries of AI governance obligations, current regulatory expectations, and your organization's documented compliance posture",
      "Fiduciary Duty Documentation — records demonstrating that directors exercised reasonable care in their oversight of AI-related risk",
    ],
    analogy:
      "Safe harbor isn't about being lucky. It's about having the documentation that proves you acted reasonably — before anyone asks.",
    engagementType: "Typically delivered alongside PrescienceOS™ or as a standalone advisory package.",
  },
  {
    num: "04",
    title: "Regulatory Response & Examination Readiness",
    tagline: "When the examiner calls, you hand over a folder. Not a story.",
    who: "Banks under OCC model risk guidance. Insurers navigating state AI regulatory requirements. Health systems subject to algorithmic accountability standards. Any regulated organization that needs to demonstrate — not just describe — its AI governance.",
    what: "Hands-on preparation for regulatory examination, enforcement inquiry, or litigation discovery related to AI-influenced decisions. This is not a policy document. This is operational readiness.",
    deliverables: [
      "OCC Model Risk Alignment Review — assessment and documentation of compliance with SR 11-7 and related guidance",
      "State Insurance Regulatory Response Package — documentation of AI governance practices calibrated to your state's regulatory framework",
      "Healthcare AI Accountability Documentation — records demonstrating compliance with algorithmic transparency and fairness obligations",
      "Fair Lending AI Review — documentation supporting ECOA and Fair Housing Act compliance for AI-influenced credit decisions",
    ],
    analogy:
      "The organizations that survive regulatory examination without reputational damage aren't the ones who had perfect AI systems. They're the ones who had the paperwork.",
    engagementType: "Fixed-scope or retainer-based, depending on examination timeline and complexity.",
  },
  {
    num: "05",
    title: "AI Decision Rating™ (AIDR) & Ongoing Coverage",
    tagline: "Know your AI decision posture. Before your insurer, examiner, or board does.",
    who: "Organizations seeking a continuous, quantified view of their AI governance posture — and the ability to demonstrate improvement over time.",
    what: "The AI Decision Rating™ (AIDR) is a proprietary scoring framework that evaluates the defensibility of your covered AI decisions across five dimensions: documentation completeness, control binding, human oversight, regulatory alignment, and evidence durability.",
    deliverables: [
      "Initial AIDR Score — a quantified baseline assessment of your current AI decision governance posture",
      "Quarterly Posture Updates — recurring assessments that track improvement and flag emerging exposures",
      "Board and Examiner Summary Reports — executive-level documentation of your governance posture, suitable for board presentation or regulatory submission",
      "Continuous Advisory Access — ongoing access to David for questions, emerging regulatory developments, and decision-level guidance",
    ],
    analogy:
      "Your credit rating tells lenders what they need to know before they extend credit. Your AIDR tells regulators, boards, and insurers what they need to know before they ask.",
    engagementType: "Annual subscription with quarterly deliverables.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#f0f6ff] border-b border-[#e2e8f0] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#578cff]/10 text-[#578cff] text-xs font-semibold uppercase tracking-wider mb-6">
            Our Services
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#292929] mb-6 leading-tight"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            What We Build — And Why It Survives Scrutiny
          </h1>
          <p className="text-lg text-[#292929]/65 max-w-2xl mx-auto leading-relaxed">
            Every service we offer produces one thing: evidence. Not a framework document, not a
            slide deck — a structured, durable record of your AI decision governance that holds up
            when someone actually examines it.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((svc, i) => (
        <AnimatedSection
          key={svc.num}
          className={`max-w-5xl mx-auto px-6 py-16 md:py-24 ${
            i % 2 === 1 ? "" : ""
          }`}
          delay={0}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: number + title */}
            <div className="lg:col-span-4">
              <span className="text-6xl font-black text-[#578cff]/15 leading-none block mb-2">
                {svc.num}
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#292929] mb-3 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                {svc.title}
              </h2>
              <p className="text-[#578cff] font-semibold text-base italic mb-4">{svc.tagline}</p>
              <div className="inline-block px-3 py-1.5 rounded-full bg-[#f0f6ff] text-[#292929]/60 text-xs font-medium border border-[#e2e8f0]">
                {svc.engagementType}
              </div>
            </div>

            {/* Right: content */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-[#578cff] uppercase tracking-widest mb-2">
                  Who It&apos;s For
                </h3>
                <p className="text-sm text-[#292929]/70 leading-relaxed">{svc.who}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#578cff] uppercase tracking-widest mb-2">
                  What It Is
                </h3>
                <p className="text-sm text-[#292929]/70 leading-relaxed">{svc.what}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#578cff] uppercase tracking-widest mb-3">
                  What You Get
                </h3>
                <ul className="space-y-2">
                  {svc.deliverables.map((d, di) => (
                    <li key={di} className="flex gap-3">
                      <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#578cff]" />
                      <span className="text-sm text-[#292929]/70 leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[#f0f6ff] border border-[#e2e8f0] p-5">
                <p className="text-sm text-[#292929]/60 italic leading-relaxed">
                  &ldquo;{svc.analogy}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {i < services.length - 1 && (
            <div className="mt-16 md:mt-24 border-b border-[#e2e8f0]" />
          )}
        </AnimatedSection>
      ))}

      <CtaBand
        title="Ready to build your evidence infrastructure?"
        body="Start with a Decision Exposure Assessment. We'll identify where you're exposed and what it would take to close the gap — before someone else finds it first."
        primaryCta={{ label: "Book a Call →", href: BOOK_CALL_URL }}
        secondaryCta={{ label: "How It Works", href: "/how-it-works" }}
      />
    </>
  )
}
