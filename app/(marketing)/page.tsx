"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "@/components/marketing/animated-section"
import { CountUp } from "@/components/ui/count-up"
import {
  Shield,
  TrendingUp,
  Link2,
  Star,
  ChevronDown,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"
const TYPEFORM_URL = "https://form.typeform.com/to/brq8lDnN"
const LINKEDIN_URL = "https://www.linkedin.com/in/davidwgwynn/"
const YOUTUBE_URL = "https://www.youtube.com/@AIAdvisors-DG"

// ─── Hero ──────────────────────────────────────────────────────────────────

const heroWords = [
  "AI",
  "Decisions",
  "Get",
  "Examined.",
  "\n",
  "The",
  "Leaders",
  "Behind",
  "Them",
  "Should",
  "Never",
  "Stand",
  "Alone.",
]

function HeroSection() {
  return (
    <section className="hero-gradient w-full min-h-[92vh] flex items-center relative overflow-hidden">
      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#9cc3ff] text-sm font-semibold uppercase tracking-widest mb-6"
        >
          Decision Defensibility Infrastructure
        </motion.p>

        {/* Staggered word-by-word headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 max-w-4xl"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
          {heroWords.map((word, i) => {
            if (word === "\n") {
              return <br key={i} />
            }
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            )
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-6 leading-relaxed"
        >
          I build Decision Defensibility Infrastructure for executives and boards in banks,
          insurers, and health systems — so when the scrutiny comes, the record is already there.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.05, ease: "easeOut" }}
          className="text-base text-white/65 max-w-2xl mb-12 leading-relaxed"
        >
          With over 20 years of experience in regulated industries, I&apos;ve watched organizations
          deploy AI with confidence — and face regulators, auditors, and boards without a single
          document that explains why a decision was made, who owned it, or what controls were in
          force. That gap is the liability. I close it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#578cff] text-white font-semibold text-base hover:bg-[#4070e0] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:bg-white/10 hover:border-white hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            See How It Works
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Partner Logos ──────────────────────────────────────────────────────────

const partnerLogos = [
  "3Mpvf2kjeOX9rhi4A033R1O5I.webp",
  "48biUygDiwbZYSpDjOkDbWcvg.webp",
  "INhUQ15tVRlexqBYDVn8V3f1QZA.avif",
  "JA4e70uuB6w88xiCGB410mfx2xs.webp",
  "KyTX3O9y2aVYCwcZBeKK1nmAiNU.avif",
  "NrWEkANSuhU5alDIXE1hmiauNM4.webp",
  "QEc1J5NpW8H1Ly5PxgRNEoCQxHk.avif",
  "YQrlBuuAOMQOrPrRbC57SDw7zHk.webp",
]

function LogosSection() {
  return (
    <section className="w-full bg-white border-b border-[#e2e8f0] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-[#292929]/40 uppercase tracking-widest mb-8">
          As Seen On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partnerLogos.map((filename) => (
            <motion.div
              key={filename}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <Image
                src={`/images/partners/${filename}`}
                alt="Media partner"
                width={120}
                height={32}
                unoptimized
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Service Card Demos ─────────────────────────────────────────────────────

function ServiceDemoChat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="mt-5 rounded-xl bg-[#f8faff] border border-[#e2e8f0] p-4"
    >
      <p className="text-xs font-semibold text-[#292929]/50 mb-3">AI Advisors Can Build Your</p>
      <div className="flex gap-2 mb-3">
        {["#578cff", "#ff6bba", "#9b6bff"].map((color, i) => (
          <motion.div
            key={color}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
            className="w-8 h-8 rounded-lg"
            style={{ background: color }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white border border-[#e2e8f0] px-3 py-2">
        <span className="text-xs text-[#292929]/35 flex-1">Let&apos;s get started...</span>
        <ArrowRight className="w-3 h-3 text-[#578cff]" />
      </div>
    </motion.div>
  )
}

function ServiceDemoAudit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="mt-5 rounded-xl bg-[#f8faff] border border-[#e2e8f0] p-4"
    >
      <p className="text-xs font-semibold text-[#292929]/70 mb-3">Ascend AI™ Audit</p>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#578cff] text-white text-xs font-semibold mb-3"
      >
        AI Readiness Scorecard
      </motion.div>
      <div className="flex flex-wrap gap-1.5">
        {["Unlimited Credits", "Audio & Video File", "Logomark", "Branding"].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.06 }}
            className="px-2 py-0.5 rounded-full bg-white border border-[#e2e8f0] text-[10px] text-[#292929]/60"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

function ServiceDemoRoadmap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="mt-5 rounded-xl bg-[#f8faff] border border-[#e2e8f0] p-4"
    >
      <p className="text-xs font-semibold text-[#292929]/70 mb-3">David&apos;s Custom Roadmap</p>
      <div className="flex gap-2 mb-3">
        {["#578cff", "#9cc3ff", "#292929"].map((color, i) => (
          <motion.div
            key={color}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.1 }}
            className="w-16 h-10 rounded-lg"
            style={{ background: color }}
          />
        ))}
      </div>
      <p className="text-xs text-[#292929]/50 mb-2">Map out my business roadmap</p>
      <motion.button
        whileHover={{ scale: 1.03 }}
        className="w-full py-1.5 rounded-lg bg-[#578cff] text-white text-xs font-semibold"
      >
        Generate AI
      </motion.button>
    </motion.div>
  )
}

function ServiceDemoConnect() {
  const integrations = [
    { name: "ChatGPT", color: "#10a37f" },
    { name: "Perplexity", color: "#578cff" },
    { name: "Claude", color: "#d97757" },
    { name: "Slack", color: "#4a154b" },
    { name: "Figma", color: "#a259ff" },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mt-5 rounded-xl bg-[#f8faff] border border-[#e2e8f0] p-4"
    >
      <p className="text-xs font-semibold text-[#292929]/50 mb-3">Connect with:</p>
      <ul className="space-y-1.5 mb-3">
        {integrations.map((item, i) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.06 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: item.color }}
            />
            <span className="text-xs text-[#292929]/70">{item.name}</span>
          </motion.li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.03 }}
        className="w-full py-1.5 rounded-lg bg-[#578cff] text-white text-xs font-semibold"
      >
        Get Started →
      </motion.button>
    </motion.div>
  )
}

const serviceCards = [
  {
    number: "01",
    title: "Decision Defensibility Assessment",
    description:
      "A focused diagnostic of where your highest-exposure AI decisions live and what your current evidence file looks like. Most organizations discover gaps in the first session.",
    demo: <ServiceDemoChat />,
  },
  {
    number: "02",
    title: "PrescienceOS™ Implementation",
    description:
      "Full deployment of the Decision Receipt™ architecture and Decision Registry — calibrated to your regulatory environment and live before your next examination.",
    demo: <ServiceDemoAudit />,
  },
  {
    number: "03",
    title: "Board & GC Advisory",
    description:
      "Ongoing counsel for directors and general counsel navigating AI governance obligations — fiduciary duty documentation, director safe harbor memos, and board attestation frameworks.",
    demo: <ServiceDemoRoadmap />,
  },
  {
    number: "04",
    title: "Governance Readiness for Regulated Industries",
    description:
      "OCC model risk alignment, state insurance regulatory response, healthcare AI accountability — for organizations that need to demonstrate governance, not just describe it.",
    demo: <ServiceDemoConnect />,
  },
]

function ServicesSection() {
  return (
    <section className="w-full bg-[#f0f6ff] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="max-w-6xl mx-auto px-0 py-0 mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#292929] text-center"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            AI solutions tailored for your business needs
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm hover:shadow-[0_8px_32px_rgba(87,140,255,0.15)] hover:-translate-y-1 transition-all duration-200"
            >
              <span className="text-xs font-bold text-[#578cff] tracking-widest">{card.number}</span>
              <h3 className="text-lg font-bold text-[#292929] mt-1 mb-2">{card.title}</h3>
              <p className="text-sm text-[#292929]/65 leading-relaxed">{card.description}</p>
              {card.demo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── David Pitch ─────────────────────────────────────────────────────────────

function DavidPitchSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection className="max-w-none px-0 py-0">
            <div className="relative">
              <Image
                src="/images/U9z34gdlWjkgtbkZ1DETif8Hg8M.webp"
                alt="David W. Gwynn"
                width={560}
                height={640}
                unoptimized
                className="rounded-2xl object-cover w-full aspect-[5/6]"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#578cff] rounded-2xl opacity-20" />
            </div>
          </AnimatedSection>
          <AnimatedSection className="max-w-none px-0 py-0" delay={0.15}>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#292929] mb-6 leading-tight"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Stalled growth? Fragmented systems? Missed opportunities? You&apos;re not alone.
            </h2>
            <p className="text-base text-[#292929]/65 mb-4 leading-relaxed">
              90% of companies in 2026 require AI as an accelerator to strategy, and the
              opportunities are endless. AI-efficient and scalable processes, and more, that drive
              your business forward.
            </p>
            <p className="text-base text-[#292929]/65 mb-8 leading-relaxed">
              AI Advisors, LLC delivers all solutions, from AI Agents, Chatbots, and Workflow
              Automation. We specialize in LLM development, AI consulting, and content to drive
              innovation.
            </p>
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#578cff] text-white font-semibold text-base hover:bg-[#4070e0] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
            >
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────

const whyCards = [
  {
    icon: Shield,
    title: "Clarity First",
    body: "Back AI decisions that businesses and executives don't understand with data, clarity, and frameworks that make decisions easy, defensible, and compelling.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Leverage",
    body: "Unlike other consultants, our work compounds. Every framework, tool, and system we build increases your capacity and competitive advantage over time.",
  },
  {
    icon: Link2,
    title: "Aligned Incentives",
    body: "Unlike the fee-per-deliverable model, our model is built on your success. We win when you win, with structures designed to ensure our incentives perfectly align with yours.",
  },
]

function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="max-w-6xl mx-auto px-0 py-0 mb-12 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#292929]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Why Choose Us
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-[#e2e8f0] bg-[#f0f6ff] p-8 hover:shadow-[0_8px_32px_rgba(87,140,255,0.12)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#578cff]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#578cff]" />
                </div>
                <h3 className="text-xl font-bold text-[#292929] mb-3">{card.title}</h3>
                <p className="text-sm text-[#292929]/65 leading-relaxed">{card.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Jimmy Bogoff",
    role: "",
    quote:
      "David completely transformed how we approach AI integration. His deep expertise in governance and regulatory compliance gave us the confidence to move forward with our AI initiatives.",
    image: "/images/testimonials/3Mpvf2kjeOX9rhi4A033R1O5I.webp",
  },
  {
    name: "Jim Dyck",
    role: "Product Manager",
    quote:
      "The frameworks David built for us are foundational. We now have clear decision rights and audit trails for every AI-influenced decision in our organization.",
    image: "/images/testimonials/48biUygDiwbZYSpDjOkDbWcvg.webp",
  },
  {
    name: "Michael Newman",
    role: "",
    quote:
      "Working with David on our capital markets AI deployment was transformative. His governance-first approach kept us compliant through every regulatory checkpoint.",
    image: "/images/testimonials/INhUQ15tVRlexqBYDVn8V3f1QZA.avif",
  },
  {
    name: "Jayash Kumar",
    role: "CEO",
    quote:
      "David's Decision Defensibility framework is exactly what the industry needed. Our board and regulators are consistently impressed with our documentation standards.",
    image: "/images/testimonials/JA4e70uuB6w88xiCGB410mfx2xs.webp",
  },
  {
    name: "Don Elder",
    role: "",
    quote:
      "The PrescienceOS implementation gave us a governance layer we didn't know was missing. When our first regulatory examination came, we handed over a folder, not a story.",
    image: "/images/testimonials/KyTX3O9y2aVYCwcZBeKK1nmAiNU.avif",
  },
  {
    name: "Troy Tran",
    role: "",
    quote:
      "AI Advisors, LLC changed how we think about AI risk. David's operational readiness work saved us from significant regulatory exposure. Exceptional expertise.",
    image: "/images/testimonials/NrWEkANSuhU5alDIXE1hmiauNM4.webp",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#578cff] text-[#578cff]" />
      ))}
    </div>
  )
}

function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="max-w-6xl mx-auto px-0 py-0 mb-3 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#578cff]/10 text-[#578cff] text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#292929]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            What our happy clients say about our services
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm hover:shadow-[0_6px_24px_rgba(87,140,255,0.1)] transition-all duration-200"
            >
              <Stars />
              <p className="text-sm text-[#292929]/70 leading-relaxed mt-4 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  unoptimized
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[#292929]">{t.name}</p>
                  {t.role && (
                    <p className="text-xs text-[#292929]/50">{t.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-2xl bg-[#f0f6ff] border border-[#e2e8f0] p-8 md:p-12 text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#578cff] text-[#578cff]" />
            ))}
          </div>
          <p className="text-lg md:text-xl text-[#292929]/80 leading-relaxed max-w-3xl mx-auto mb-6 italic">
            &ldquo;David&apos;s innovative capital markets approach at WavePhone transformed how we delivered
            digital data even to small TV signals. His expertise guided our investment strategy,
            ultimately contributing to WavePhone&apos;s NASDAQ IPO. Beyond raising capital, David was a
            true partner, transforming both our business and my career.&rdquo;
          </p>
          <p className="font-bold text-[#292929] text-base">R. Glenn Williamson</p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: "1",
    title: "Schedule Your Digital Triage Call",
    body: "We start with a 30-minute conversation to understand your key challenges, review your current AI maturity, and agree on immediate next steps to drive impact.",
  },
  {
    num: "2",
    title: "Prototype & Audit",
    body: "We prototype the highest-impact AI solution for your business and audit your existing systems, identifying inefficiencies, gaps, and quick wins that deliver immediate ROI.",
  },
  {
    num: "3",
    title: "Roadmap & Implement",
    body: "We deliver a prioritized AI Roadmap with your Tailored Technology Stack, implementation timeline, and ongoing governance framework to ensure sustainable AI growth.",
  },
]

function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-t border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="max-w-4xl mx-auto px-0 py-0 mb-14 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#292929]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            How AI Advisors Works
          </h2>
        </AnimatedSection>
        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#578cff] flex items-center justify-center shadow-lg shadow-[#578cff]/25">
                <span className="text-white font-bold text-lg">{step.num}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#292929] mb-2">{step.title}</h3>
                <p className="text-base text-[#292929]/65 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Meet David ───────────────────────────────────────────────────────────────

const davidPoints = [
  {
    title: "AI Governance & Decision Rights",
    body: "Helping executives and boards establish who owns AI-influenced decisions, under what authority, and with what evidence trail.",
  },
  {
    title: "Decision Auditability",
    body: "Implementing PrescienceOS™ — the system that captures what was decided, why, and by whom — so your organization can produce the record when regulators, auditors, or litigants ask for it.",
  },
  {
    title: "Operational Readiness for Regulated Industries",
    body: "Ensuring AI deployments in banks, health systems, and insurers align with model risk guidance, fair lending requirements, and emerging regulatory standards — with the documentation to prove it.",
  },
]

function MeetDavidSection() {
  return (
    <section id="about" className="w-full bg-[#f0f6ff] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection className="max-w-none px-0 py-0">
            <div className="relative">
              <Image
                src="/images/49CwaPRYN4QbCe3RC8I1dfOxs.avif"
                alt="David Gwynn"
                width={560}
                height={640}
                unoptimized
                className="rounded-2xl object-cover w-full aspect-[5/6]"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection className="max-w-none px-0 py-0" delay={0.15}>
            <span className="inline-block px-3 py-1 rounded-full bg-[#578cff]/10 text-[#578cff] text-xs font-semibold uppercase tracking-wider mb-5">
              About us
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#292929] mb-3 leading-tight"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Meet David Gwynn
            </h2>
            <p className="text-base font-semibold text-[#578cff] mb-5">
              Governance-first. Evidence-driven. Built for regulated environments.
            </p>
            <p className="text-sm text-[#292929]/65 mb-7 leading-relaxed">
              I lead AI Advisors, LLC — a governance-first advisory firm specializing in the
              decisions that matter most: the ones that will be examined. My work focuses on three
              things:
            </p>
            <ul className="space-y-5 mb-8">
              {davidPoints.map((pt) => (
                <li key={pt.title} className="flex gap-3">
                  <div className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#578cff]" />
                  <div>
                    <span className="font-bold text-sm text-[#292929]">{pt.title}: </span>
                    <span className="text-sm text-[#292929]/65">{pt.body}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#578cff] text-white font-semibold text-sm hover:bg-[#4070e0] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Connect on LinkedIn
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

const stats = [
  { to: 30, suffix: "+", label: "Years of Leadership in Technology & Strategy" },
  { to: 18, suffix: "M", label: "NASDAQ IPO Value Delivered at WavePhone" },
  { to: 500, suffix: "+", label: "Executive AI Consultations Completed" },
  { to: 10, suffix: "M+", label: "AI-Powered Decisions" },
]

function StatsSection() {
  return (
    <section className="w-full bg-[#f0f6ff] border-t border-[#e2e8f0] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#578cff] mb-2">
                <CountUp to={stat.to} suffix={stat.suffix} duration={2} />
              </div>
              <p className="text-xs text-[#292929]/60 leading-snug max-w-[140px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Quiz CTA ─────────────────────────────────────────────────────────────────

function QuizSection() {
  return (
    <section className="hero-gradient w-full py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
            Quiz
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Are You Ready?
          </h2>
          <div className="rounded-2xl bg-black/30 border border-white/15 backdrop-blur-sm p-8 md:p-10 text-left mb-8">
            <h3 className="text-base font-bold text-white mb-4">Why it Matters</h3>
            <ul className="space-y-3">
              {[
                "Most businesses are using AI tools — but without a clear ROI strategy.",
                "Many have unknown risks, inefficiencies, or talent gaps.",
                "This quiz reveals exactly where you stand and what to fix next.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/80">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#9cc3ff]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#578cff] font-bold text-base hover:bg-[#f0f6ff] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
          >
            Take the Quiz <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What exactly happens during the Digital Triage Call?",
    a: "We start with a 30-minute conversation to understand your key challenges, review your current AI maturity, and agree on immediate next steps to drive impact.",
  },
  {
    q: "How do you guarantee measurable ROI?",
    a: "Every engagement starts with defined success metrics. We track decision coverage, regulatory examination outcomes, and governance posture improvements — measurable, documented results you can show your board.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "We specialize in regulated industries: banking and financial services, insurance, and healthcare. These are environments where AI governance isn't optional — it's existential.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "Decision Exposure Assessments typically run 2–3 weeks. PrescienceOS™ implementations run 6–10 weeks. Board governance packages are ongoing. Every engagement is scoped to your specific environment.",
  },
  {
    q: "How do I get started?",
    a: "Book a 15-minute introductory call. We'll identify your highest-exposure AI decisions and determine the right starting point for your organization.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#e2e8f0] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base font-semibold text-[#292929] group-hover:text-[#578cff] transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#578cff]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#292929]/65 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FaqSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-t border-[#e2e8f0]">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto px-0 py-0 mb-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#578cff]/10 text-[#578cff] text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ&apos;s
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#292929]"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Answers to your common AI questions
          </h2>
        </AnimatedSection>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white px-6 md:px-8 shadow-sm">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section className="cta-gradient w-full py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
          If you can&apos;t explain your AI decisions today, let&apos;s fix that.
        </h2>
        <p className="text-base md:text-lg text-white/85 mb-4 max-w-2xl mx-auto leading-relaxed">
          The organizations that navigate AI scrutiny successfully aren&apos;t the ones who never made a
          questionable decision. They&apos;re the ones who built the evidence infrastructure before anyone
          asked. Start with a conversation. We&apos;ll identify where you&apos;re exposed and what it would
          take to close the gap.
        </p>
        <p className="text-white/70 text-sm mb-8">
          <a
            href="mailto:david@aiadvisorsllc.com"
            className="hover:text-white transition-colors underline underline-offset-2"
          >
            david@aiadvisorsllc.com
          </a>
        </p>
        <Link
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#578cff] font-bold text-base hover:bg-[#f0f6ff] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg mb-6"
        >
          Book a Call <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-white/50 text-xs">Serving banks, insurers, and health systems.</p>
      </motion.div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <DavidPitchSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <MeetDavidSection />
      <StatsSection />
      <QuizSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
