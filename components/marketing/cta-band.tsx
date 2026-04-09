"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface CtaLink {
  label: string
  href: string
}

interface CtaBandProps {
  title: string
  body: string
  primaryCta: CtaLink
  secondaryCta?: CtaLink
}

export function CtaBand({ title, body, primaryCta, secondaryCta }: CtaBandProps) {
  return (
    <section className="cta-gradient w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center"
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
          {title}
        </h2>
        <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#578cff] font-semibold text-base hover:bg-[#f0f6ff] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  )
}
