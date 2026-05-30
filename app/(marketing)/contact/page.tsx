import type { Metadata } from "next"
import Link from "next/link"
import { ContactForm } from "@/components/marketing/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with AI Advisors, LLC about Decision Defensibility Infrastructure for banks, insurers, and health systems.",
}

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"
const LINKEDIN_URL = "https://www.linkedin.com/in/davidwgwynn/"
const YOUTUBE_URL = "https://www.youtube.com/@AIAdvisors-DG"

export default function ContactPage() {
  return (
    <div className="bg-paper">
      {/* Header band */}
      <section className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-14 md:pt-[64px] pb-12 md:pb-[52px]">
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-red)",
              fontWeight: 600,
            }}
          >
            Contact
          </p>
          <h1
            className="text-navy mt-4 max-w-[18em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(36px, 5.5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
            }}
          >
            Start the conversation.
          </h1>
          <span className="block w-[54px] h-[2px] bg-red mt-5" />
          <p
            className="mt-5 max-w-[34em] text-ink-body"
            style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6 }}
          >
            Every engagement begins with a conversation. Tell us about your organization and
            we&rsquo;ll identify where AI Advisors can have the most impact — usually within one
            business day.
          </p>
        </div>
      </section>

      {/* Main content — info + form */}
      <section className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-14 md:py-[64px] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-[34px] items-start">
          {/* Left — direct channels */}
          <aside>
            <p
              className="text-sand"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Direct channels
            </p>

            <div className="mt-5" style={{ borderTop: "1px solid var(--color-navy)" }}>
              {[
                { label: "Email", value: "david@aiadvisorsllc.com", href: "mailto:david@aiadvisorsllc.com" },
                { label: "LinkedIn", value: "David W. Gwynn", href: LINKEDIN_URL, external: true },
                { label: "YouTube", value: "AI Advisors", href: YOUTUBE_URL, external: true },
                { label: "Book a call", value: "15-minute intro", href: BOOK_CALL_URL, external: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                  style={{ borderBottom: "1px solid var(--color-rule)" }}
                >
                  <span
                    className="text-sand"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {row.label}
                  </span>
                  <Link
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noopener noreferrer" : undefined}
                    className="text-navy hover:text-red transition-colors text-right"
                    style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
                  >
                    {row.value} →
                  </Link>
                </div>
              ))}
            </div>

            <div
              className="mt-8 bg-paper-2 px-5 py-5"
              style={{ borderLeft: "2px solid var(--color-red)" }}
            >
              <p
                className="text-sand"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Serving
              </p>
              <p
                className="text-ink-body mt-2"
                style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55 }}
              >
                Banks, insurers, and health systems navigating AI governance, regulatory
                compliance, and decision defensibility.
              </p>
            </div>
          </aside>

          {/* Right — native form */}
          <div>
            <p
              className="text-sand"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Send a message
            </p>
            <p
              className="mt-3 mb-8 text-navy max-w-[22em]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(22px, 2.8vw, 28px)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              A short note is plenty. We&rsquo;ll write back with the right next step.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
