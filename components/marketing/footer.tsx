import Link from "next/link"

const BOOK_CALL_URL =
  "https://calendly.com/dgwynn/introductory-15-minute-meeting-david-gwynn-ai-advisors"

/**
 * Editorial footer — navy background, white text, single red CTA button.
 * Closes the page with the same "evidence on demand" tone as the masthead.
 */
export function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      {/* Primary close-out band */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p
          className="max-w-[26em]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            lineHeight: 1.55,
            color: "#C7D0E0",
          }}
        >
          Decision Defensibility Infrastructure for boards, GCs, and regulated enterprises.
        </p>
        <Link
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red text-white px-5 py-3 hover:bg-[#A50C25] transition-colors"
          style={{ fontFamily: "var(--font-ui)", fontSize: 13, letterSpacing: "0.03em" }}
        >
          Request Your Exposure Assessment
        </Link>
      </div>

      {/* Link rows */}
      <div className="border-t border-white/15">
        <div
          className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
        >
          <div>
            <h4
              className="text-white mb-3"
              style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Site
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4
              className="text-white mb-3"
              style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Legal
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4
              className="text-white mb-3"
              style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Connect
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link
                  href="https://www.linkedin.com/in/davidwgwynn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@AIAdvisors-DG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-white mb-3"
              style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="mailto:david@aiadvisorsllc.com" className="hover:text-white transition-colors">
                  david@aiadvisorsllc.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer + © */}
      <div className="border-t border-white/15">
        <div
          className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-5 space-y-2"
          style={{ fontFamily: "var(--font-ui)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}
        >
          <p className="leading-relaxed">
            AI Advisors, LLC is an Oregon Limited Liability Corporation (&ldquo;LLC&rdquo;) and serves
            US-Based regulated industries. AI Advisors, LLC does not provide legal, tax, financial,
            or investment advice. Interested persons should contact their licensed professional(s).
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
            <p>
              PrescienceOS™, Decision Receipt™, and AI Decision Rating™ are trademarks of Prescience
              Holdings.
            </p>
            <p>&copy; 2026 AI Advisors, LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
