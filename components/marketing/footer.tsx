import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.avif"
              alt="AI Advisors LLC"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="font-semibold text-base text-[#292929]">AI Advisors LLC</span>
          </Link>
          <p className="text-sm text-[#292929]/60 leading-relaxed mb-6">
            Decision Defensibility Infrastructure for boards, GCs, and regulated enterprises.
          </p>
          <Link
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#578cff] text-white text-sm font-semibold hover:bg-[#4070e0] transition-all"
          >
            Request a Decision Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-[#292929] mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { href: "/#about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms of Service" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#292929]/60 hover:text-[#578cff] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold text-[#292929] mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            {[
              {
                href: "https://www.linkedin.com/in/davidwgwynn/",
                label: "LinkedIn",
              },
              {
                href: "https://www.youtube.com/@AIAdvisors-DG",
                label: "YouTube",
              },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#292929]/60 hover:text-[#578cff] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#292929]/40">
            PrescienceOS™, Decision Receipt™, and AI Decision Rating™ are trademarks of Prescience Holdings.
          </p>
          <p className="text-xs text-[#292929]/40">&copy; 2026 AI Advisors, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
