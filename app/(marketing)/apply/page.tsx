import type { Metadata } from "next"
import Link from "next/link"
import { ApplicationForm } from "@/components/marketing/application-form"

export const metadata: Metadata = {
  title: "Private Advisory Application",
  description:
    "Apply for private advisory with AI Advisors, LLC. Direct engagements with David W. Gwynn for executives and boards in regulated industries.",
  alternates: { canonical: "/apply" },
}

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

export default function ApplyPage() {
  return (
    <div className="bg-paper">
      {/* Header band */}
      <section className="border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-16 md:pt-[64px] pb-12 md:pb-[64px] text-center md:text-left">
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
            Private Advisory Application
          </p>
          <h1
            className="text-navy mt-4 max-w-[18em] mx-auto md:mx-0"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(34px, 5.5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
            }}
          >
            Apply for direct advisory.
          </h1>
          <span className="block w-[54px] h-[2px] bg-red mt-5 mx-auto md:mx-0" />
          <p
            className="mt-5 max-w-[36em] mx-auto md:mx-0 text-ink-body"
            style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65 }}
          >
            This application is for organizations interested in direct advisory engagements with
            David W. Gwynn and the AI Advisors team. It takes about five minutes. We review every
            submission and reach out within a few business days.
          </p>
          <p
            className="mt-4 max-w-[36em] mx-auto md:mx-0 text-sand"
            style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6 }}
          >
            Just exploring? A{" "}
            <Link
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red border-b border-red pb-0.5 hover:text-[#A50C25] transition-colors"
            >
              15-minute introductory call
            </Link>{" "}
            is the lighter starting point.
          </p>
        </div>
      </section>

      {/* Form band */}
      <section className="border-b border-rule">
        <div className="max-w-[760px] mx-auto px-6 md:px-[34px] py-14 md:py-[64px]">
          <p
            className="text-sand mb-2"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <span className="text-red">*</span> indicates a required field
          </p>
          <div className="border-t border-navy pt-10">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </div>
  )
}
