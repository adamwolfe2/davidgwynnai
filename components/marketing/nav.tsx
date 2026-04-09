"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/services", label: "Solutions" },
  { href: "/contact", label: "Contact Us" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.avif"
              alt="AI Advisors LLC"
              width={28}
              height={28}
              unoptimized
              className="w-7 h-7 object-contain"
            />
            <span className="font-semibold text-sm text-[#292929]">AI Advisors LLC</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#292929]/55 hover:text-[#292929] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#578cff] text-white text-sm font-medium hover:bg-[#4070e0] transition-colors"
            >
              Book a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            {/* Notification dot */}
            <div className="w-7 h-7 rounded-full bg-[#578cff]/15 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#578cff]" />
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#292929]/60 hover:text-[#292929]"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white">
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-[#292929]/70 hover:text-[#292929]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#e2e8f0]">
              <Link
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#578cff] text-white text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                Book a Call <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
