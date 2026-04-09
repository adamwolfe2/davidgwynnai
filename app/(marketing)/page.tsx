"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Plus, X, ChevronRight, Shield, TrendingUp, Handshake, Cpu, Zap, Database, Settings2 } from "lucide-react"
import { LogoTicker } from "@/components/marketing/logo-ticker"
import { CountUp } from "@/components/ui/count-up"
import { GridBackground } from "@/components/ui/grid-background"

const BOOK_CALL_URL = "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"
const TYPEFORM_URL = "https://form.typeform.com/to/brq8lDnN"

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-1.5 mb-4">
      <ChevronRight className="w-3 h-3 text-[#578cff]" />
      <span className="text-xs font-medium text-[#578cff] tracking-wide">{children}</span>
    </div>
  )
}

function StarRating() {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <div className="flex -space-x-2">
        {["/images/testimonials/3Mpvf2kjeOX9rhi4A033R1O5I.webp", "/images/testimonials/48biUygDiwbZYSpDjOkDbWcvg.webp", "/images/testimonials/INhUQ15tVRlexqBYDVn8V3f1QZA.avif"].map((src, i) => (
          <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm">
            <Image src={src} alt="Client" width={28} height={28} unoptimized className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-yellow-500 text-sm">★★★★★</span>
        <span className="text-xs text-[#292929]/50 ml-0.5">4.7/5 · 300+ businesses worked</span>
      </div>
    </div>
  )
}

function ServiceDemo1() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4">
      <p className="text-xs font-semibold text-[#292929]/70 mb-3">AI Advisors Can Accelerate Your Goals</p>
      <div className="bg-white rounded-lg border border-[#e2e8f0] px-3 py-2 text-xs text-[#292929]/40 mb-3">Let&apos;s get started...</div>
      <div className="flex gap-2">
        {["bg-gradient-to-br from-pink-300 to-purple-400", "bg-gradient-to-br from-blue-300 to-cyan-400", "bg-gradient-to-br from-orange-300 to-pink-300"].map((g, i) => (
          <div key={i} className={`w-9 h-9 rounded-lg ${g} flex-shrink-0`} />
        ))}
      </div>
    </motion.div>
  )
}

