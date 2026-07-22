import Link from 'next/link'
import { footerExploreNav } from '@/constants/navigation'

const categoryMeta: Record<string, { icon: string; description: string }> = {
  Hajj: { icon: '🕋', description: 'Complete step-by-step guide to Hajj' },
  Umrah: { icon: '🕌', description: 'Everything you need to know for Umrah' },
  Ziyarat: { icon: '🏛️', description: 'Visit the blessed sites in Makkah & Madinah' },
  Duas: { icon: '🤲', description: 'Duas for every moment of your journey' },
  'Travel Guide': { icon: '✈️', description: 'Visas, flights, hotels & transportation tips' },
  Preparation: { icon: '🧳', description: 'Physical, spiritual & document preparation' },
  'Planning & Timing': { icon: '📅', description: 'Best times, dates & Islamic calendar' },
}

const defaultMeta = { icon: '📖', description: 'Guides and tips for your journey' }

export function CategoryGrid() {
  return (
    <section id="explore" className="section-padding bg-accent-light">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Explore by Category</h2>
          <div className="mx-auto mt-4 h-1.5 w-1.5 rounded-full bg-brand" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-7">
          {footerExploreNav.map((item) => {
            const meta = categoryMeta[item.label] ?? defaultMeta

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex h-full flex-col items-center overflow-hidden rounded-brand border border-border bg-card px-4 py-6 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand/25 hover:shadow-md"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-light/0 to-brand-light/0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-60 group-hover:from-brand-light/40 group-hover:to-transparent" />

                <span
                  aria-hidden="true"
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light text-xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-brand-light group-hover:text-brand"
                >
                  {meta.icon}
                </span>

                <h3 className="relative mt-3 text-sm font-semibold text-primary">{item.label}</h3>

                <p className="relative mt-2 line-clamp-2 text-xs leading-relaxed text-secondary">
                  {meta.description}
                </p>

                <span className="relative mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-brand">
                  Explore
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 ease-out group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
