'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const guideSections = [
  {
    id: 'hajj',
    title: 'Hajj',
    description:
      'Master every mandatory and Sunnah rite from Ihram to Tawaf al-Wida with complete clarity and confidence.',
    href: '/hajj',
    cta: 'Explore Hajj Guide',
    bullets: ['Ihram & Miqat', 'Mina, Arafat & Muzdalifah', 'Rami Ritual', 'Farewell Tawaf'],
  },
  {
    id: 'umrah',
    title: 'Umrah',
    description: 'Perform Umrah confidently through clear, authentic, step-by-step guidance.',
    href: '/umrah',
    cta: 'Explore Umrah Guide',
    bullets: ['Ihram', 'Tawaf', 'Sa’i', 'Halq & Taqsir'],
  },
  {
    id: 'ziyarat',
    title: 'Ziyarat',
    description:
      'Discover the blessed places of Makkah and Madinah with historical and spiritual context.',
    href: '/ziyarat',
    cta: 'Explore Ziyarat',
    bullets: ['Makkah Ziyarat', 'Madinah Ziyarat', 'Historical Places', 'Masjid al-Haram & Quba'],
  },
  {
    id: 'guides',
    title: 'Guides',
    description:
      'Access essential supplications, travel tips, and comprehensive preparation tools.',
    href: '/guides',
    cta: 'Explore Guides',
    bullets: [
      'Duas & Supplications',
      'Travel Guide',
      'Preparation Checklist',
      'Step-by-step Itineraries',
    ],
  },
  {
    id: 'planning',
    title: 'Planning',
    description: 'Organize every detail of your sacred pilgrimage from start to finish with ease.',
    href: '/planning',
    cta: 'Start Planning',
    bullets: [
      'Itinerary Planner',
      'Booking Checklist',
      'Packing Essentials',
      'Flight & Hotel Tips',
    ],
  },
]

export function ModernStickyScrollGuide() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const rightScrollRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = rightScrollRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            if (!isNaN(index)) {
              setActiveIndex(index)
            }
          }
        })
      },
      {
        root: container,
        threshold: 0.5,
      },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const rightContainer = rightScrollRef.current
    if (!section || !rightContainer) return

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return

      const rect = section.getBoundingClientRect()
      const isSectionInView = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (!isSectionInView) return

      const { scrollTop, scrollHeight, clientHeight } = rightContainer
      const isAtTop = scrollTop <= 0
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 2

      if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
        e.preventDefault()
        rightContainer.scrollTop += e.deltaY
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel as EventListener)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-section-background py-16 lg:h-screen lg:py-0 lg:flex lg:items-center"
    >
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Main Wrapper with Green Border around the total section */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-brand bg-section-background p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[45%_55%] lg:items-center lg:h-[76vh]">
            {/* ================================================= */}
            {/* LEFT PANEL (Fixed, Clean, Minimalist, Brand Colors)  */}
            {/* ================================================= */}
            <div className="flex flex-col justify-center lg:h-full lg:py-8">
              <span className="inline-flex w-fit rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Journey Roadmap
              </span>

              {/* Enforced Brand Green via inline style to bypass global CSS conflicts */}
              <h2
                style={{ color: 'var(--brand)' }}
                className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Learn Every Step Before You Travel
              </h2>

              <div
                className="mt-3 h-0.5 w-16 bg-accent/60 rounded-full lg:mx-0"
                aria-hidden="true"
              />

              <p className="mt-4 text-base leading-7 text-secondary">
                Everything is organized into simple navigation modules so you know exactly what to
                explore for your pilgrimage.
              </p>

              {/* Active Anchor Section */}
              <div className="mt-8 border-t border-border/80 pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Active Module — {String(activeIndex + 1).padStart(2, '0')}
                </span>

                <h3
                  style={{ color: 'var(--brand)' }}
                  className="mt-2 font-heading text-2xl font-bold"
                >
                  {guideSections[activeIndex].title}
                </h3>

                {/* Progress Bar (Accent Gold) */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-brand">
                    <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                    <span className="text-secondary">
                      {String(guideSections.length).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
                      style={{
                        width: `${((activeIndex + 1) / guideSections.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* CTA Button (Brand Green / Hover Brand Hover) */}
                <div className="mt-6">
                  <Link
                    href={guideSections[activeIndex].href}
                    className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-xs font-semibold text-white transition-all hover:bg-brand-hover shadow-sm"
                  >
                    {guideSections[activeIndex].cta}
                  </Link>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT PANEL (Bordered Container & Scrollable Cards)  */}
            {/* ================================================= */}
            <div
              ref={rightScrollRef}
              className="relative rounded-3xl border border-border bg-white p-4 shadow-sm lg:h-full lg:overflow-y-auto lg:p-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="space-y-5 pb-6">
                {guideSections.map((section, index) => {
                  const active = activeIndex === index
                  const isEven = index % 2 === 0

                  return (
                    <div
                      key={section.id}
                      data-index={index}
                      ref={(el) => {
                        cardsRef.current[index] = el
                      }}
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        bg-white
                        p-5
                        transition-all
                        duration-500
                        max-w-md
                        ${isEven ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'}
                        ${
                          active
                            ? 'border-accent shadow-md scale-[1.01]'
                            : 'border-border/60 hover:border-brand/30 hover:shadow-sm'
                        }
                      `}
                    >
                      {/* Top Accent Line (Gold) */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-accent" />

                      {/* Title */}
                      <h3
                        style={{ color: 'var(--brand)' }}
                        className="font-heading text-lg font-bold tracking-tight"
                      >
                        {section.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-xs leading-relaxed text-secondary">
                        {section.description}
                      </p>

                      {/* Compact Bullet List */}
                      <ul className="mt-3.5 grid gap-2 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">
                              ✓
                            </span>
                            <span className="text-xs leading-5 text-primary">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Card Footer */}
                      <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-3.5 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-[11px] text-secondary">Explore module overview</span>

                        <Link
                          href={section.href}
                          className="inline-flex items-center justify-center rounded-full bg-brand px-4.5 py-2 text-[11px] font-semibold text-white transition-all hover:bg-brand-hover"
                        >
                          Open Guide
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
