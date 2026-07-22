export default function CookiesPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-border bg-section">
        <div className="container-custom py-16 text-center sm:py-20">
          <span className="badge">Website Information</span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Cookies and Policies
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
            Learn how MuqaddasTravel uses cookies and similar technologies to improve your browsing
            experience.
          </p>

          <p className="mt-6 text-xs font-medium text-light">Last updated: July 22, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  1. What Are Cookies?
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Cookies are small text files stored on your device when you visit a website. They
                  help websites remember information and improve how they work.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel uses cookies only to improve website performance, understand
                  visitor usage, and provide a better experience.
                </p>
              </div>

              {/* Why Use Cookies */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  2. Why We Use Cookies
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  We may use cookies for purposes such as:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-secondary sm:text-base">
                  <li>Understanding how visitors use our website</li>
                  <li>Improving website speed and performance</li>
                  <li>Remembering basic user preferences</li>
                  <li>Maintaining website security</li>
                </ul>
              </div>

              {/* Types */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  3. Types of Cookies We May Use
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Different cookies may serve different purposes:
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary">Essential Cookies</h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">
                      These cookies help the website function properly and cannot usually be
                      disabled.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary">Analytics Cookies</h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">
                      These help us understand website traffic and improve our content and user
                      experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary">Preference Cookies</h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">
                      These remember certain settings to make your experience easier.
                    </p>
                  </div>
                </div>
              </div>

              {/* Third Party */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  4. Third-Party Cookies
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Some trusted third-party services, such as analytics or hosting providers, may use
                  cookies according to their own privacy policies.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel does not control third-party cookies and recommends reviewing the
                  policies of those services.
                </p>
              </div>

              {/* Managing Cookies */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  5. Managing Cookies
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  You can control or remove cookies through your browser settings. Most browsers
                  allow you to block cookies or notify you before storing them.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Please note that disabling cookies may affect some website features.
                </p>
              </div>

              {/* Privacy Connection */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">6. Your Privacy</h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Cookies do not give us access to your personal files or private information. Any
                  information collected through cookies is handled according to our Privacy Policy.
                </p>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  7. Changes to This Policy
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  We may update this Cookies Policy when necessary. Any changes will be posted on
                  this page with the updated date.
                </p>
              </div>

              {/* Contact */}
              <div className="rounded-brand border border-border bg-section p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-primary sm:text-xl">Contact Us</h2>

                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  If you have questions about our Cookies Policy, contact us at{' '}
                  <a
                    href="mailto:hello@muqaddastravel.com"
                    className="font-semibold text-brand hover:text-brand-hover"
                  >
                    hello@muqaddastravel.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
