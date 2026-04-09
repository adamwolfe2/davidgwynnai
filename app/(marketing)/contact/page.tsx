"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Mail, ArrowRight } from "lucide-react"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"
const LINKEDIN_URL = "https://www.linkedin.com/in/davidwgwynn/"
const YOUTUBE_URL = "https://www.youtube.com/@AIAdvisors-DG"

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#f0f6ff] border-b border-[#e2e8f0] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#578cff]/10 text-[#578cff] text-xs font-semibold uppercase tracking-wider mb-6">
            Contact
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#292929] mb-6 leading-tight"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Start the Conversation
          </h1>
          <p className="text-lg text-[#292929]/65 max-w-xl mx-auto leading-relaxed">
            Every engagement begins with a conversation. Tell us about your organization and
            we&apos;ll identify where AI Advisors, LLC can have the most impact.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="w-full py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left: contact info */}
            <div>
              <h2
                className="text-2xl font-bold text-[#292929] mb-6"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-[#578cff]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#578cff]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#292929]/40 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:david@aiadvisorsllc.com"
                      className="text-base font-semibold text-[#578cff] hover:underline"
                    >
                      david@aiadvisorsllc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-[#578cff]/10 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-[#578cff]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#292929]/40 uppercase tracking-widest mb-1">
                      LinkedIn
                    </p>
                    <Link
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#578cff] hover:underline"
                    >
                      David W. Gwynn
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-[#578cff]/10 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-[#578cff]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#292929]/40 uppercase tracking-widest mb-1">
                      YouTube
                    </p>
                    <Link
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#578cff] hover:underline"
                    >
                      AI Advisors — David Gwynn
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#f0f6ff] border border-[#e2e8f0] p-6 mb-8">
                <p className="text-sm font-semibold text-[#292929] mb-2">Serving</p>
                <p className="text-sm text-[#292929]/65 leading-relaxed">
                  Banks, insurers, and health systems navigating AI governance, regulatory
                  compliance, and decision defensibility.
                </p>
              </div>

              <div>
                <p className="text-sm text-[#292929]/60 mb-4">
                  Prefer to book directly? Schedule a 15-minute introductory call:
                </p>
                <Link
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#578cff] text-white font-semibold text-sm hover:bg-[#4070e0] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
                >
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <h2
                className="text-2xl font-bold text-[#292929] mb-6"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Send a Message
              </h2>
              <form
                action="mailto:david@aiadvisorsllc.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-[#292929]/60 uppercase tracking-wider mb-1.5"
                    >
                      Name <span className="text-[#578cff]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#292929] placeholder:text-[#292929]/35 focus:outline-none focus:ring-2 focus:ring-[#578cff]/30 focus:border-[#578cff] transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-[#292929]/60 uppercase tracking-wider mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Bank"
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#292929] placeholder:text-[#292929]/35 focus:outline-none focus:ring-2 focus:ring-[#578cff]/30 focus:border-[#578cff] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#292929]/60 uppercase tracking-wider mb-1.5"
                    >
                      Email <span className="text-[#578cff]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#292929] placeholder:text-[#292929]/35 focus:outline-none focus:ring-2 focus:ring-[#578cff]/30 focus:border-[#578cff] transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-xs font-semibold text-[#292929]/60 uppercase tracking-wider mb-1.5"
                    >
                      Role
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Chief Risk Officer"
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#292929] placeholder:text-[#292929]/35 focus:outline-none focus:ring-2 focus:ring-[#578cff]/30 focus:border-[#578cff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-[#292929]/60 uppercase tracking-wider mb-1.5"
                  >
                    Message <span className="text-[#578cff]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your AI governance challenges and what you're trying to accomplish..."
                    className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#292929] placeholder:text-[#292929]/35 focus:outline-none focus:ring-2 focus:ring-[#578cff]/30 focus:border-[#578cff] transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded accent-[#578cff] cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-sm text-[#292929]/60 cursor-pointer">
                    I agree to the{" "}
                    <Link href="/privacy" className="text-[#578cff] hover:underline">
                      privacy policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#578cff] text-white font-semibold text-base hover:bg-[#4070e0] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all shadow-sm"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
