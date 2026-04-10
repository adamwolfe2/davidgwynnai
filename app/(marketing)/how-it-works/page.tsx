import type { Metadata } from "next"
import Link from "next/link"
import { AnimatedSection } from "@/components/marketing/animated-section"

export const metadata: Metadata = {
  title: "How It Works — From Exposure to Evidence",
  description:
    "Most organizations don't have a governance problem — they have an evidence problem. Here's how AI Advisors builds your Decision Defensibility Infrastructure.",
}

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

const phases = [
  {
    num: "1",
    title: "Map the Terrain",
    subtitle: "Decision Exposure Assessment",
    color: "#578cff",
    steps: [
      {
        heading: "Intake & Scoping",
        body: "We begin with a structured interview process — typically 2–3 sessions — to understand the AI systems in use, the decisions they influence, and the regulatory environment you operate in.",
      },
      {
        heading: "Decision Inventory",
        body: "We map every AI-influenced decision that carries material regulatory, fiduciary, or legal exposure. Not all AI use is equal. We focus on the decisions that will be examined.",
      },
      {
        heading: "Evidence Audit",
        body: "We review your existing documentation — model risk policies, vendor contracts, audit logs, compliance procedures — and assess what it would actually support under examination.",
      },
      {
        heading: "Exposure Report",
        body: "You receive a clear, prioritized picture of where your evidence gaps are, ranked by exposure severity and remediation effort.",
      },
    ],
  },
  {
    num: "2",
    title: "Build the Infrastructure",
    subtitle: "PrescienceOS™ Implementation",
    color: "#578cff",
    steps: [
      {
        heading: "Decision Receipt™ Architecture",
        body: "We design and implement the capture layer — the structured output that records, at the moment of decision, the rationale, data inputs, model version, human oversight record, and applicable controls.",
      },
      {
        heading: "Decision Registry",
        body: "We build your searchable, auditable log of all covered decisions, organized by risk tier, regulatory framework, and responsible officer.",
      },
      {
        heading: "Control Binding",
        body: "We tie each covered decision to the specific policies and governance frameworks that were active at the time it was made — creating a durable chain of evidence.",
      },
      {
        heading: "The 7 Layers of the Decision Receipt™",
        body: "Every Decision Receipt™ captures: (1) Intent & Authority, (2) Context & Data Provenance, (3) Risk Declaration, (4) AI Contribution, (5) Human Judgment, (6) Controls in Force, and (7) Outcome & Monitoring.",
      },
    ],
  },
  {
    num: "3",
    title: "Protect the People",
    subtitle: "Director Safe Harbor & Board Governance",
    color: "#578cff",
    steps: [
      {
        heading: "Director Safe Harbor Memos",
        body: "We prepare formal documentation of the oversight, inquiry, and reliance processes your directors used in connection with AI-influenced decisions.",
      },
      {
        heading: "Board Attestation Framework",
        body: "We implement a recurring process for boards to formally acknowledge, review, and ratify your AI governance posture — creating a documented record of fiduciary care.",
      },
      {
        heading: "GC Advisory",
        body: "We provide your general counsel with plain-language briefings on AI governance obligations, current regulatory expectations, and your organization's compliance posture.",
      },
    ],
  },
  {
    num: "4",
    title: "Maintain & Signal",
    subtitle: "Ongoing Coverage + AI Decision Rating™",
    color: "#578cff",
    steps: [
      {
        heading: "Quarterly Posture Assessments",
        body: "We track your AI Decision Rating™ (AIDR) score over time, measuring improvement across documentation completeness, control binding, human oversight, regulatory alignment, and evidence durability.",
      },
      {
        heading: "Regulatory Monitoring",
        body: "We monitor emerging regulatory developments and update your governance documentation as requirements evolve.",
      },
      {
        heading: "Examination-Ready Package Maintenance",
        body: "We ensure your examination-ready package is always current — so when the request comes, you can respond within hours, not weeks.",
      },
      {
        heading: "Continuous Advisory Access",
        body: "You have ongoing access to David for questions, emerging issues, and decision-level guidance — so governance stays embedded in how you operate, not bolted on after the fact.",
      },
    ],
  },
]

