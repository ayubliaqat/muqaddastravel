import Link from 'next/link'
import { ClipboardList } from 'lucide-react'
import { VerseHighlightCard } from './VerseHighlightCard'

export function HomeHero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center overflow-hidden py-16 lg:min-h-[90vh] lg:py-24"
      style={{ backgroundColor: 'var(--brand)' }}
    >
      {/* Background Decorative Glows */}

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          {/* Top Arabic Bismillah Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-sm font-medium tracking-wide shadow-sm mb-8">
            <span className="text-[var(--accent)]">✦</span>
            <span className="font-heading text-white" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="text-[var(--accent)]">✦</span>
          </div>

          {/* Large Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-heading">
            Guidance for <br />
            <span className="text-[var(--accent)]">Hajj &amp; Umrah</span>
          </h1>

          {/* Description — Fixed from text-white/85 to solid text-white */}
          <p className="mt-6 text-lg sm:text-xl text-white max-w-2xl leading-relaxed font-sans">
            Step-by-step guides, practical checklists, authentic duas and trusted advice for your
            sacred journey.
          </p>

          {/* Primary & Secondary CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-[var(--brand)] px-8 py-4 text-sm font-semibold shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Guides</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/planning"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <ClipboardList size={16} className="text-[var(--accent)]" />
              <span>Planning Checklist</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
