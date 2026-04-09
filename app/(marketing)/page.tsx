"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Plus, X, ChevronRight, Shield, TrendingUp, Handshake, Cpu, Zap, Database, Settings2, ChevronDown } from "lucide-react"
import { LogoTicker } from "@/components/marketing/logo-ticker"
import { CountUp } from "@/components/ui/count-up"
import { GridBackground } from "@/components/ui/grid-background"

const BOOK_CALL_URL = "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"
const TYPEFORM_URL = "https://form.typeform.com/to/brq8lDnN"

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// One-time word-by-word blur reveal — plays once on scroll, stays put
function AnimateWords({
  text,
  className = "",
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const words = text.split(" ")
  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
          animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{ duration: 0.45, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.28em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

function SectionTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 mb-4 ${className}`}>
      <ChevronRight className="w-3 h-3 text-[#578cff]" />
      <span className="text-xs font-medium text-[#578cff] tracking-wide">{children}</span>
    </div>
  )
}

// Animated icon pill — spring scale + glow on hover, unique icon motion per instance
function IconPill({
  icon: Icon,
  hoverMotion,
}: {
  icon: React.ElementType
  hoverMotion: { rotate?: number; y?: number; scale?: number }
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.span
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        scale: hovered ? 1.25 : 1,
        boxShadow: hovered
          ? "0 0 0 5px rgba(87,140,255,0.14)"
          : "0 0 0 0px rgba(87,140,255,0)",
      }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#578cff]/10 mx-1.5 align-middle cursor-default"
      style={{ display: "inline-flex" }}
    >
      <motion.span
        animate={hovered ? hoverMotion : { rotate: 0, y: 0, scale: 1 } as { rotate?: number; y?: number; scale?: number }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        style={{ display: "inline-flex" }}
      >
        <Icon className="w-3.5 h-3.5 text-[#578cff]" />
      </motion.span>
    </motion.span>
  )
}

function StarRating() {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <div className="flex -space-x-2">
        {[
          "/images/testimonials/3Mpvf2kjeOX9rhi4A033R1O5I.webp",
          "/images/testimonials/48biUygDiwbZYSpDjOkDbWcvg.webp",
          "/images/testimonials/JA4e70uuB6w88xiCGB410mfx2xs.webp",
        ].map((src, i) => (
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

// Service Demo 1: Terminal diagnostic animation
function ServiceDemo1() {
  const lines = [
    { text: "> Scanning AI decision exposure...", delay: 0.3 },
    { text: "> 3 high-risk nodes identified", delay: 1.0 },
    { text: "> Evidence gap: 47% undocumented", delay: 1.7 },
    { text: "✓ Assessment complete", delay: 2.4, green: true },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-5 rounded-xl bg-[#0f172a] p-4 font-mono"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[9px] text-white/30 ml-2">diagnostic.sh</span>
      </div>
      {lines.map(({ text, delay, green }, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay }}
          className={`text-[10px] mb-1 leading-relaxed ${green ? "text-green-400" : "text-[#94a3b8]"}`}
        >
          {text}
        </motion.p>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 2.8, repeat: Infinity }}
        className="inline-block w-1.5 h-3 bg-green-400 align-middle"
      />
    </motion.div>
  )
}

// Service Demo 2: Animated deployment checklist
function ServiceDemo2() {
  const items = [
    { label: "Decision Receipt™ Architecture", done: true, delay: 0.2 },
    { label: "Decision Registry configured", done: true, delay: 0.45 },
    { label: "Evidence package compiled", done: true, delay: 0.7 },
    { label: "Live monitoring active", done: false, delay: 0.95, pulse: true },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4"
    >
      <p className="text-[11px] font-semibold text-[#292929]/70 mb-3">PrescienceOS™ Deployment</p>
      {items.map(({ label, done, delay, pulse }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay }}
          className="flex items-center gap-2 mb-2 last:mb-0"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + 0.1, type: "spring", stiffness: 200 }}
            className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${done ? "bg-[#578cff]" : "border-2 border-[#e2e8f0] flex items-center justify-center"}`}
          >
            {done && <span className="text-white text-[8px] font-bold">✓</span>}
            {pulse && (
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#578cff]"
              />
            )}
          </motion.div>
          <span className={`text-[11px] ${done ? "text-[#292929]/70" : "text-[#292929]/30"}`}>{label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Service Demo 3: Animated governance scorecard bars
function ServiceDemo3() {
  const metrics = [
    { label: "Fiduciary Coverage", value: 82, delay: 0.2 },
    { label: "Director Safe Harbor", value: 71, delay: 0.4 },
    { label: "Board Attestation", value: 95, delay: 0.6 },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4"
    >
      <p className="text-[11px] font-semibold text-[#292929]/70 mb-4">Governance Scorecard</p>
      {metrics.map(({ label, value, delay }, i) => (
        <div key={i} className="mb-3 last:mb-0">
          <div className="flex justify-between text-[10px] text-[#292929]/55 mb-1.5">
            <span>{label}</span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.5 }}
            >
              {value}%
            </motion.span>
          </div>
          <div className="h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#578cff] to-[#9cc3ff] rounded-full"
            />
          </div>
        </div>
      ))}
    </motion.div>
  )
}

// Service Demo 4: Animated regulatory status board
function ServiceDemo4() {
  const statuses = [
    { label: "OCC Model Risk", badge: "Compliant", color: "bg-green-50 text-green-700", delay: 0.2 },
    { label: "State Insurance", badge: "Under Review", color: "bg-amber-50 text-amber-700", delay: 0.35 },
    { label: "Healthcare AI", badge: "Monitoring", color: "bg-[#578cff]/10 text-[#578cff]", delay: 0.5 },
    { label: "CFPB Examination", badge: "Exam-Ready", color: "bg-green-50 text-green-700", delay: 0.65 },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4"
    >
      <p className="text-[11px] font-semibold text-[#292929]/70 mb-3">Regulatory Status Board</p>
      {statuses.map(({ label, badge, color, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay }}
          className="flex items-center justify-between mb-2.5 last:mb-0"
        >
          <span className="text-[11px] text-[#292929]/65">{label}</span>
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + 0.15, type: "spring" }}
            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${color}`}
          >
            {badge}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  )
}

const FAQ_ITEMS = [
  { q: "What exactly happens during the Digital Triage Call?", a: "We start with a 30-minute conversation to understand your key challenges, review your current AI maturity, and agree on immediate next steps to drive impact." },
  { q: "How do you guarantee measurable ROI?", a: "Every engagement starts with defined success metrics. We track decision coverage, regulatory examination outcomes, and governance posture improvements, delivering measurable, documented results you can show your board." },
  { q: "Which industries do you specialize in?", a: "We specialize in regulated industries: banking and financial services, insurance, and healthcare. These are environments where AI governance is not optional, it is existential." },
  { q: "How long does a typical engagement last?", a: "Decision Exposure Assessments typically run 2-3 weeks. PrescienceOS™ implementations run 6-10 weeks. Board governance packages are ongoing. Every engagement is scoped to your specific environment." },
  { q: "How do I get started?", a: "Book a 15-minute introductory call. We will identify your highest-exposure AI decisions and determine the right starting point for your organization." },
]

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-[#e2e8f0]">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="py-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between text-left gap-4"
          >
            <span className="text-sm font-medium text-[#292929]">{item.q}</span>
            <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#292929]/50 hover:border-[#578cff] hover:text-[#578cff] transition-colors">
              {open === i ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            </span>
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
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
      {/* HERO */}
      <section className="relative isolate overflow-hidden hero-gradient min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-20">
        <GridBackground variant="blue" glowPosition="top-center" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StarRating />
        </motion.div>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#292929] leading-[1.1] tracking-tight max-w-4xl mb-6 text-center"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
          <AnimateWords
            text="AI Decisions Get Examined. The Leaders Behind Them Should Never Stand Alone."
            delay={0.05}
            className="leading-[1.1]"
          />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-[#292929]/65 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-3"
        >
          I build Decision Defensibility Infrastructure for executives and boards in banks, insurers, and health systems, so when the scrutiny comes, the record is already there.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="hidden sm:block text-sm text-[#292929]/45 max-w-xl mx-auto leading-relaxed mb-10"
        >
          With over 20 years of experience in regulated industries, I have watched organizations deploy AI with confidence and face regulators, auditors, and boards without a single document that explains why a decision was made, who owned it, or what controls were in force. That gap is the liability. I close it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#578cff] text-white text-sm font-semibold hover:bg-[#4070e0] hover:scale-[1.03] active:scale-[0.97] transition-all shadow-md w-full sm:w-auto justify-center"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#578cff]/30 text-[#578cff] text-sm font-medium hover:bg-[#578cff]/5 transition-all w-full sm:w-auto justify-center"
          >
            See How It Works
          </Link>
        </motion.div>
      </section>

      {/* LOGO TICKER */}
      <LogoTicker />

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-white py-14 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionTag>Services</SectionTag>
            <AnimateWords
              text="AI solutions tailored for your business needs"

              className="text-3xl md:text-4xl font-bold text-[#292929] text-center max-w-xl mx-auto leading-tight"
              delay={0.05}
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { n: "01", title: "Decision Defensibility Assessment", body: "A focused diagnostic of where your highest-exposure AI decisions live and what your current evidence file looks like. Most organizations discover gaps in the first session.", demo: <ServiceDemo1 />, delay: 0.05 },
              { n: "02", title: "PrescienceOS™ Implementation", body: "Full deployment of the Decision Receipt™ architecture and Decision Registry, calibrated to your regulatory environment and live before your next examination.", demo: <ServiceDemo2 />, delay: 0.1 },
              { n: "03", title: "Board & GC Advisory", body: "Ongoing counsel for directors and general counsel navigating AI governance obligations, including fiduciary duty documentation, director safe harbor memos, and board attestation frameworks.", demo: <ServiceDemo3 />, delay: 0.05 },
              { n: "04", title: "Governance Readiness for Regulated Industries", body: "OCC model risk alignment, state insurance regulatory response, healthcare AI accountability, for organizations that need to demonstrate governance, not just describe it.", demo: <ServiceDemo4 />, delay: 0.1 },
            ].map(({ n, title, body, demo, delay }) => (
              <Reveal key={n} delay={delay}>
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 md:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
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
      <section className="bg-white py-14 md:py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-sm" style={{ maxHeight: "380px" }}>
              <Image
                src="/images/testimonials/INhUQ15tVRlexqBYDVn8V3f1QZA.avif"
                alt="Executive navigating AI challenges"
                width={560}
                height={380}
                unoptimized
                className="w-full h-full object-cover object-[center_35%]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTag className="justify-start">Is This You?</SectionTag>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#292929] leading-tight mb-5"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <AnimateWords text="Stalled growth?" delay={0.1} className="block" />
              <AnimateWords text="Fragmented systems?" delay={0.25} className="block" />
              <AnimateWords text="Missed opportunities?" delay={0.4} className="block" />
              <AnimateWords text="You're not alone." delay={0.55} className="block" />
            </h2>
            <p className="text-sm text-[#292929]/60 leading-relaxed mb-8">
              90% of companies in 2025 struggle to define an actionable AI strategy, lack the expertise to implement AI solutions, face inefficient and unscalable processes, and worry that competitors will outpace them with AI.
            </p>
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#578cff] text-white text-sm font-semibold hover:bg-[#4070e0] transition-all w-full sm:w-auto justify-center"
            >
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-12 md:py-16 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionTag>Introduction</SectionTag>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#292929] leading-[1.6]"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              AI Advisors, LLC delivers{" "}
              <IconPill icon={Cpu} hoverMotion={{ rotate: 180 }} />{" "}
              all solutions, from AI Agents, Chatbots, and Workflow{" "}
              <IconPill icon={Zap} hoverMotion={{ y: -3, scale: 1.15 }} />{" "}
              Automation. We specialize in{" "}
              <IconPill icon={Database} hoverMotion={{ y: -3 }} />{" "}
              LLM development, AI consulting, and content to drive{" "}
              <IconPill icon={Settings2} hoverMotion={{ rotate: 90 }} />{" "}
              innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-14 md:py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionTag>Why Us</SectionTag>
            <AnimateWords
              text="Why Choose Us"

              className="text-3xl md:text-4xl font-bold text-[#292929] text-center mb-12"
              delay={0.05}
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Clarity First", body: "Most AI initiatives fail because they chase trends, not ROI. My AI Readiness Diagnostic Scorecard identifies high-leverage opportunities within your operations, prioritized for financial impact, compliance, and speed.", delay: 0.05 },
              { icon: TrendingUp, title: "Compounding Leverage", body: "I design agentic systems, not just point automations. These systems reduce cycle times by 40-70% and create durable, compounding advantages, whether in regulated workflows or deal pipelines.", delay: 0.1 },
              { icon: Handshake, title: "Aligned Incentives", body: "I work like a deal partner, not a contractor. Every advisory engagement and implementation is structured around your business outcomes, valuation, and long-term growth.", delay: 0.15 },
            ].map(({ icon: Icon, title, body, delay }) => (
              <Reveal key={title} delay={delay}>
                <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-5 md:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
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
      <section className="bg-white py-14 md:py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionTag>Testimonials</SectionTag>
            <AnimateWords
              text="What our happy clients say about our services"

              className="text-3xl md:text-4xl font-bold text-[#292929] text-center max-w-lg mx-auto mb-14"
              delay={0.05}
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { name: "Jimmy Bogoff", role: "Founder & CEO at Fearless Influence", photo: "/images/testimonials/3Mpvf2kjeOX9rhi4A033R1O5I.webp", text: "I had the good fortune of working with David for several years to grow and develop our Eugene territory. He is a determined and persistent account executive and an extremely effective networker. David uses his networking connections to open up new business relationships.", delay: 0.05 },
              { name: "Jim Dyck", role: "Digital Sales Manager at Nexstar Media Group", photo: "/images/testimonials/48biUygDiwbZYSpDjOkDbWcvg.webp", text: "I had the privilege of working with David for several years. David is a great networker and seems to have his hands in everything in the community. He has a great ability to connect multiple moving parts to make seemingly complex ideas understandable.", delay: 0.1 },
              { name: "Michael Newman", role: "Founder and President at Thanks For Real", photo: "/images/testimonials/JA4e70uuB6w88xiCGB410mfx2xs.webp", text: "David has previously been a professional consultant and advocate for my business, regularly seeking and giving my company opportunities for growth, new sales and revenues. He has opened doors typically unavailable to other consultants.", delay: 0.15 },
              { name: "Jayash Kumar", role: "Media Products at ApplikMedia / Apple", photo: "/images/testimonials/NrWEkANSuhU5alDIXE1hmiauNM4.webp", text: "I had the pleasure of being in the same cohort as David in the AI for Leaders Post Graduate course at UT Austin. His domain knowledge and enthusiasm for AI-based healthcare initiatives makes him a very valuable asset.", delay: 0.05 },
              { name: "Ziva Oster", role: "President / CEO @ AskZipy.com", photo: "/images/testimonials/KyTX3O9y2aVYCwcZBeKK1nmAiNU.avif", text: "David Gwynn is a knowledgeable and talented individual with great enthusiasm in all aspects of his life. He has a natural ability to bond with people and ensure a win-win relationship for all entities involved.", delay: 0.1 },
              { name: "Thuy Tran", role: "Asst VP for Integrated Communications, Univ. of Oregon", photo: "/images/testimonials/aCSeWv6Et9jbSVtMxA51aqycOyw.webp", text: "David is an exceptional person to work with: co-strategic, inclusive, collaborative, and creative. I continue to be impressed with David's vision and Oregon State University is fortunate to have worked with him.", delay: 0.15 },
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
            <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-6 md:p-10 text-center max-w-3xl mx-auto">
              <p className="text-yellow-400 text-2xl mb-5">★★★★★</p>
              <blockquote className="text-base md:text-xl text-[#292929] font-medium leading-relaxed mb-6">
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
      <section className="bg-white py-14 md:py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionTag>How it works</SectionTag>
            <AnimateWords
              text="How AI Advisors Works"

              className="text-3xl md:text-4xl font-bold text-[#292929] text-center mb-14"
              delay={0.05}
            />
          </Reveal>
          <div>
            {[
              { n: "01", title: "Schedule Your Digital Triage Call", body: "A complimentary 30-minute session to uncover your top AI challenges and define clear objectives.", delay: 0.05 },
              { n: "02", title: "Prototype & Audit", body: "Combine the Ascend AI™ Audit and AI Advantage Sprint to validate key use cases, pinpoint gaps, and demonstrate early wins.", delay: 0.1 },
              { n: "03", title: "Roadmap & Implement", body: "Co-create your phased AI Strategy Roadmap, then execute with hands-on support to deliver measurable growth.", delay: 0.15 },
            ].map(({ n, title, body, delay }, i, arr) => (
              <Reveal key={n} delay={delay}>
                <div className="flex gap-7">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="text-xl font-bold text-[#578cff] w-8 text-center leading-none">{n}</span>
                    {i < arr.length - 1 && (
                      <div className="flex flex-col items-center mt-3 mb-1">
                        <div className="w-px h-10 border-l-2 border-dashed border-[#578cff]/25" />
                        <ChevronDown className="w-4 h-4 text-[#578cff]/40" />
                      </div>
                    )}
                  </div>
                  <div className="pb-10 flex-1">
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
      <section id="about" className="bg-white py-14 md:py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
          <Reveal>
            <div className="rounded-2xl overflow-hidden">
              <Image src="/images/U9z34gdlWjkgtbkZ1DETif8Hg8M.webp" alt="David Gwynn" width={520} height={480} unoptimized className="w-full object-cover object-top" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTag className="justify-start">About us</SectionTag>
            <AnimateWords
              text="Meet David Gwynn"

              className="text-3xl font-bold text-[#292929] mb-2"
              delay={0.1}
            />
            <p className="text-sm text-[#292929]/60 mb-5">Governance-first. Evidence-driven. Built for regulated environments.</p>
            <p className="text-sm text-[#292929]/70 leading-relaxed mb-6">
              I lead AI Advisors, LLC, a governance-first advisory firm specializing in the decisions that matter most: the ones that will be examined. My work focuses on three things:
            </p>
            <div className="space-y-5 mb-8">
              {[
                { title: "AI Governance & Decision Rights", body: "Helping executives and boards establish who owns AI-influenced decisions, under what authority, and with what evidence trail." },
                { title: "Decision Auditability", body: "Implementing PrescienceOS™, the system that captures what was decided, why, and by whom, so your organization can produce the record when regulators, auditors, or litigants ask for it." },
                { title: "Operational Readiness for Regulated Industries", body: "Ensuring AI deployments in banks, health systems, and insurers align with model risk guidance, fair lending requirements, and emerging regulatory standards, with the documentation to prove it." },
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
            <Link
              href="https://www.linkedin.com/in/davidwgwynn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#578cff] text-white text-sm font-semibold hover:bg-[#4070e0] transition-all"
            >
              LinkedIn <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f8fafc] border-t border-b border-[#e2e8f0] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { to: 30, suffix: "+", label: "Years of Leadership in Technology & Strategy" },
            { to: 18, suffix: "M", label: "NASDAQ IPO Value Delivered at WavePhone" },
            { to: 438, suffix: "+", label: "Executive AI Consultations Completed" },
            { to: 10, suffix: "M+", label: "AI-Powered Decisions" },
          ].map(({ to, suffix, label }) => (
            <Reveal key={label}>
              <div
                className="text-3xl md:text-5xl font-bold text-[#292929] mb-2"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                <CountUp to={to} suffix={suffix} />
              </div>
              <p className="text-xs text-[#292929]/55 leading-snug">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUIZ */}
      <section className="bg-[#f8fafc] py-14 md:py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionTag>Quiz</SectionTag>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#292929] text-center mb-3"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Are You Ready?
            </h2>
            <p className="text-sm text-[#292929]/55 text-center mb-8">
              Find out exactly where your AI strategy stands and what to fix next.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            {/* Clip Typeform's header bar by shifting the iframe up inside an overflow-hidden container */}
            <div className="rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white shadow-sm" style={{ height: "500px" }}>
              <iframe
                src={TYPEFORM_URL}
                width="100%"
                height="570"
                style={{ border: "none", display: "block", marginTop: "-70px" }}
                title="AI Readiness Quiz"
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <SectionTag>FAQ&apos;s</SectionTag>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#292929] text-center mb-12"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Answers to your common AI questions
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-12">
        <div className="relative overflow-hidden cta-gradient rounded-3xl py-12 md:py-16 px-6 md:px-8 text-center max-w-6xl mx-auto">
          <Reveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight max-w-2xl mx-auto"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              If you cannot explain your AI decisions today, let&apos;s fix that.
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-2 max-w-xl mx-auto">
              The organizations that navigate AI scrutiny successfully are not the ones who never made a questionable decision. They are the ones who built the evidence infrastructure before anyone asked. Start with a conversation. We will identify where you are exposed and what it would take to close the gap.
            </p>
            <p className="text-sm text-white/45 mb-8">david@aiadvisorsllc.com</p>
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#578cff] text-sm font-semibold hover:bg-[#f0f6ff] hover:scale-[1.03] transition-all shadow-xl w-full sm:w-auto justify-center"
            >
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-white/35 mt-4">Serving banks, insurers, and health systems.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
