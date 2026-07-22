export default function DisclaimerPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-border bg-section">
        <div className="container-custom py-16 text-center sm:py-20">
          <span className="badge">Please Read This</span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Disclaimer
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
            Important information about our content, sources, and responsibility.
          </p>

          <p className="mt-6 text-xs font-medium text-light">Last updated: July 22, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-12">
              {/* Islamic Content */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  1. About Our Islamic Content
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel shares information about Hajj, Umrah, Ziyarat, duas, and Islamic
                  guidance based on the Qur&apos;an, authentic Hadith, and trusted Islamic sources.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Our content is carefully researched and reviewed to provide accurate and helpful
                  information for pilgrims. Hadith references and Islamic sources are mentioned
                  wherever possible to help you verify the information.
                </p>
              </div>

              {/* Human Mistakes */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  2. We Are Human and Mistakes Can Happen
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  We make every effort to keep our content correct, but humans can make mistakes.
                  Although we carefully check our articles, a mistake or missing detail is always
                  possible.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  If you find any incorrect information, unclear wording, or something that needs
                  correction, please let us know. We will review it and make corrections as soon as
                  possible.
                </p>
              </div>

              {/* Scholar Guidance */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  3. Not a Replacement for Scholars
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel is not a replacement for qualified Islamic scholars. Some matters
                  of worship may have differences of opinion among scholars and schools of thought.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  For personal situations or questions about performing acts of worship, we
                  recommend consulting a trusted scholar or local Islamic authority.
                </p>
              </div>

              {/* Travel Information */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  4. Travel and Planning Information
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel provides general travel guidance to help you prepare for Hajj and
                  Umrah. We do not provide visa services, flights, hotel bookings, or travel
                  packages.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Travel rules, prices, and requirements can change. Always confirm the latest
                  information from official sources before making any travel decisions.
                </p>
              </div>

              {/* Health */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  5. Health and Safety
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Any health and safety information shared on this website is general guidance only.
                  It is not medical advice.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Please consult a qualified doctor for medical advice, vaccines, and health
                  requirements before travelling for Hajj or Umrah.
                </p>
              </div>

              {/* External Links */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  6. External Links
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  We may share links to other websites that can provide useful information. We do
                  not control these websites and are not responsible for their content.
                </p>
              </div>

              {/* Responsibility */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  7. Your Responsibility
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel aims to provide reliable and helpful information, but users should
                  always verify important matters and make decisions based on their own situation.
                </p>
              </div>

              {/* Contact */}
              <div className="rounded-brand border border-border bg-section p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-primary sm:text-xl">Found a Mistake?</h2>

                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  If you find any mistake in our content, a missing reference, or something that
                  needs correction, please contact us at{' '}
                  <a
                    href="mailto:hello@muqaddastravel.com"
                    className="font-semibold text-brand hover:text-brand-hover"
                  >
                    hello@muqaddastravel.com
                  </a>
                  . We appreciate your help and will review corrections as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
