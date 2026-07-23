'use client'

import { ClipboardList, Plane, Backpack } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  {
    title: 'Hajj Guide',
    description: 'Everything you need to know about Hajj rituals step by step.',
    href: '/hajj',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <rect x="5" y="7" width="14" height="13" rx="1" fill="#1D2939" />
        <path d="M5 11h14M9 7v13M15 7v13" stroke="#CBA35C" strokeWidth="0.75" />
        <path d="M9.5 14h5v6h-5z" fill="#CBA35C" opacity="0.85" />
      </svg>
    ),
  },
  {
    title: 'Umrah Guide',
    description: 'Learn Umrah rituals with clarity and confidence before you travel.',
    href: '/umrah',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M12 3c2.5 2 3.5 4.5 3.5 6.5H8.5C8.5 7.5 9.5 5 12 3z" fill="currentColor" />
        <rect x="7" y="9.5" width="10" height="8" rx="0.5" fill="currentColor" />
        <path d="M9 17.5h6v3H9z" fill="currentColor" />
        <circle cx="12" cy="2" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Planning Tools',
    description: 'Checklists, packing lists, timelines and practical travel tools.',
    href: '/planning',
    icon: <ClipboardList className="h-5 w-5" strokeWidth={2} />,
  },
  {
    title: 'Duas & Zikr',
    description: 'Authentic duas for every moment of your sacred journey.',
    href: '/duas',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 4c-.6 3-1.2 5-3 6.5-1.3 1.1-2.8 1.2-3.5.6-.6-.6-.3-1.8.6-2.6.9-.8 1.4-1.8 1.4-3.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 4c.6 3 1.2 5 3 6.5 1.3 1.1 2.8 1.2 3.5.6.6-.6.3-1.8-.6-2.6-.9-.8-1.4-1.8-1.4-3.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9.5 12c0 3 .8 5 2.5 7 1.7-2 2.5-4 2.5-7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Ziyarat Sites',
    description: 'Blessed and historical places to visit in Makkah and Madinah.',
    href: '/ziyarat',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M12 3l2 5h5l-4 3.5 1.5 5.5-4.5-3.5-4.5 3.5 1.5-5.5-4-3.5h5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Travel Guide',
    description: 'Visas, flights, and hotels — everything to plan before you fly.',
    href: '/travel-guide',
    icon: <Plane className="h-5 w-5" strokeWidth={2} />,
  },
  {
    title: 'Preparation',
    description: 'Physical and spiritual preparation before your journey begins.',
    href: '/preparation',
    icon: <Backpack className="h-5 w-5" strokeWidth={2} />,
  },
]

const INITIAL_COUNT = 4

export function FeatureHighlights() {
  const [expanded, setExpanded] = useState(false)
  const visibleFeatures = expanded ? features : features.slice(0, INITIAL_COUNT)
  const hasMore = features.length > INITIAL_COUNT

  return (
    <section className="bg-background py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visibleFeatures.map((feature) => (
            <div
              key={feature.href}
              className="group flex flex-col rounded-tr-[var(--radius-lg)] rounded-bl-[var(--radius-lg)] rounded-tl-[var(--radius-xs)] rounded-br-[var(--radius-xs)] border border-border bg-card p-4 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand"
              >
                {feature.icon}
              </div>

              <h3 className="mt-3 text-sm font-semibold text-primary">{feature.title}</h3>
              <p className="mt-1 text-xs leading-relaxed">{feature.description}</p>

              <Link
                href={feature.href}
                className="mt-3 inline-flex w-fit items-center justify-center gap-1.5 self-start rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Explore
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-brand backdrop-blur-md transition-all duration-200 hover:border-brand hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              {expanded ? 'Show Less' : 'View All'}
              <span
                aria-hidden="true"
                className={`transition-transform duration-200 ${expanded ? '-rotate-90' : 'rotate-90'}`}
              >
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
