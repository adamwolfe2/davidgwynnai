import Link from "next/link"

/**
 * Editorial footer — navy background, white text. No CTA button (the final
 * CTA section above carries the action). Brand line, link grid, disclaimer.
 */
export function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      {/* Brand row — descriptor only; final CTA above carries the action */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-[34px] pt-12 md:pt-10 pb-8 md:pb-6 border-t border-white/15 text-center md:text-left">
        <p
          className="max-w-[36em] mx-auto md:mx-0"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            lineHeight: 1.55,
            color: "#C7D0E0",
          }}
        >
          Decision Defensibility Infrastructure for boards, GCs, and regulated enterprises.
        </p>
      </div>

      {/* Link rows */}
      <div className="border-t border-white/15">
        <div
          className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-8 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center md:text-left"
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
              <li><Link href="/apply" className="hover:text-white transition-colors">Private Advisory Application</Link></li>
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
          className="max-w-[1080px] mx-auto px-6 md:px-[34px] py-6 md:py-5 space-y-3 text-center md:text-left"
          style={{ fontFamily: "var(--font-ui)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}
        >
          {/* TODO[counsel-gated]: David's P1-2. Reconcile entity disclosure
              between this LLC disclaimer and the trademark-owner line above
              (Oregon LLC vs Delaware C-Corp / Prescience Holdings in formation).
              Counsel must confirm the corporate story is internally consistent
              before this disclaimer is finalized. */}
          <p className="leading-relaxed">
            AI Advisors, LLC is an Oregon Limited Liability Corporation (&ldquo;LLC&rdquo;) and serves
            US-Based regulated industries. AI Advisors, LLC does not provide legal, tax, financial,
            or investment advice. Interested persons should contact their licensed professional(s).
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
            {/* TODO[counsel-gated]: confirm trademark-owner entity (Oregon LLC
                vs Delaware C-Corp in formation) before final publish. Per David's
                P1-1 + P1-2: entity disclosure must be consistent across footer +
                trademark line. Until cleared, "Prescience Holdings" stays as a
                placeholder for the holding entity that will own the marks. */}
            <p>
              PrescienceOS™, Decision Receipt™, and AIDR™ (AI Decision Record) are
              trademarks of Prescience Holdings.
            </p>
            <p>&copy; 2026 AI Advisors, LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
