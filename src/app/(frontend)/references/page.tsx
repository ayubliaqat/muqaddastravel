export default function ReferencesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-border bg-section">
        <div className="container-custom py-16 text-center sm:py-20">
          <span className="badge">Our Sources</span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            References
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
            Learn where we collect our information and how we prepare our Hajj, Umrah, and Islamic
            guidance content.
          </p>
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
                  1. Our Approach to Research
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  At MuqaddasTravel, we aim to provide reliable and easy-to- understand information
                  for pilgrims. We carefully research each topic and use trusted sources before
                  publishing content.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Our goal is not to create new religious opinions, but to present authentic
                  information in a simple way that helps people prepare for Hajj and Umrah.
                </p>
              </div>

              {/* Quran */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  2. Qur&apos;an References
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  When discussing Islamic guidance, we refer to relevant verses from the Qur&apos;an
                  and mention Surah names and verse numbers wherever applicable.
                </p>
              </div>

              {/* Hadith */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  3. Hadith Sources
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Hadith-related information is taken from well-known and trusted Hadith
                  collections. We try to include references such as the collection name and Hadith
                  number whenever possible.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  We give preference to authentic narrations and avoid using weak or unsupported
                  reports without proper explanation.
                </p>
              </div>

              {/* Scholars */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  4. Scholarly Sources
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  For matters related to Hajj and Umrah rulings, we refer to guidance from
                  recognized scholars, Islamic institutions, and established educational resources.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Differences of opinion among scholars are respected, and we try to present
                  information in a balanced manner.
                </p>
              </div>

              {/* Official Sources */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  5. Official Travel Sources
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  For travel-related information such as visa requirements, regulations, and
                  official procedures, we refer users to official government and authorized sources.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Travel rules can change, so we encourage visitors to confirm the latest
                  information before making travel decisions.
                </p>
              </div>

              {/* Content Review */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  6. Content Review Process
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Every article goes through research and review before being published. We check
                  references, compare information, and try to provide clear explanations.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  However, mistakes can happen. If you find incorrect information or a missing
                  reference, please contact us and we will review it.
                </p>
              </div>

              {/* Transparency */}
              <div className="rounded-brand border border-border bg-section p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-primary sm:text-xl">Our Commitment</h2>

                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  We believe trust comes from honesty and transparency. MuqaddasTravel will continue
                  improving its content, updating references, and correcting mistakes whenever
                  needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
