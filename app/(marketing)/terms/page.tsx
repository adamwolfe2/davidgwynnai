import type { Metadata } from "next"
import Link from "next/link"
import { LegalHeader, LegalSection } from "@/components/marketing/legal-section"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AI Advisors, LLC.",
}

export default function TermsPage() {
  return (
    <div className="bg-paper">
      <LegalHeader
        title="Terms of Service"
        effective="June 2025"
        intro={
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the AI
            Advisors, LLC website located at aiadvisorsllc.com (the &ldquo;Site&rdquo;) and any
            related services provided by AI Advisors, LLC (&ldquo;AI Advisors,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the
            Site, you agree to be bound by these Terms. If you do not agree, please do not use
            the Site.
          </p>
        }
      />

      <section className="border-b border-rule">
        <div className="max-w-[820px] mx-auto px-6 md:px-[34px] py-2">
          <LegalSection num="1" title="Purpose and Scope">
            <p>
              The Site is intended to provide information about AI Advisors, LLC, its services,
              and its approach to AI governance and decision defensibility. The Site is designed
              for professionals in regulated industries, including banking and financial
              services, insurance, and healthcare, as well as board members, executives, and
              legal counsel seeking information about AI governance practices.
            </p>
            <p>
              Nothing on this Site constitutes legal advice, financial advice, regulatory advice,
              or a guarantee of any specific outcome. Information provided is general in nature
              and does not establish an attorney-client, advisor-client, or fiduciary
              relationship.
            </p>
          </LegalSection>

          <LegalSection num="2" title="No Guarantees">
            <p>
              AI Advisors, LLC makes no representations or warranties, express or implied,
              regarding:
            </p>
            <ul>
              <li>The accuracy, completeness, or timeliness of any content on the Site</li>
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
              Outcomes depend on many factors outside AI Advisors&rsquo; control, including but
              not limited to the completeness of information provided by clients, changes in
              regulatory requirements, and the actions of regulators, auditors, or courts.
            </p>
          </LegalSection>

          <LegalSection num="3" title="Intellectual Property">
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
              marks of AI Advisors, LLC. Any unauthorized use of these marks is strictly
              prohibited.
            </p>
          </LegalSection>

          <LegalSection num="4" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, AI Advisors, LLC and its
              principals, employees, contractors, and agents shall not be liable for any
              indirect, incidental, consequential, special, or punitive damages arising from or
              related to your use of the Site or our services, including but not limited to:
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
              not allow limitations on liability; in those jurisdictions, our liability is
              limited to the greatest extent permitted by law.
            </p>
          </LegalSection>

          <LegalSection num="5" title="Third-Party Links">
            <p>
              The Site may contain links to third-party websites and services, including
              Calendly, LinkedIn, and YouTube. These links are provided for convenience only.
              AI Advisors, LLC does not endorse, control, or assume responsibility for the
              content, privacy practices, or terms of any third-party site. Your use of
              third-party sites is governed by their respective terms and policies.
            </p>
          </LegalSection>

          <LegalSection num="6" title="Modifications">
            <p>
              We reserve the right to modify these Terms at any time. Updated Terms will be
              posted on this page with a revised effective date. Your continued use of the Site
              after changes are posted constitutes acceptance of the updated Terms. If you do not
              agree to the updated Terms, you must discontinue use of the Site.
            </p>
          </LegalSection>

          <LegalSection num="7" title="Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of the United
              States and the state in which AI Advisors, LLC is registered, without regard to
              conflict of law principles. Any disputes arising from these Terms or your use of
              the Site shall be resolved through good-faith negotiation between the parties.
            </p>
          </LegalSection>

          <LegalSection num="8" title="Accessibility">
            <p>
              AI Advisors, LLC is committed to making this Site accessible to all users. If you
              experience accessibility barriers, please contact us at{" "}
              <a href="mailto:david@aiadvisorsllc.com">david@aiadvisorsllc.com</a> and we will
              make reasonable efforts to accommodate your needs.
            </p>
          </LegalSection>

          <LegalSection num="9" title="Legal Disclaimer">
            <p>
              AI Advisors, LLC is an AI governance advisory firm and does not provide legal,
              accounting, financial, or regulatory advice in the professional licensed sense.
              Nothing in the content of this Site, our communications, or our service
              deliverables should be construed as creating an attorney-client relationship or as
              a substitute for the advice of a licensed attorney, accountant, or regulator.
              Clients are encouraged to consult qualified legal counsel in connection with any
              regulatory matter.
            </p>
          </LegalSection>

          <LegalSection num="10" title="Contact">
            <p>Questions about these Terms may be directed to:</p>
            <div
              className="mt-2 bg-paper-2 px-5 py-5"
              style={{ borderLeft: "2px solid var(--color-red)" }}
            >
              <p>
                <strong>AI Advisors, LLC</strong>
              </p>
              <p>
                David W. Gwynn
                <br />
                Email: <a href="mailto:david@aiadvisorsllc.com">david@aiadvisorsllc.com</a>
              </p>
            </div>
          </LegalSection>

          <div className="pt-8 pb-12">
            <Link
              href="/"
              className="text-red border-b border-red pb-0.5 hover:text-[#A50C25] transition-colors"
              style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