const accountabilityRoles = [
  {
    role: "Chief Executive",
    owns: "Organizational AI governance posture and tone from the top",
  },
  {
    role: "Chief Risk Officer / Chief Compliance Officer",
    owns: "Decision Exposure Map, Evidence Gap Report, and PrescienceOS™ maintenance",
  },
  {
    role: "General Counsel",
    owns: "Director Safe Harbor documentation and regulatory response readiness",
  },
  {
    role: "Board / Audit Committee",
    owns: "Attestation framework and fiduciary duty documentation",
  },
  {
    role: "Business Line Leaders",
    owns: "Decision Receipt™ completion and control binding at the point of decision",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#f0f6ff] border-b border-[#e2e8f0] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#578cff]/10 text-[#578cff] text-xs font-semibold uppercase tracking-wider mb-6">
            Our Process
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#292929] mb-6 leading-tight"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            From Exposure to Evidence
          </h1>
          <p className="text-xl font-semibold text-[#578cff] mb-4">
            How We Build Your Defensibility Infrastructure
          </p>
          <p className="text-lg text-[#292929]/65 max-w-2xl mx-auto leading-relaxed">
            Most organizations don&apos;t have a governance problem — they have an evidence problem.
          </p>
        </div>
      </section>

      {/* Flight recorder analogy */}
      <AnimatedSection>
        <div className="rounded-2xl bg-[#292929] text-white p-10 md:p-14 text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold leading-tight mb-4"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            &ldquo;PrescienceOS™ is the flight recorder for AI decisions.&rdquo;
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Every commercial aircraft carries a flight data recorder. Not because crashes are
            expected — but because when one happens, the investigation starts with the data. AI
            governance works the same way. When a regulator, auditor, or litigant examines an
            AI-influenced decision, they start by asking for the record. PrescienceOS™ ensures that
            record exists.
          </p>
        </div>
      </AnimatedSection>

      {/* Phases */}
      {phases.map((phase, i) => (
        <AnimatedSection key={phase.num} delay={0}>
          <div className="flex gap-6 md:gap-10 items-start">
            <div className="flex-shrink-0">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg"
                style={{ background: phase.color, boxShadow: `0 4px 20px ${phase.color}40` }}
              >
                {phase.num}
              </div>
              {i < phases.length - 1 && (
                <div className="w-0.5 bg-[#e2e8f0] mx-auto mt-4 h-8" />
              )}
            </div>
            <div className="flex-1 pb-8 md:pb-12">
              <p className="text-xs font-bold text-[#578cff] uppercase tracking-widest mb-1">
                Phase {phase.num}
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#292929] mb-1 leading-tight"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                {phase.title}
              </h2>
              <p className="text-base text-[#578cff] font-semibold mb-8">{phase.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {phase.steps.map((step) => (
                  <div
                    key={step.heading}
                    className="rounded-xl border border-[#e2e8f0] bg-[#f0f6ff] p-6"
                  >
                    <h3 className="font-bold text-[#292929] text-sm mb-2">{step.heading}</h3>
                    <p className="text-sm text-[#292929]/65 leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* Who Owns What */}
      <AnimatedSection>
        <h2
          className="text-2xl md:text-3xl font-bold text-[#292929] mb-8 text-center"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
          Who Owns What
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0] shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-[#578cff] text-white">
                <th className="text-left px-6 py-4 text-sm font-semibold">Role</th>
                <th className="text-left px-6 py-4 text-sm font-semibold">Accountability</th>
              </tr>
            </thead>
            <tbody>
              {accountabilityRoles.map((row, i) => (
                <tr
                  key={row.role}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#f0f6ff]"}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-[#292929]">{row.role}</td>
                  <td className="px-6 py-4 text-sm text-[#292929]/65">{row.owns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* Bottom Line */}
      <AnimatedSection>
        <div className="rounded-2xl bg-[#f0f6ff] border border-[#e2e8f0] p-10 md:p-14 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#292929] mb-6"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            The Bottom Line
          </h2>
          <p className="text-lg text-[#292929]/70 max-w-2xl mx-auto leading-relaxed mb-4">
            The organizations that navigate AI scrutiny successfully aren&apos;t the ones who never made
            a questionable decision. They&apos;re the ones who built the evidence infrastructure before
            anyone asked.
          </p>
          <p className="text-base text-[#292929]/60 max-w-xl mx-auto leading-relaxed">
            When a regulator, auditor, board member, or plaintiff asks &ldquo;How was this AI decision
            made, and who authorized it?&rdquo; — your answer should be a folder, not a story.
            PrescienceOS™ ensures you always have the folder.
          </p>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="cta-gradient w-full py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Ready to build your evidence infrastructure?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto leading-relaxed">
            Start with a Decision Exposure Assessment. In 2–3 weeks, you&apos;ll know exactly where you&apos;re
            exposed — and what it would take to close the gap.
          </p>
          <Link
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#578cff] font-bold text-base hover:bg-[#f0f6ff] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
          >
            Request Your Decision Exposure Assessment →
          </Link>
        </div>
      </section>
    </>
  )
}
