export function JourneyCTA() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Using --text-primary for the heading */}
        <h3 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          Let us guide you with our knowledge
        </h3>

        {/* Using --text-secondary for the body text */}
        <p className="mt-6 text-lg leading-8 text-secondary">
          We are here to ensure your journey is prepared, authentic, and peaceful. Join our
          community of pilgrims and gain access to scholar-verified guides and practical resources.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Using --brand for primary background */}
          <button className="rounded-[--radius-md] bg-brand px-8 py-4 font-semibold text-white transition-all hover:bg-brand-hover shadow-soft">
            Start Your Journey
          </button>

          {/* Using --border and --text-primary for secondary button */}
          <button className="rounded-[--radius-md] border border-border px-8 py-4 font-semibold text-primary transition-all hover:bg-section">
            View All Guides
          </button>
        </div>
      </div>
    </section>
  )
}
