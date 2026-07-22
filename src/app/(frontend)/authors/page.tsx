export default function AuthorsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-border bg-section">
        <div className="container-custom py-16 text-center sm:py-20">
          <span className="badge">Meet The Team</span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Authors
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
            Learn who creates, researches, and reviews the content published on MuqaddasTravel.
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
                  1. About Our Content Team
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  MuqaddasTravel content is created by researchers and writers who focus on making
                  Hajj, Umrah, and Islamic travel information easy to understand.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  Our team works on researching sources, organizing information, and presenting it
                  in a clear way for pilgrims.
                </p>
              </div>

              {/* Research Writers */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  2. Research and Writing Team
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Our writers prepare articles by studying trusted Islamic sources, official
                  information, and established educational resources.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  The goal of every article is to provide useful guidance while keeping the
                  information simple, accurate, and respectful.
                </p>
              </div>

              {/* Islamic Review */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  3. Islamic Content Review
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  Islamic content is prepared with care using Qur&apos;an references, authentic
                  Hadith sources, and scholarly guidance.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                  We aim to avoid unsupported claims and encourage readers to consult qualified
                  scholars for personal religious questions.
                </p>
              </div>

              {/* Author Pages */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  4. Individual Authors
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  As MuqaddasTravel grows, individual author profiles may be added to show the
                  background, expertise, and contributions of our writers and reviewers.
                </p>
              </div>

              {/* Transparency */}
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  5. Our Commitment
                </h2>

                <div className="mt-3 h-1 w-10 rounded-full bg-brand" />

                <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
                  We believe good information comes with responsibility. We continuously improve our
                  content, update references, and correct mistakes when they are identified.
                </p>
              </div>

              {/* Contact */}
              <div className="rounded-brand border border-border bg-section p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-primary sm:text-xl">Contact Our Team</h2>

                <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                  If you have questions about our authors, content, or want to report an issue,
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
