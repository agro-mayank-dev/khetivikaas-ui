import { Book, Shield, Mail } from "lucide-react";

const termsTOC = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "eligibility", label: "2. Eligibility to Use" },
  { id: "provision", label: "3. Provision of Services" },
  { id: "user-obligations", label: "4. User Obligations" },
  { id: "data-usage", label: "5. Data Usage & Privacy" },
  { id: "third-party", label: "6. Third-Party Content & Marketplace" },
  { id: "ip", label: "7. Intellectual Property Rights" },
  { id: "prohibited", label: "8. Prohibited Conduct" },
  { id: "disclaimer", label: "9. Disclaimer of Warranties" },
  { id: "liability", label: "10. Limitation of Liability" },
  { id: "indemnification", label: "11. Indemnification" },
  { id: "termination", label: "12. Termination" },
  { id: "governing", label: "13. Governing Law & Jurisdiction" },
  { id: "amendments", label: "14. Amendments" },
  { id: "contact", label: "15. Contact Information" },
];

export default function TermsOfUse() {
  const lastUpdated = "21 September 2025";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-indigo-50 text-gray-900 p-6 sm:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <header className="px-8 py-10 bg-[#4CAF50] text-white">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
                <Book className="w-8 h-8" /> Terms of Use
              </h1>
              <p className="mt-2 text-sm text-indigo-100">
                Last Updated: {lastUpdated}
              </p>
            </div>
            <Shield className="w-10 h-10 opacity-80" />
          </div>
        </header>

        <main className="px-8 py-10 prose prose-indigo prose-sm sm:prose lg:prose-lg max-w-none">
          <section className="mb-6">
            <p>
              These <strong>Terms of Use</strong> ("Terms") constitute a legally
              binding agreement between you ("User", "you", "your") and{" "}
              <strong>KhetiVikaas Pty Limited</strong> ("Company", "we", "us",
              "our") governing your access to and use of the KhetiVikaas mobile
              application, website, software, and related services ("Services").
              By accessing or using our Services, you expressly acknowledge and
              agree that you have read, understood, and consented to be bound by
              these Terms. If you do not agree, you must immediately discontinue
              use of the Services.
            </p>
          </section>

          <TermsTOC />

          {[
            {
              id: "acceptance",
              title: "1. Acceptance of Terms",
              content: (
                <p>
                  Your use of the Services signifies your acceptance of these
                  Terms and any policies referenced herein (including our
                  Privacy Policy). These Terms constitute the entire agreement
                  between you and the Company, superseding all prior oral or
                  written understandings.
                </p>
              ),
            },
            {
              id: "eligibility",
              title: "2. Eligibility to Use",
              content: (
                <>
                  <p>You represent and warrant that you are:</p>
                  <ul>
                    <li>
                      At least 15 years of age or otherwise legally competent to
                      enter into binding agreements under applicable law.
                    </li>
                    <li>
                      Using the Services for lawful agricultural or commercial
                      purposes only.
                    </li>
                    <li>
                      Not barred or restricted from using digital services under
                      any applicable law or regulatory regime.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              id: "provision",
              title: "3. Provision of Services",
              content: (
                <>
                  <p>
                    The Company shall provide the Services on an{" "}
                    <em>“as is”, “as available”</em> basis, which may include
                    but are not limited to:
                  </p>
                  <ul>
                    <li>Crop advisory, diagnostics, and recommendations.</li>
                    <li>
                      Access to agricultural news, weather forecasts, and
                      government schemes.
                    </li>
                    <li>
                      Marketplace facilitation for agricultural products and
                      services.
                    </li>
                    <li>Farm management and productivity tools.</li>
                  </ul>
                  <p>
                    The Company reserves the absolute right to modify, suspend,
                    or discontinue any feature, functionality, or part of the
                    Services without prior notice and without liability.
                  </p>
                </>
              ),
            },
            {
              id: "user-obligations",
              title: "4. User Obligations",
              content: (
                <>
                  <p>You agree to:</p>
                  <ul>
                    <li>
                      Provide accurate, current, and complete information when
                      registering or using the Services.
                    </li>
                    <li>
                      Maintain the confidentiality of your account credentials.
                    </li>
                    <li>
                      Use the Services strictly in compliance with all
                      applicable laws.
                    </li>
                    <li>
                      Not engage in misuse, fraudulent activities, or
                      unauthorized commercial exploitation of the Services.
                    </li>
                  </ul>
                  <p>
                    You are solely responsible for all activities under your
                    account.
                  </p>
                </>
              ),
            },
            {
              id: "data-usage",
              title: "5. Data Usage & Privacy",
              content: (
                <>
                  <ul>
                    <li>
                      You acknowledge and consent that we may collect, process,
                      store, and use your personal and farm-related data in
                      accordance with our Privacy Policy.
                    </li>
                    <li>
                      You grant us an irrevocable, worldwide, royalty-free
                      license to use anonymized data for research, analytics,
                      product development, and commercial purposes.
                    </li>
                    <li>
                      The Company shall not be responsible for any unauthorized
                      access, breach, or misuse of data by third parties beyond
                      its reasonable control.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              id: "third-party",
              title: "6. Third-Party Content & Marketplace",
              content: (
                <>
                  <p>
                    The Services may display or facilitate access to third-party
                    products, content, or services. The Company does not
                    endorse, warrant, or guarantee the accuracy, quality, or
                    safety of such third-party offerings.
                  </p>
                  <div className="mt-3">
                    <h3 className="text-base font-semibold">
                      Marketplace Disclaimer
                    </h3>
                    <ul>
                      <li>
                        KhetiVikaas does not charge any fees or commissions for
                        sales or purchases between individual users.
                      </li>
                      <li>
                        The Platform only provides a listing and connection
                        service to enable users to discover and contact each
                        other.
                      </li>
                      <li>
                        All transactions, negotiations, payments, and deliveries
                        are conducted solely between the buyer and seller at
                        their own risk.
                      </li>
                      <li>
                        The Company shall not be liable for any disputes, fraud,
                        delays, product quality issues, failed payments, or
                        damages arising out of such transactions.
                      </li>
                      <li>
                        The Company will not mediate or intervene in any
                        disputes between Users.
                      </li>
                    </ul>
                  </div>
                </>
              ),
            },
            {
              id: "ip",
              title: "7. Intellectual Property Rights",
              content: (
                <>
                  <ul>
                    <li>
                      All intellectual property rights in the Services,
                      including software, databases, trademarks, content, and
                      designs, are exclusively owned by the Company or its
                      licensors.
                    </li>
                    <li>
                      Except for limited personal use as permitted under these
                      Terms, no right, title, or interest is transferred to you.
                      Any unauthorized use shall constitute a material breach
                      subject to legal remedies.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              id: "prohibited",
              title: "8. Prohibited Conduct",
              content: (
                <>
                  <p>You shall not:</p>
                  <ul>
                    <li>
                      Post, upload, or share content that is unlawful,
                      offensive, defamatory, misleading, or harmful.
                    </li>
                    <li>
                      Interfere with, disrupt, or circumvent the security or
                      integrity of the Services.
                    </li>
                    <li>
                      Use automated means (bots, scrapers) to extract or
                      manipulate Service data.
                    </li>
                    <li>
                      Infringe on the rights of the Company or any third party.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              id: "disclaimer",
              title: "9. Disclaimer of Warranties",
              content: (
                <>
                  <h3 className="text-base font-semibold">
                    General Disclaimer
                  </h3>
                  <p>
                    The information, advice, and materials available through the
                    Application are not intended to constitute professional
                    advice, diagnosis, or treatment, nor to substitute
                    professional judgment. You assume full risk and
                    responsibility for the use of any information you obtain
                    from or through this Application, and you agree that the
                    Company is not responsible or liable for any claim, loss,
                    damage, cost, expense, or liability arising from the use of
                    the information, advice, materials, and the Application.
                  </p>
                  <p>
                    You acknowledge that the Company does not originate, select,
                    moderate, or modify any content generated by other Users,
                    and has no control over your interactions with other Users.
                    Any interaction you have with other Users or third parties
                    is at your sole risk and cost.
                  </p>
                  <p>
                    We expressly disclaim any warranties or representations
                    (express or implied) in respect of quality, suitability,
                    accuracy, reliability, completeness, timeliness,
                    performance, safety, merchantability, fitness for a
                    particular purpose, title, non-infringement, or legality of
                    the information, advice, materials, or products listed or
                    displayed on the Application (including but not limited to
                    product information and/or specifications).
                  </p>
                  <p>
                    While we take reasonable precautions to avoid inaccuracies,
                    the Application and all content, information, software,
                    products, advice, services, materials, User Content, and
                    related graphics are provided <em>“as is”</em> and{" "}
                    <em>“where is”</em>, without warranty (express or implied)
                    of any kind.
                  </p>

                  <h3 className="text-base font-semibold mt-4">
                    Extended Disclaimer (Adapted from Industry Standards)
                  </h3>
                  <p>
                    Your use of the Service is at your sole risk. The Service is
                    provided on an "AS IS" and "AS AVAILABLE" basis. The Service
                    is provided without warranties of any kind, whether express
                    or implied, including, but not limited to, implied
                    warranties of merchantability, fitness for a particular
                    purpose, non-infringement, or course of performance.
                  </p>
                  <p>
                    KhetiVikaas Pty Limited, its subsidiaries, affiliates, and
                    licensors do not warrant that:
                  </p>
                  <ul>
                    <li>
                      the Service will function uninterrupted, secure, or
                      available at any particular time or location;
                    </li>
                    <li>any errors or defects will be corrected;</li>
                    <li>
                      the Service is free of viruses or other harmful
                      components; or
                    </li>
                    <li>
                      the results of using the Service will meet your
                      requirements.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              id: "liability",
              title: "10. Limitation of Liability",
              content: (
                <>
                  <p>To the fullest extent permitted by law:</p>
                  <ul>
                    <li>
                      The Company shall not be liable for any direct, indirect,
                      incidental, consequential, punitive, or exemplary damages,
                      including but not limited to crop loss, profit loss,
                      market fluctuations, or reputational damage, even if
                      advised of the possibility thereof.
                    </li>
                    <li>
                      The Company’s total cumulative liability, if any, shall
                      not exceed the lesser of (i) INR 1,000 (one thousand
                      only), or (ii) the amount paid by you (if any) for
                      accessing the Services in the six (6) months preceding the
                      claim.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              id: "indemnification",
              title: "11. Indemnification",
              content: (
                <p>
                  You agree to defend, indemnify, and hold harmless the Company,
                  its affiliates, officers, employees, and agents from and
                  against any and all claims, liabilities, damages, losses,
                  costs, and expenses (including legal fees) arising out of or
                  in connection with: your use of the Services; your violation
                  of these Terms; or your infringement of any rights of third
                  parties.
                </p>
              ),
            },
            {
              id: "termination",
              title: "12. Termination",
              content: (
                <p>
                  The Company reserves the right, without notice or liability,
                  to suspend or terminate your access to the Services at its
                  sole discretion, including for breach of these Terms or misuse
                  of the Platform. Upon termination, your right to use the
                  Services shall immediately cease.
                </p>
              ),
            },
            {
              id: "governing",
              title: "13. Governing Law & Jurisdiction",
              content: (
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes shall be subject to the
                  exclusive jurisdiction of the competent courts at Patiala,
                  India.
                </p>
              ),
            },
            {
              id: "amendments",
              title: "14. Amendments",
              content: (
                <p>
                  The Company may amend or revise these Terms at any time at its
                  sole discretion. Updates shall be effective upon posting on
                  the Platform. Continued use of the Services after amendments
                  constitutes acceptance of the revised Terms.
                </p>
              ),
            },
            {
              id: "contact",
              title: "15. Contact Information",
              content: (
                <p>
                  For inquiries email:{" "}
                  <a
                    href="mailto:contact@khetivikaas.com"
                    className="hover:underline"
                  >
                    contact@khetivikaas.com
                  </a>
                </p>
              ),
            },
          ].map(({ id, title, content }) => (
            <section id={id} key={id} className="mb-10">
              <h2 className="text-xl font-bold mb-3">{title}</h2>
              <div className="text-gray-700 leading-relaxed">{content}</div>
            </section>
          ))}

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5" />
              <h3 className="text-base font-semibold">
                Contact
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="mt-2 text-sm font-medium">KhetiVikaas Pty Limited</p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:contact@khetivikaas.com"
                className="hover:underline"
              >
                contact@khetivikaas.com
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function TermsTOC() {
  return (
    <aside className="mb-8 p-6 bg-gradient-to-r from-white to-green-50 rounded-xl border border-green-100 shadow-sm">
      <h2 className="text-lg font-semibold mb-3">
        📚 Table of Contents
      </h2>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {termsTOC.map((item) => (
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
