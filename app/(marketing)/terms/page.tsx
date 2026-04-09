import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AI Advisors, LLC.",
}

export default function TermsPage() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#578cff]/10 text-[#578cff] text-xs font-semibold uppercase tracking-wider mb-4">
            Legal
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#292929] mb-4"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-[#292929]/50">Effective: June 2025</p>
        </div>

        <div className="space-y-10">
          {/* Intro */}
          <div>
            <p className="text-base text-[#292929]/70 leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the AI
              Advisors, LLC website located at aiadvisorsllc.com (the &ldquo;Site&rdquo;) and any
              related services provided by AI Advisors, LLC (&ldquo;AI Advisors,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the Site, you agree
              to be bound by these Terms. If you do not agree, please do not use the Site.
            </p>
          </div>

          <TermsSection title="1. Purpose and Scope">
            <p>
              The Site is intended to provide information about AI Advisors, LLC, its services,
              and its approach to AI governance and decision defensibility. The Site is designed
              for professionals in regulated industries, including banking and financial services,
              insurance, and healthcare, as well as board members, executives, and legal counsel
              seeking information about AI governance practices.
            </p>
            <p>
              Nothing on this Site constitutes legal advice, financial advice, regulatory advice,
              or a guarantee of any specific outcome. Information provided is general in nature
              and does not establish an attorney-client, advisor-client, or fiduciary relationship.
            </p>
          </TermsSection>

          <TermsSection title="2. No Guarantees">
            <p>
              AI Advisors, LLC makes no representations or warranties, express or implied,
              regarding:
            </p>
            <ul>
              <li>
                The accuracy, completeness, or timeliness of any content on the Site
              </li>
              <li>
                The results that may be achieved from using our services, including regulatory
                examination outcomes, legal defensibility, or business performance improvements
              </li>
              <li>
                The suitability of any service, framework, or methodology for your specific
                regulatory environment, business circumstances, or risk profile
              </li>
            </ul>
            <p>
              Outcomes depend on many factors outside AI Advisors&apos; control, including but not
              limited to the completeness of information provided by clients, changes in
              regulatory requirements, and the actions of regulators, auditors, or courts.
            </p>
          </TermsSection>

          <TermsSection title="3. Intellectual Property">
            <p>
              All content on this Site, including text, images, graphics, logos, and the
              PrescienceOS™, Decision Receipt™, Decision Registry, and AI Decision Rating™ (AIDR)
              names and methodologies, are the intellectual property of AI Advisors, LLC and are
              protected by applicable intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly
              display, or commercially exploit any content from this Site without the prior
              written consent of AI Advisors, LLC, except as permitted by applicable law or for
              personal, non-commercial reference purposes.
            </p>
            <p>
              The names PrescienceOS™, Decision Receipt™, and AI Decision Rating™ are proprietary
              marks of AI Advisors, LLC. Any unauthorized use of these marks is strictly prohibited.
            </p>
          </TermsSection>

          <TermsSection title="4. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, AI Advisors, LLC and its
              principals, employees, contractors, and agents shall not be liable for any indirect,
              incidental, consequential, special, or punitive damages arising from or related to
              your use of the Site or our services, including but not limited to:
            </p>
            <ul>
              <li>Loss of revenue, profits, or business opportunities</li>
              <li>Regulatory fines, penalties, or enforcement actions</li>
              <li>Legal costs, litigation expenses, or judgment amounts</li>
              <li>Loss of data or systems</li>
            </ul>
            <p>
              In no event shall our aggregate liability exceed the amount paid by you to AI
              Advisors, LLC in the twelve (12) months preceding the claim. Some jurisdictions do
              not allow limitations on liability; in those jurisdictions, our liability is limited
              to the greatest extent permitted by law.
            </p>
          </TermsSection>

          <TermsSection title="5. Third-Party Links">
            <p>
              The Site may contain links to third-party websites and services, including Calendly,
              LinkedIn, YouTube, and Typeform. These links are provided for convenience only. AI
              Advisors, LLC does not endorse, control, or assume responsibility for the content,
              privacy practices, or terms of any third-party site. Your use of third-party sites
              is governed by their respective terms and policies.
            </p>
          </TermsSection>

          <TermsSection title="6. Modifications">
            <p>
              We reserve the right to modify these Terms at any time. Updated Terms will be
              posted on this page with a revised effective date. Your continued use of the Site
              after changes are posted constitutes acceptance of the updated Terms. If you do not
              agree to the updated Terms, you must discontinue use of the Site.
            </p>
          </TermsSection>

          <TermsSection title="7. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of the United
              States and the state in which AI Advisors, LLC is registered, without regard to
              conflict of law principles. Any disputes arising from these Terms or your use of
              the Site shall be resolved through good-faith negotiation between the parties.
            </p>
          </TermsSection>

          <TermsSection title="8. Accessibility">
            <p>
              AI Advisors, LLC is committed to making this Site accessible to all users. If you
              experience accessibility barriers, please contact us at{" "}
              <a href="mailto:david@aiadvisorsllc.com" className="text-[#578cff] hover:underline">
                david@aiadvisorsllc.com
              </a>{" "}
              and we will make reasonable efforts to accommodate your needs.
            </p>
          </TermsSection>

          <TermsSection title="9. Legal Disclaimer">
            <p>
              AI Advisors, LLC is an AI governance advisory firm and does not provide legal,
              accounting, financial, or regulatory advice in the professional licensed sense.
              Nothing in the content of this Site, our communications, or our service deliverables
              should be construed as creating an attorney-client relationship or as a substitute
              for the advice of a licensed attorney, accountant, or regulator. Clients are
              encouraged to consult qualified legal counsel in connection with any regulatory
              matter.
            </p>
          </TermsSection>

          <TermsSection title="10. Contact">
            <p>
              Questions about these Terms may be directed to:
            </p>
            <div className="rounded-xl bg-[#f0f6ff] border border-[#e2e8f0] p-6 mt-4">
              <p className="font-semibold text-[#292929]">AI Advisors, LLC</p>
              <p className="text-[#292929]/65 text-sm mt-1">
                David W. Gwynn
                <br />
                Email:{" "}
                <a href="mailto:david@aiadvisorsllc.com" className="text-[#578cff] hover:underline">
                  david@aiadvisorsllc.com
                </a>
              </p>
            </div>
          </TermsSection>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
          <Link href="/" className="text-sm text-[#578cff] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

function TermsSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2
        className="text-xl font-bold text-[#292929] mb-4"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        {title}
      </h2>
      <div className="space-y-3 text-sm text-[#292929]/70 leading-relaxed [&_strong]:text-[#292929] [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  )
}
