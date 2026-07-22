import Link from 'next/link'

export function JourneyCTA() {
  return (
    <section className="bg-accent-light px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          Let us guide you with our knowledge
        </h3>

        <p className="mt-6 text-lg leading-8 text-secondary">
          We are here to ensure your journey is prepared, authentic, and peaceful. Join our
          community of pilgrims and gain access to scholar-verified guides and practical resources.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/preparation"
            className="rounded-brand bg-brand px-8 py-4 font-semibold text-white shadow-brand transition-all duration-200 hover:bg-brand-hover"
          >
            Start Your Journey
          </Link>

          <Link
            href="/guides"
            className="rounded-brand border border-border px-8 py-4 font-semibold text-primary transition-all duration-200 hover:border-brand/30 hover:bg-section hover:text-brand"
          >
            View All Guides
          </Link>
        </div>
      </div>
    </section>
  )
}
