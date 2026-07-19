const highlights = [
  {
    title: 'Verified by scholars',
    description: 'Every guide is checked for accuracy before it is published.',
  },
  {
    title: "Qur'an and Hadith sourced",
    description: 'Every claim is backed by a clear, cited reference.',
  },
  {
    title: 'Written for beginners',
    description: 'Clear language, no jargon, nothing assumed.',
  },
]

export function TrustHighlights() {
  return (
    <section className="bg-section py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-section">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M9 1.5L11.5 6.2L16.5 7L13 10.7L13.8 15.5L9 13.2L4.2 15.5L5 10.7L1.5 7L6.5 6.2L9 1.5Z"
                    fill="var(--accent-gold)"
                  />
                </svg>
              </div>

              <p className="mt-4 text-base font-medium text-primary">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
