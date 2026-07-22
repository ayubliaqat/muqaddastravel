export default function EditorialPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-border bg-section">
        <div className="container-custom py-16 text-center sm:py-20">
          <span className="badge">How We Create Content</span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Editorial Policy
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
            Learn how we research, review, and update the information published on MuqaddasTravel.
          </p>

          <p className="mt-6 text-xs font-medium text-light">Last updated: July 22, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-12">
              {/* Mission */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  1. Our Editorial Purpose
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel creates educational content to help Muslims prepare for Hajj,
                  Umrah, and Ziyarat with better understanding and confidence.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Our purpose is to present information in a simple and useful way while respecting
                  authentic Islamic sources.
                </p>
              </div>

              {/* Research */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  2. Research and Sources
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Before publishing content, we research information from reliable sources,
                  including Qur&apos;an references, authentic Hadith collections, scholarly
                  guidance, and trusted institutions.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  We aim to include references wherever possible so readers can verify the
                  information themselves.
                </p>
              </div>

              {/* Review */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  3. Content Review Process
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Our articles are reviewed carefully before publication. We check the accuracy of
                  information, references, wording, and overall clarity.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  We focus on presenting information clearly without adding unnecessary opinions or
                  unsupported claims.
                </p>
              </div>

              {/* Islamic Content */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  4. Islamic Content Guidelines
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Islamic topics are handled with respect and care. We rely on authentic sources and
                  avoid presenting personal opinions as religious rulings.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  When differences exist among scholars, we try to mention them fairly and encourage
                  readers to consult qualified scholars for personal matters.
                </p>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  5. Updates and Corrections
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Information can change over time. We regularly review our content and update
                  articles when new or more accurate information becomes available.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  If a mistake is found, we appreciate feedback from our readers. We will review the
                  issue and make corrections when needed.
                </p>
              </div>

              {/* AI and Writing */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  6. Writing and Content Quality
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Our priority is accuracy, usefulness, and clarity. Content is written to help
                  readers understand important information easily while maintaining respect for
                  Islamic teachings.
                </p>
              </div>

              {/* Independence */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  7. Editorial Independence
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Our content decisions are based on usefulness and accuracy. We do not publish
                  information simply because someone requests it or promotes a service.
                </p>
              </div>

              {/* Contact */}
              <div className="rounded-brand border border-border bg-section p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-primary sm:text-xl">Help Us Improve</h2>

                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  If you have suggestions, find an error, or believe an article needs improvement,
                  contact us at{' '}
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
