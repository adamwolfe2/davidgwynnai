"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/services", label: "Solutions" },
  { href: "/contact", label: "Contact Us" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full transition-all duration-300 ease-in-out ${
            scrolled
              ? "max-w-4xl rounded-2xl border border-[#e2e8f0] bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
              : "max-w-6xl bg-white/70 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center justify-between h-14 px-5">
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

            {/* Desktop links */}
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
            <div className="hidden md:flex items-center">
              <Link
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#578cff] text-white text-sm font-medium hover:bg-[#4070e0] transition-colors"
              >
                Book a Call
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-[#e2e8f0]">
              <div className="px-5 py-5 space-y-4">
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
    </div>
  )
}
