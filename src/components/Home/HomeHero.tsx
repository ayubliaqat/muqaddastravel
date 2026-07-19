import Image from 'next/image'
import Link from 'next/link'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center mb-4 overflow-hidden">
      <Image
        src="/images/hero-masjid-al-haram.png"
        alt="Pilgrims performing tawaf around the Kaaba at Masjid al-Haram"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, var(--background) 0%, var(--background) 32%, rgba(255,255,255,0.55) 55%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl">
          <h1 className="text-4xl leading-tight text-primary md:text-5xl">
            Everything you need to prepare for Hajj and Umrah
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-secondary">
            Step-by-step guides, checklists and duas, written clearly for first-time pilgrims
            travelling from the UK, USA and Canada. Every article is sourced from the Qur&apos;an
            and authentic Hadith.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/hajj-guide"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Start with the Hajj guide
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 7H12M12 7L8 3M12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/umrah-guide"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-brand hover:text-brand"
            >
              Read the Umrah guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
