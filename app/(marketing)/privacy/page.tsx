import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for AI Advisors, LLC — how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#292929]/50">Effective: June 2025</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10">
          {/* Intro */}
          <div>
            <p className="text-base text-[#292929]/70 leading-relaxed">
              AI Advisors, LLC (&ldquo;AI Advisors,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, share, and protect information when you visit our
              website at aiadvisorsllc.com (the &ldquo;Site&rdquo;) or engage with our services.
            </p>
          </div>

          <PolicySection title="1. Information We Collect">
            <p>We may collect the following categories of information:</p>
            <ul>
              <li>
                <strong>Contact Data:</strong> Name, email address, phone number, and company name
                that you provide when filling out a form, booking a call, or reaching out directly.
              </li>
              <li>
                <strong>Business Information:</strong> Details about your organization, industry,
                AI systems in use, and governance challenges — shared voluntarily during
                consultations or assessments.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, pages visited, and
                referral source, collected automatically through standard web server logs and
                analytics tools.
              </li>
              <li>
                <strong>Survey and Assessment Responses:</strong> Information provided through
                quizzes, assessments, or intake forms hosted on or linked from the Site.
              </li>
              <li>
                <strong>Communications:</strong> The content of emails, messages, and other
                communications you send to us.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to inquiries and schedule consultations</li>
              <li>Provide, deliver, and improve our advisory services</li>
              <li>Send relevant communications about our services, events, and resources (you may opt out at any time)</li>
              <li>Understand and improve the performance of our Site</li>
              <li>Comply with applicable legal and regulatory obligations</li>
              <li>Protect the rights and safety of AI Advisors, LLC and our clients</li>
            </ul>
            <p>
              We do not use your information for automated decision-making or profiling in ways
              that produce legal or similarly significant effects.
            </p>
          </PolicySection>

          <PolicySection title="3. Data Sharing">
            <p>
              We do not sell, rent, or trade your personal information to third parties for their
              marketing purposes.
            </p>
            <p>We may share your information in limited circumstances:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist with scheduling,
                email delivery, analytics, or other operational functions, subject to contractual
                obligations to protect your data.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, regulation, or valid
                legal process, or to protect the rights, property, or safety of AI Advisors, LLC
                or others.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                sale of all or substantially all of our assets, with appropriate protections for
                your information.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Data Retention">
            <p>
              We retain personal information for as long as necessary to fulfill the purposes for
              which it was collected, to provide services to you, and to comply with applicable
              legal obligations. Contact and business information is generally retained for the
              duration of our client relationship plus a reasonable period thereafter. Technical
              data and web analytics data are retained for up to 24 months.
            </p>
            <p>
              You may request deletion of your personal information at any time by contacting us
              at{" "}
              <a href="mailto:privacy@aiadvisorsllc.com" className="text-[#578cff] hover:underline">
                privacy@aiadvisorsllc.com
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="5. Your Rights">
            <p>
              Depending on your location, you may have rights under applicable privacy laws,
              including:
            </p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to or restrict certain processing activities</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              If you are located in the European Economic Area, United Kingdom, or California, you
              have additional rights under GDPR, the UK GDPR, or the CCPA. To exercise any of
              these rights, please contact us at{" "}
              <a href="mailto:privacy@aiadvisorsllc.com" className="text-[#578cff] hover:underline">
                privacy@aiadvisorsllc.com
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="6. Cookies and Tracking">
            <p>
              Our Site uses cookies and similar tracking technologies to improve your experience
              and analyze Site usage. Types of cookies we use include:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for the Site to function properly.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how visitors interact with
                the Site so we can improve it.
              </li>
            </ul>
            <p>
              You can control cookie settings through your browser. Note that disabling certain
              cookies may affect the functionality of the Site.
            </p>
          </PolicySection>

          <PolicySection title="7. Data Security">
            <p>
              We implement reasonable technical and organizational measures to protect personal
              information against unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </PolicySection>

          <PolicySection title="8. Third-Party Links">
            <p>
              Our Site may contain links to third-party websites, including Calendly and LinkedIn.
              We are not responsible for the privacy practices of those sites. We encourage you to
              review their privacy policies before providing any information.
            </p>
          </PolicySection>

          <PolicySection title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will post the updated policy
              on this page with a revised effective date. Continued use of the Site after changes
              are posted constitutes acceptance of the updated policy.
            </p>
          </PolicySection>

          <PolicySection title="10. Contact Us">
            <p>If you have questions or concerns about this Privacy Policy, please contact:</p>
            <div className="rounded-xl bg-[#f0f6ff] border border-[#e2e8f0] p-6 mt-4">
              <p className="font-semibold text-[#292929]">AI Advisors, LLC</p>
              <p className="text-[#292929]/65 text-sm mt-1">
                David W. Gwynn
                <br />
                Email:{" "}
                <a href="mailto:privacy@aiadvisorsllc.com" className="text-[#578cff] hover:underline">
                  privacy@aiadvisorsllc.com
                </a>
              </p>
            </div>
          </PolicySection>
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

function PolicySection({
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
