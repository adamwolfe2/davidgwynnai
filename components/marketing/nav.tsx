"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
]

/**
 * Editorial masthead — white background, navy bottom border, 3px red bar below.
 * Serif wordmark beside the lighthouse logo. Inter nav. Navy CTA button.
 * No scroll-shrink, no blur, no rounded pill.
 */
export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-navy">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-6 md:px-[34px] py-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label="AI Advisors LLC — home"
        >
          <Image
            src="/images/logo.avif"
            alt=""
            width={32}
            height={34}
            unoptimized
            className="h-8 w-auto object-contain"
          />
          <span
            className="text-navy"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.13em",
            }}
          >
            AI ADVISORS{" "}
            <span className="text-sand" style={{ fontWeight: 400 }}>
              LLC
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-body hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-white px-4 py-2.5 hover:bg-[#0f1d36] transition-colors"
            style={{ fontFamily: "var(--font-ui)", fontSize: 12, letterSpacing: "0.03em" }}
          >
            Request Your Exposure Assessment
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-navy"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 3px red bar — anchors the masthead */}
      <div className="h-[3px] bg-red" />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-rule bg-white">
          <div
            className="px-6 py-5 space-y-4"
            style={{ fontFamily: "var(--font-ui)", fontSize: 14 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-ink-body hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-rule">
              <Link
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-navy text-white px-5 py-3"
                onClick={() => setOpen(false)}
                style={{ fontFamily: "var(--font-ui)", fontSize: 13, letterSpacing: "0.03em" }}
              >
                Request Your Exposure Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
