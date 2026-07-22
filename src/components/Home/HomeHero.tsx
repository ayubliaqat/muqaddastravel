import Image from 'next/image'
import Link from 'next/link'

const trustPoints = [
  { icon: '🛡️', label: 'Authentic & Reliable Content' },
  { icon: '📄', label: 'Step-by-Step Guides' },
  { icon: '📋', label: 'Practical Tips & Checklists' },
  { icon: '🤝', label: 'For First Time & Returning Pilgrims' },
]

export function HomeHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden py-10 sm:py-14 md:min-h-[90vh] md:py-16">
      <Image
        src="/images/hero-masjid-al-haram.png"
        alt="Pilgrims performing tawaf around the Kaaba at Masjid al-Haram"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, var(--background) 0%, var(--background) 35%, rgba(252,252,249,.94) 58%, rgba(252,252,249,.45) 82%, transparent 100%)',
        }}
      />

      {/* Islamic Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/islamic-pattern.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '260px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="badge">
            <span aria-hidden="true"></span>
            Your Journey. Our Guidance. Allah&apos;s Blessing.
          </span>

          {/* Heading */}
          <h1 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            Guiding Your Journey <br />
            to <span className="text-brand">Hajj &amp; Umrah</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
            Everything you need to know for a spiritually fulfilling and well-prepared journey to
            the House of Allah.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#explore"
              className="inline-flex items-center justify-center gap-2 rounded-brand bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-200 hover:bg-brand-hover"
            >
              Explore Guides
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="#preparing"
              className="inline-flex items-center justify-center gap-2 rounded-brand border border-border bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-200 hover:border-brand/40 hover:text-brand"
            >
              Start Preparing
            </Link>
          </div>

          {/* Trust Points */}
          {/* Trust Points */}
          <div className="mt-12 md:mt-16">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="group rounded-2xl border border-border/60 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-xl transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                    <span aria-hidden="true">{point.icon}</span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold leading-snug text-primary">
                    {point.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