function ServiceDemo2() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold text-[#292929]/80">Ascend AI™ Audit</p>
        <span className="text-[#292929]/30 text-xs">•••</span>
      </div>
      <p className="text-[11px] text-[#292929]/50 mb-3">Building Your Business</p>
      <div className="w-full bg-[#578cff] text-white text-[11px] font-medium rounded-lg py-1.5 flex items-center justify-center gap-1.5 mb-2">
        <span>✦</span> AI Readiness Scorecard
      </div>
      <p className="text-[10px] text-[#292929]/40 mb-2">Unlimited Credits</p>
      <div className="flex gap-1.5 flex-wrap">
        {["Audio & Video File", "Logomark", "Branding"].map((t) => (
          <span key={t} className="text-[9px] bg-[#f0f6ff] text-[#578cff] px-2 py-0.5 rounded-full">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceDemo3() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-[#578cff]/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#578cff]" />
        </div>
        <p className="text-xs font-semibold text-[#292929]/80">David&apos;s Custom Roadmap</p>
      </div>
      <div className="flex gap-1.5 mb-3">
        {["from-pink-200 to-purple-300", "from-blue-200 to-indigo-300", "from-teal-200 to-cyan-300"].map((g, i) => (
          <div key={i} className={`flex-1 h-12 rounded-lg bg-gradient-to-br ${g}`} />
        ))}
      </div>
      <p className="text-[10px] text-[#292929]/50 mb-2">Map out my business roadmap</p>
      <div className="bg-[#578cff] text-white text-[11px] font-medium rounded-lg px-3 py-1 inline-flex items-center gap-1">
        <span>✦</span> Generate AI
      </div>
    </motion.div>
  )
}

function ServiceDemo4() {
  const tools = ["ChatGPT", "Perplexity", "Claude", "Slack", "Figma"]
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4">
      <p className="text-xs font-semibold text-[#292929]/70 mb-3">Connect with:</p>
      <ul className="space-y-1.5 mb-3">
        {tools.map((t, i) => (
          <motion.li key={t} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.08 * i }} className="flex items-center gap-2 text-[11px] text-[#292929]/60">
            <div className="w-1.5 h-1.5 rounded-full bg-[#578cff]" />
            {t}
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-end">
        <div className="bg-[#578cff] text-white text-[11px] font-medium rounded-lg px-3 py-1 inline-flex items-center gap-1">
          Get Started <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  )
}

const FAQ_ITEMS = [
  { q: "What exactly happens during the Digital Triage Call?", a: "We start with a 30-minute conversation to understand your key challenges, review your current AI maturity, and agree on immediate next steps to drive impact." },
  { q: "How do you guarantee measurable ROI?", a: "Every engagement starts with defined success metrics. We track decision coverage, regulatory examination outcomes, and governance posture improvements — measurable, documented results you can show your board." },
  { q: "Which industries do you specialize in?", a: "We specialize in regulated industries: banking and financial services, insurance, and healthcare. These are environments where AI governance isn't optional — it's existential." },
  { q: "How long does a typical engagement last?", a: "Decision Exposure Assessments typically run 2–3 weeks. PrescienceOS™ implementations run 6–10 weeks. Board governance packages are ongoing. Every engagement is scoped to your specific environment." },
  { q: "How do I get started?", a: "Book a 15-minute introductory call. We'll identify your highest-exposure AI decisions and determine the right starting point for your organization." },
]

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-[#e2e8f0]">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="py-4">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between text-left gap-4">
            <span className="text-sm font-medium text-[#292929]">{item.q}</span>
            <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#292929]/50 hover:border-[#578cff] hover:text-[#578cff] transition-colors">
              {open === i ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            </span>
          </button>
          <motion.div initial={false} animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="text-sm text-[#292929]/60 leading-relaxed pt-3 pr-10">{item.a}</p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO — white bg, barely blue gradient at top */}
      <section className="relative overflow-hidden hero-gradient min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-20">
        <GridBackground variant="blue" glowPosition="top-center" />
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#578cff]/70 mb-6">
          Decision Defensibility Infrastructure
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <StarRating />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#292929] leading-[1.1] tracking-tight max-w-4xl mb-6" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
          AI Decisions Get Examined.<br />The Leaders Behind Them Should Never Stand Alone.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-base text-[#292929]/65 max-w-2xl mx-auto leading-relaxed mb-3">
          I build Decision Defensibility Infrastructure for executives and boards in banks, insurers, and health systems — so when the scrutiny comes, the record is already there.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm text-[#292929]/45 max-w-xl mx-auto leading-relaxed mb-10">
          With over 20 years of experience in regulated industries, I&apos;ve watched organizations deploy AI with confidence — and face regulators, auditors, and boards without a single document that explains why a decision was made, who owned it, or what controls were in force. That gap is the liability. I close it.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-col sm:flex-row items-center gap-3">
          <Link href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#578cff] text-white text-sm font-semibold hover:bg-[#4070e0] hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md">
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/how-it-works" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#578cff]/30 text-[#578cff] text-sm font-medium hover:bg-[#578cff]/5 transition-all">
            See How It Works
          </Link>
        </motion.div>
      </section>

      {/* LOGO TICKER */}
      <LogoTicker />

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-white py-20 px-6">
        <GridBackground variant="blue" glowPosition="top-right" />
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionTag>Services</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] text-center max-w-xl mx-auto leading-tight" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              AI solutions tailored for your business needs
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { n: "01", title: "Decision Defensibility Assessment", body: "A focused diagnostic of where your highest-exposure AI decisions live and what your current evidence file looks like. Most organizations discover gaps in the first session.", demo: <ServiceDemo1 />, delay: 0.05 },
              { n: "02", title: "PrescienceOS™ Implementation", body: "Full deployment of the Decision Receipt™ architecture and Decision Registry — calibrated to your regulatory environment and live before your next examination.", demo: <ServiceDemo2 />, delay: 0.1 },
              { n: "03", title: "Board & GC Advisory", body: "Ongoing counsel for directors and general counsel navigating AI governance obligations — fiduciary duty documentation, director safe harbor memos, and board attestation frameworks.", demo: <ServiceDemo3 />, delay: 0.05 },
              { n: "04", title: "Governance Readiness for Regulated Industries", body: "OCC model risk alignment, state insurance regulatory response, healthcare AI accountability — for organizations that need to demonstrate governance, not just describe it.", demo: <ServiceDemo4 />, delay: 0.1 },
            ].map(({ n, title, body, demo, delay }) => (
              <Reveal key={n} delay={delay}>
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <p className="text-xs font-semibold text-[#578cff] mb-2">{n}</p>
                  <h3 className="text-base font-bold text-[#292929] mb-3">{title}</h3>
                  <p className="text-sm text-[#292929]/60 leading-relaxed">{body}</p>
                  {demo}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IS THIS YOU */}
      <section className="bg-white py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <Image src="/images/services/Q2Pa7aimmC33LpDFx1NfIXCbe0Q.avif" alt="Stalled growth challenges" width={560} height={420} unoptimized className="w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTag>Is This You?</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] leading-tight mb-5" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Stalled growth?<br />Fragmented systems?<br />Missed opportunities?<br />You&apos;re not alone.
            </h2>
            <p className="text-sm text-[#292929]/60 leading-relaxed mb-8">
              90% of companies in 2025 struggle to define an actionable AI strategy, lack the expertise to implement AI solutions, face inefficient and unscalable processes, and worry that competitors will outpace you with AI.
            </p>
            <Link href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#578cff] text-white text-sm font-semibold hover:bg-[#4070e0] transition-all">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-16 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionTag>Introduction</SectionTag>
            <p className="text-2xl md:text-3xl font-semibold text-[#292929] leading-[1.5]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              AI Advisors, LLC delivers{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#578cff]/15 mx-1 align-middle"><Cpu className="w-3.5 h-3.5 text-[#578cff]" /></span>{" "}
              all solutions, from AI Agents, Chatbots, and Workflow{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#578cff]/15 mx-1 align-middle"><Zap className="w-3.5 h-3.5 text-[#578cff]" /></span>{" "}
              Automation. We specialize in{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#578cff]/15 mx-1 align-middle"><Database className="w-3.5 h-3.5 text-[#578cff]" /></span>{" "}
              LLM development, AI consulting, and content to drive{" "}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#578cff]/15 mx-1 align-middle"><Settings2 className="w-3.5 h-3.5 text-[#578cff]" /></span>{" "}
              innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-white py-20 px-6 border-t border-[#f0f0f0]">
        <GridBackground variant="purple" glowPosition="top-left" />
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionTag>Why Us</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] text-center mb-12" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Why Choose Us</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Clarity First", body: "Most AI initiatives fail because they chase trends, not ROI. My AI Readiness Diagnostic Scorecard identifies high-leverage opportunities within your operations — prioritized for financial impact, compliance, and speed.", delay: 0.05 },
              { icon: TrendingUp, title: "Compounding Leverage", body: "I design agentic systems, not just point automations. These systems reduce cycle times by 40–70% and create durable, compounding advantages — whether in regulated workflows or deal pipelines.", delay: 0.1 },
              { icon: Handshake, title: "Aligned Incentives", body: "I work like a deal partner, not a contractor. Every advisory engagement and implementation is structured around your business outcomes, valuation, and long-term growth.", delay: 0.15 },
            ].map(({ icon: Icon, title, body, delay }) => (
              <Reveal key={title} delay={delay}>
                <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#578cff]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#578cff]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#292929] mb-3">{title}</h3>
                  <p className="text-sm text-[#292929]/60 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionTag>Testimonials</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] text-center max-w-lg mx-auto mb-14" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              What our happy clients say about our services
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { name: "Jimmy Bogoff", role: "Founder & CEO at Fearless Influence", photo: "/images/testimonials/3Mpvf2kjeOX9rhi4A033R1O5I.webp", text: "I had the good fortune of working with David for several years to grow and develop our Eugene territory. He's a determined and persistent account executive and an extremely effective networker. David uses his networking connections to open up new business relationships. I enjoyed working with David.", delay: 0.05 },
              { name: "Jim Dyck", role: "Digital Sales Manager at Nexstar Media Group", photo: "/images/testimonials/48biUygDiwbZYSpDjOkDbWcvg.webp", text: "I had the privilege of working with David for several years. David is a great networker and seems to have his hands in everything in the community. He has a great ability to connect multiple moving parts to make seemingly complex ideas understandable. David is a savvy business person and is an asset to any organization.", delay: 0.1 },
              { name: "Michael Newman", role: "Founder and President at Thanks For Real", photo: "/images/testimonials/INhUQ15tVRlexqBYDVn8V3f1QZA.avif", text: "David has previously been a professional consultant and advocate for my business; regularly seeking and giving my company opportunities for growth, new sales and revenues. He has opened doors typically unavailable to other consultants.", delay: 0.15 },
              { name: "Jayash Kumar", role: "Media Products at ApplikMedia / Apple", photo: "/images/testimonials/JA4e70uuB6w88xiCGB410mfx2xs.webp", text: "I had the pleasure of being in the same cohort as David in the AI for Leaders Post Graduate course at UT Austin. His domain knowledge and enthusiasm for AI-based healthcare initiatives makes him a very valuable asset.", delay: 0.05 },
              { name: "Ziva Oster", role: "President / CEO @ AskZipy.com", photo: "/images/testimonials/KyTX3O9y2aVYCwcZBeKK1nmAiNU.avif", text: "David Gwynn is a knowledgeable and talented individual with great enthusiasm in all aspects of his life. He has a natural ability to bond with people and ensure a win-win relationship for all entities involved.", delay: 0.1 },
              { name: "Thuy Tran", role: "Asst VP for Integrated Communications, Univ. of Oregon", photo: "/images/testimonials/NrWEkANSuhU5alDIXE1hmiauNM4.webp", text: "David is an exceptional person to work with: co-strategic, inclusive, collaborative, and creative. I continue to be impressed with David's vision and Oregon State University is fortunate to have worked with him.", delay: 0.15 },
            ].map(({ name, role, photo, text, delay }) => (
              <Reveal key={name} delay={delay}>
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#f0f6ff]">
                      <Image src={photo} alt={name} width={40} height={40} unoptimized className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#292929]">{name}</p>
                      <p className="text-[10px] text-[#292929]/45 leading-tight">{role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#292929]/65 leading-relaxed flex-1">{text}</p>
                  <p className="text-yellow-400 text-sm mt-4">★★★★★</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-10 text-center max-w-3xl mx-auto">
              <p className="text-yellow-400 text-2xl mb-5">★★★★★</p>
              <blockquote className="text-lg md:text-xl text-[#292929] font-medium leading-relaxed mb-6">
                &ldquo;David&apos;s innovative capital markets approach at WavePhone transformed how we delivered digital data over broadcast TV signals. His expertise directly increased revenue, created jobs, and led to a successful $18 million NASDAQ IPO. Beyond raising capital, David was a true partner, transforming both our business and my career.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#f0f6ff]">
                  <Image src="/images/testimonials/QEc1J5NpW8H1Ly5PxgRNEoCQxHk.avif" alt="R. Glenn Williamson" width={40} height={40} unoptimized className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#292929]">R. Glenn Williamson</p>
                  <p className="text-xs text-[#292929]/50">Founder and CEO, Canada-Arizona Business Council</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionTag>How it works</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] text-center mb-14" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>How AI Advisors Works</h2>
          </Reveal>
          <div className="space-y-10">
            {[
              { n: 1, title: "Schedule Your Digital Triage Call", body: "A complimentary 30-minute session to uncover your top AI challenges and define clear objectives.", delay: 0.05 },
              { n: 2, title: "Prototype & Audit", body: "Combine the Ascend AI™ Audit and AI Advantage Sprint to validate key use cases, pinpoint gaps, and demonstrate early wins.", delay: 0.1 },
              { n: 3, title: "Roadmap & Implement", body: "Co-create your phased AI Strategy Roadmap, then execute with hands-on support to deliver measurable growth.", delay: 0.15 },
            ].map(({ n, title, body, delay }) => (
              <Reveal key={n} delay={delay}>
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#578cff] flex items-center justify-center text-white text-sm font-bold">{n}</div>
                  <div>
                    <h3 className="text-base font-semibold text-[#292929] mb-1.5">{title}</h3>
                    <p className="text-sm text-[#292929]/60 leading-relaxed">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEET DAVID */}
      <section id="about" className="bg-white py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/U9z34gdlWjkgtbkZ1DETif8Hg8M.webp" alt="David Gwynn" width={520} height={480} unoptimized className="w-full object-cover object-top" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTag>About us</SectionTag>
            <h2 className="text-3xl font-bold text-[#292929] mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Meet David Gwynn</h2>
            <p className="text-sm text-[#292929]/60 mb-5">Governance-first. Evidence-driven. Built for regulated environments.</p>
            <p className="text-sm text-[#292929]/70 leading-relaxed mb-6">I lead AI Advisors, LLC — a governance-first advisory firm specializing in the decisions that matter most: the ones that will be examined. My work focuses on three things:</p>
            <div className="space-y-5 mb-8">
              {[
                { title: "AI Governance & Decision Rights", body: "Helping executives and boards establish who owns AI-influenced decisions, under what authority, and with what evidence trail." },
                { title: "Decision Auditability", body: "Implementing PrescienceOS™ — the system that captures what was decided, why, and by whom — so your organization can produce the record when regulators, auditors, or litigants ask for it." },
                { title: "Operational Readiness for Regulated Industries", body: "Ensuring AI deployments in banks, health systems, and insurers align with model risk guidance, fair lending requirements, and emerging regulatory standards — with the documentation to prove it." },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#578cff] mt-1.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#292929] mb-0.5">{title}</p>
                    <p className="text-sm text-[#292929]/60 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="https://www.linkedin.com/in/davidwgwynn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#578cff] text-white text-sm font-semibold hover:bg-[#4070e0] transition-all">
              LinkedIn <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f8fafc] border-t border-b border-[#e2e8f0] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { to: 30, suffix: "+", label: "Years of Leadership in Technology & Strategy" },
            { to: 18, suffix: "M", label: "NASDAQ IPO Value Delivered at WavePhone" },
            { to: 438, suffix: "+", label: "Executive AI Consultations Completed" },
            { to: 10, suffix: "M+", label: "AI-Powered Decisions" },
          ].map(({ to, suffix, label }) => (
            <Reveal key={label}>
              <div className="text-4xl md:text-5xl font-bold text-[#292929] mb-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                <CountUp to={to} suffix={suffix} />
              </div>
              <p className="text-xs text-[#292929]/55 leading-snug">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUIZ */}
      <section className="hero-gradient-dark py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">Quiz</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Are You Ready?</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-8 mb-8 text-left">
              <p className="text-sm font-semibold text-white/70 mb-4">Why it Matters</p>
              <ul className="space-y-2">
                {["Most businesses are using AI tools — but without a clear ROI strategy.", "Many have unknown risks, inefficiencies, or talent gaps.", "This quiz reveals exactly where you stand and what to fix next."].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                    <span className="text-white/40 mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#578cff] text-sm font-semibold hover:bg-[#f0f6ff] hover:scale-[1.03] transition-all">
              Take the Quiz <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionTag>FAQ&apos;s</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-[#292929] text-center mb-12" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Answers to your common AI questions
            </h2>
          </Reveal>
          <Reveal delay={0.05}><FaqAccordion /></Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-12">
        <div className="relative overflow-hidden cta-gradient rounded-3xl py-16 px-8 text-center max-w-6xl mx-auto">
          <GridBackground variant="none" />
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight max-w-2xl mx-auto" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              If you can&apos;t explain your AI decisions today, let&apos;s fix that.
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-2 max-w-xl mx-auto">
              The organizations that navigate AI scrutiny successfully aren&apos;t the ones who never made a questionable decision. They&apos;re the ones who built the evidence infrastructure before anyone asked. Start with a conversation. We&apos;ll identify where you&apos;re exposed and what it would take to close the gap.
            </p>
            <p className="text-sm text-white/45 mb-8">david@aiadvisorsllc.com</p>
            <Link href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#578cff] text-sm font-semibold hover:bg-[#f0f6ff] hover:scale-[1.03] transition-all shadow-xl">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-white/35 mt-4">Serving banks, insurers, and health systems.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
