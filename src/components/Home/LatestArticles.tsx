'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const guides = [
  {
    tag: 'HAJJ',
    image: '/images/guide-hajj.png',
    title: 'Step-by-Step Hajj Guide',
    description: 'A complete guide from Ihram to Tawaf al-Wida',
    href: '/hajj/step-by-step-guide',
  },
  {
    tag: 'UMRAH',
    image: '/images/guide-umrah.png',
    title: 'How to Perform Umrah',
    description: 'Learn the step-by-step process of Umrah',
    href: '/umrah/how-to-perform',
  },
  {
    tag: 'PLANNING',
    image: '/images/guide-planning.png',
    title: 'Best Time to Perform Umrah',
    description: 'Find the best months for a comfortable journey',
    href: '/planning/best-time-for-umrah',
  },
  {
    tag: 'TRAVEL GUIDE',
    image: '/images/guide-packing.png',
    title: 'Umrah Packing List',
    description: 'Essential items you should never forget',
    href: '/travel-guide/umrah-packing-list',
  },
  {
    tag: 'DUAS',
    image: '/images/guide-duas.png',
    title: 'Essential Duas for Travel',
    description: 'Duas to recite before and during your journey',
    href: '/duas/travel-duas',
  },
  {
    tag: 'ZIYARAT',
    image: '/images/guide-ziyarat.png',
    title: 'Places to Visit in Madinah',
    description: 'A guide to the blessed sites around the Prophet\u2019s Mosque',
    href: '/ziyarat/madinah-sites',
  },
]

export function PopularGuides() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-guide-card]')
    const cardWidth = card ? card.offsetWidth + 24 : 320
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Heading + Arrows */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Popular Guides</h2>
            <div className="mt-4 h-1.5 w-1.5 rounded-full bg-brand" />
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Previous guides"
              onClick={() => scrollByCard('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 ease-out hover:border-brand/30 hover:bg-brand-light hover:text-brand"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next guides"
              onClick={() => scrollByCard('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 ease-out hover:border-brand/30 hover:bg-brand-light hover:text-brand"
            >
              ›
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollerRef}
          className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              data-guide-card
              className="card group w-[78%] shrink-0 snap-start overflow-hidden sm:w-[46%] lg:w-[calc(25%-1.125rem)]"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 46vw, 78vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                  {guide.tag}
                </span>
              </div>

              <div className="px-5 py-5">
                <h3 className="text-base font-semibold leading-snug text-primary">{guide.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-secondary">{guide.description}</p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read More
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
