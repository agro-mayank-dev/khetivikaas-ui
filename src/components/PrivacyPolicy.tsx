import { Shield, Mail, FileText } from "lucide-react";

const tocItems = [
  { id: "collection", label: "1. Information Collection and Use" },
  { id: "logdata", label: "2. Log Data and Cookies" },
  { id: "service-providers", label: "3. Service Providers" },
  { id: "data-sharing", label: "4. Data Sharing and Disclosure" },
  { id: "international", label: "5. International Data Transfer" },
  { id: "security", label: "6. Security" },
  { id: "retention", label: "7. Data Retention" },
  { id: "communications", label: "8. Communications & Marketing" },
  { id: "children", label: "9. Children’s Privacy" },
  { id: "affiliate", label: "10. Affiliate & Advertising Programs" },
  { id: "liability", label: "11. Limitation of Liability" },
  { id: "changes", label: "12. Changes to this Privacy Policy" },
];

export default function PrivacyPolicy() {
  const lastUpdated = "21 September 2025";

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-gray-50 text-gray-900 p-6 sm:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <header className="px-8 py-10 bg-[#4CAF50] text-white">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
                <Shield className="w-8 h-8" /> Privacy Policy
              </h1>
              <p className="mt-2 text-sm text-indigo-100">
                Last Updated: {lastUpdated}
              </p>
            </div>
            <FileText className="w-10 h-10 opacity-80" />
          </div>
        </header>

        {/* Main content */}
        <main className="px-8 py-10 prose prose-indigo prose-sm sm:prose lg:prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              <strong>KhetiVikaas Pty Limited</strong> ("KhetiVikaas",
              "Company", "we", "our", or "us") operates the KhetiVikaas website{" "}
              <a
                href="https://www.khetivikaas.com"
                className="text-indigo-600 hover:underline"
              >
                https://www.khetivikaas.com
              </a>{" "}
              (the "Website") and mobile application (the "App"), together
              referred to as the "Services." This Privacy Policy ("Policy")
              informs you of our policies regarding the collection, use,
              disclosure, transfer, and safeguarding of information when you use
              our Services. By accessing or using the Services, you agree to the
              practices described herein. If you do not consent, you must
              immediately discontinue use of the Services.
            </p>
          </section>

          {/* TOC */}
          <PrivacyPolicyTOC />

          {/* Sections */}
          {[
            {
              id: "collection",
              title: "1. Information Collection and Use",
              content: (
                <>
                  <p>
                    When using our Services, we may request personally
                    identifiable information ("Personal Information"), which may
                    include but is not limited to:
                  </p>
                  <ul>
                    <li>
                      Name, email address, phone number, and contact details
                    </li>
                    <li>
                      Agricultural profile data (e.g., crop preferences, farm
                      size, soil type, location)
                    </li>
                    <li>
                      Transactional data related to marketplace activities
                    </li>
                    <li>
                      Device and log data, such as IP address, browser type,
                      mobile operating system, mobile device ID, time zone, and
                      session data
                    </li>
                  </ul>
                  <p>We collect and use this information to:</p>
                  <ul>
                    <li>Provide and improve our Services</li>
                    <li>Authenticate accounts and enable platform features</li>
                    <li>Customize content, recommendations, and offers</li>
                    <li>Communicate updates, advisories, and promotions</li>
                    <li>
                      Monitor platform usage for analytics and service
                      optimization
                    </li>
                    <li>Fulfill legal and regulatory obligations</li>
                  </ul>
                </>
              ),
            },
            {
              id: "logdata",
              title: "2. Log Data and Cookies",
              content: (
                <p>
                  When you access the Services, we may collect log data
                  automatically. This may include device identifiers, IP
                  address, browser type, and usage statistics. We also use{" "}
                  <em>cookies and similar technologies</em> to store
                  preferences, improve functionality, and deliver targeted
                  advertising. Disabling cookies may impair certain Service
                  features.
                </p>
              ),
            },
            {
              id: "service-providers",
              title: "3. Service Providers",
              content: (
                <>
                  <p>
                    We may engage trusted third-party companies or individuals
                    to:
                  </p>
                  <ul>
                    <li>Facilitate our Services</li>
                    <li>Provide analytics and marketing support</li>
                    <li>Process payments and logistics</li>
                    <li>Improve platform performance</li>
                  </ul>
                  <p>
                    Such parties are granted access to Personal Information
                    strictly to perform their functions on our behalf and are
                    bound by confidentiality obligations.
                  </p>
                </>
              ),
            },
            {
              id: "data-sharing",
              title: "4. Data Sharing and Disclosure",
              content: (
                <>
                  <p>
                    We may disclose your information under the following
                    circumstances:
                  </p>
                  <ul>
                    <li>
                      <strong>Internal Use:</strong> With employees,
                      contractors, advisors, and affiliates who require access
                      for legitimate business functions.
                    </li>
                    <li>
                      <strong>Business Partners:</strong> With vendors,
                      logistics providers, and advertising partners essential
                      for service delivery.
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> To comply with law,
                      regulation, court order, or lawful requests of government
                      authorities.
                    </li>
                    <li>
                      <strong>Corporate Transactions:</strong> In case of
                      merger, acquisition, restructuring, or sale of assets,
                      user data may be lawfully transferred.
                    </li>
                  </ul>
                  <p>
                    We will not sell, rent, or exploit user information outside
                    these defined purposes.
                  </p>
                </>
              ),
            },
            {
              id: "international",
              title: "5. International Data Transfer",
              content: (
                <p>
                  Your data may be stored and processed in servers located
                  outside your jurisdiction. By using our Services, you consent
                  to such transfers, acknowledging that data protection laws in
                  other jurisdictions may differ from those applicable in your
                  location.
                </p>
              ),
            },
            {
              id: "security",
              title: "6. Security",
              content: (
                <p>
                  We implement industry-standard safeguards to protect Personal
                  Information. However, you acknowledge that no method of
                  transmission or storage is entirely secure. The Company
                  disclaims liability for unauthorized access or disclosure
                  beyond our reasonable control.
                </p>
              ),
            },
            {
              id: "retention",
              title: "7. Data Retention",
              content: (
                <p>
                  We retain Personal Information only as long as necessary to
                  deliver Services or comply with legal obligations. Residual
                  data may persist in backups despite deletion requests.
                </p>
              ),
            },
            {
              id: "communications",
              title: "8. Communications & Marketing",
              content: (
                <p>
                  By providing contact details, you authorize us to send
                  transactional, advisory, and promotional communications. You
                  may opt out of promotional content, but service-related
                  notifications are mandatory for continued use of the Services.
                </p>
              ),
            },
            {
              id: "children",
              title: "9. Children’s Privacy",
              content: (
                <p>
                  Our Services are not directed toward children under the age of
                  15. We do not knowingly collect information from children. If
                  we become aware that we have collected Personal Information
                  from a child under age 15 without parental consent, we will
                  take reasonable steps to delete such information.
                </p>
              ),
            },
            {
              id: "affiliate",
              title: "10. Affiliate & Advertising Programs",
              content: (
                <p>
                  KhetiVikaas may participate in affiliate programs and digital
                  advertising networks to monetize Services. These may use
                  cookies and identifiers to track engagement. All such activity
                  will comply with applicable advertising laws and third-party
                  policies.
                </p>
              ),
            },
            {
              id: "liability",
              title: "11. Limitation of Liability",
              content: (
                <>
                  <p>To the maximum extent permitted by law:</p>
                  <ul>
                    <li>
                      KhetiVikaas disclaims liability for any indirect,
                      incidental, or consequential damages arising from
                      unauthorized access, disclosure, or misuse of Personal
                      Information.
                    </li>
                    <li>
                      Users are solely responsible for the accuracy of data they
                      provide.
                    </li>
                    <li>
                      We do not warrant uninterrupted, secure, or error-free
                      operation of the Services.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              id: "changes",
              title: "12. Changes to this Privacy Policy",
              content: (
                <p>
                  We reserve the unilateral right to amend or revise this Policy
                  at any time. Updates will be effective immediately upon
                  posting to the Website or App. Continued use of the Services
                  constitutes acceptance of the updated Policy.
                </p>
              ),
            },
          ].map(({ id, title, content }) => (
            <section id={id} key={id} className="mb-10">
              <h2 className="text-xl font-bold mb-3">
                {title}
              </h2>
              <div className="text-gray-700 leading-relaxed">{content}</div>
            </section>
          ))}

          {/* Footer */}
          <footer id="contact" className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5" />
              <h3 className="text-base font-semibold">
                Contact Us
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-2 text-sm font-medium">KhetiVikaas Pty Limited</p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:privacy@khetivikaas.com"
                className="hover:underline"
              >
                privacy@khetivikaas.com
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function PrivacyPolicyTOC() {
  return (
    <aside
      id="toc"
      className="mb-10 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 shadow-sm"
    >
      <h2 className="text-lg font-semibold mb-3 text-black">
        📑 Table of Contents
      </h2>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
