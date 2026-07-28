'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const features = [
  {
    title: 'Hajj Guide',
    description: 'Everything you need to know about Hajj rituals step by step.',
    href: '/hajj',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="kaabaGrad"
            x1="4"
            y1="7"
            x2="20"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient
            id="goldBand"
            x1="4"
            y1="11.5"
            x2="20"
            y2="11.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#E6C57A" />
            <stop offset="50%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#CBA35C" />
          </linearGradient>
          <filter id="glowHajj" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path
          d="M4 8.5C4 7.67157 4.67157 7 5.5 7H18.5C19.3284 7 20 7.67157 20 8.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.67157 20 4 19.3284 4 18.5V8.5Z"
          fill="url(#kaabaGrad)"
          stroke="#334155"
          strokeWidth="0.75"
        />
        <path
          d="M4 11.5H20"
          stroke="url(#goldBand)"
          strokeWidth="1.8"
          strokeLinecap="round"
          filter="url(#glowHajj)"
        />
        <path d="M9 11.5V20" stroke="url(#goldBand)" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M8 7V5.5C8 4.67157 8.67157 4 9.5 4H14.5C15.3284 4 16 4.67157 16 5.5V7"
          fill="#334155"
          stroke="#E6C57A"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    title: 'Umrah Guide',
    description: 'Learn Umrah rituals with clarity and confidence before travel.',
    href: '/umrah',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="umrahBox"
            x1="6"
            y1="8.5"
            x2="18"
            y2="20.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0F6E56" />
            <stop offset="100%" stopColor="#0A4D3D" />
          </linearGradient>
          <linearGradient
            id="crescentGrad"
            x1="10"
            y1="3"
            x2="17"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#CBA35C" />
          </linearGradient>
        </defs>
        <path
          d="M6 10C6 9.17157 6.67157 8.5 7.5 8.5H16.5C17.3284 8.5 18 9.17157 18 10V19C18 19.8284 17.3284 20.5 16.5 20.5H7.5C6.67157 20.5 6 19.8284 6 19V10Z"
          fill="url(#umrahBox)"
          stroke="#0D5C47"
          strokeWidth="0.75"
        />
        <path
          d="M6 13.5H18"
          stroke="#CBA35C"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M10 13.5V20.5"
          stroke="#CBA35C"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M14 3.5C12.5 3.5 11 4.5 10.5 6C12.5 6.2 14 7.7 14.2 9.7C15.7 9.2 16.7 7.7 16.7 6.2C16.7 4.7 15.5 3.5 14 3.5Z"
          fill="url(#crescentGrad)"
        />
      </svg>
    ),
  },
  {
    title: 'Planning Tools',
    description: 'Checklists, packing lists, timelines and practical tools.',
    href: '/planning',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="boardGrad"
            x1="5"
            y1="5"
            x2="19"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          width="14"
          height="16"
          rx="2"
          fill="url(#boardGrad)"
          stroke="#CBD5E1"
          strokeWidth="1.2"
        />
        <path
          d="M9 3.5H15C15.5523 3.5 16 3.94772 16 4.5V5H8V4.5C8 3.94772 8.44772 3.5 9 3.5Z"
          fill="#0F6E56"
        />
        <path
          d="M8.5 11L10.5 13L15.5 9"
          stroke="#0F6E56"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 16H14.5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Duas & Zikr',
    description: 'Authentic duas for every moment of your sacred journey.',
    href: '/duas',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 14.5V11C4 8.5 6 7 8 7C9.2 7 10.3 7.8 10.8 9.1C11.3 7.8 12.4 7 13.6 7C15.6 7 17.6 8.5 17.6 11V14.5"
          stroke="#0F6E56"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 14.5C4 17.5 6.5 20 10.8 20H13.6C17.6 20 20 17.5 20 14.5"
          stroke="#0F6E56"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="4.5" r="1.5" fill="#CBA35C" />
        <path d="M8.5 4.8L9.5 6" stroke="#CBA35C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 4.8L14.5 6" stroke="#CBA35C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Ziyarat Sites',
    description: 'Blessed and historical places to visit in Makkah and Madinah.',
    href: '/ziyarat',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pinGrad" x1="5" y1="3" x2="19" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F6E56" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
        </defs>
        <path
          d="M12 3C8.13401 3 5 6.13401 5 10C5 15 12 21 12 21C12 21 19 15 19 10C19 6.13401 15.866 3 12 3Z"
          fill="url(#pinGrad)"
          stroke="#047857"
          strokeWidth="0.75"
        />
        <path d="M9 14H15" stroke="#CBA35C" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M9.5 14V11.5C9.5 10.1193 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5V14"
          fill="#FFFFFF"
          stroke="#CBA35C"
          strokeWidth="1.2"
        />
        <circle cx="12" cy="7" r="1" fill="#FDE68A" />
      </svg>
    ),
  },
  {
    title: 'Travel Guide',
    description: 'Visas, flights, and hotels — everything before you fly.',
    href: '/travel-guide',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 12H20.5"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        <path
          d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.5 9.5L9.5 14.5L5.5 13.5L8.5 11.5L12 6.5L13.5 8L14.5 9.5Z"
          fill="#0F6E56"
          stroke="#CBA35C"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Preparation',
    description: 'Physical and spiritual preparation before your journey begins.',
    href: '/preparation',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bagGrad" x1="6" y1="7" x2="18" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F6E56" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
        </defs>
        <rect
          x="6"
          y="7"
          width="12"
          height="14"
          rx="2"
          fill="url(#bagGrad)"
          stroke="#047857"
          strokeWidth="0.75"
        />
        <path
          d="M9 7V5.5C9 4.67157 9.67157 4 10.5 4H13.5C14.3284 4 15 4.67157 15 5.5V7"
          stroke="#CBA35C"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M9 11.5H15" stroke="#CBA35C" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M9 15.5H13"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    ),
  },
]

const INITIAL_COUNT = 4

export function FeatureHighlights() {
  const [expanded, setExpanded] = useState(false)
  const visibleFeatures = expanded ? features : features.slice(0, INITIAL_COUNT)
  const hasMore = features.length > INITIAL_COUNT

  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sectionEl = sectionRef.current
    const containerEl = scrollContainerRef.current
    if (!sectionEl || !containerEl) return

    let touchStartY = 0

    const handleWheel = (e: WheelEvent) => {
      const rect = sectionEl.getBoundingClientRect()

      // Check if section occupies or crosses the viewport view actively
      const isVisible = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (!isVisible) return

      const { scrollTop, scrollHeight, clientHeight } = containerEl
      const isScrollable = scrollHeight > clientHeight

      if (!isScrollable) return

      const deltaY = e.deltaY
      const atBottom = scrollTop + clientHeight >= scrollHeight - 2
      const atTop = scrollTop <= 0

      // If scrolling down and haven't reached the bottom, or scrolling up and haven't reached the top
      if ((deltaY > 0 && !atBottom) || (deltaY < 0 && !atTop)) {
        e.preventDefault()
        containerEl.scrollTop += deltaY
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const rect = sectionEl.getBoundingClientRect()
      const isVisible = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (!isVisible) return

      const { scrollTop, scrollHeight, clientHeight } = containerEl
      const isScrollable = scrollHeight > clientHeight

      if (!isScrollable) return

      const currentY = e.touches[0].clientY
      const touchDeltaY = touchStartY - currentY
      touchStartY = currentY

      const atBottom = scrollTop + clientHeight >= scrollHeight - 2
      const atTop = scrollTop <= 0

      if ((touchDeltaY > 0 && !atBottom) || (touchDeltaY < 0 && !atTop)) {
        e.preventDefault()
        containerEl.scrollTop += touchDeltaY
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const rect = sectionEl.getBoundingClientRect()
      const isVisible = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (!isVisible) return

      const { scrollTop, scrollHeight, clientHeight } = containerEl
      const isScrollable = scrollHeight > clientHeight

      if (!isScrollable) return

      const step = 60
      const atBottom = scrollTop + clientHeight >= scrollHeight - 2
      const atTop = scrollTop <= 0

      if (['ArrowDown', 'PageDown', ' '].includes(e.key) && !atBottom) {
        e.preventDefault()
        containerEl.scrollTop += step
      } else if (['ArrowUp', 'PageUp'].includes(e.key) && !atTop) {
        e.preventDefault()
        containerEl.scrollTop -= step
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [expanded])

  return (
    <section
      ref={sectionRef}
      className="relative bg-section-background py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Description */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Explore Features
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-accent font-heading">
            Your Complete Spiritual Companion
          </h2>
          <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
            Discover step-by-step rituals, interactive planning checklists, and essential guides
            tailored for your sacred pilgrimage.
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="max-h-[75vh] overflow-y-auto pr-1 overscroll-contain"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {visibleFeatures.map((feature) => (
              <div
                key={feature.href}
                className="group relative flex flex-col justify-between rounded-[24px] border border-border/60 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 rounded-t-[24px] bg-accent"
                  aria-hidden="true"
                />

                <div>
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-sm ring-1 ring-accent/30 transition-transform duration-200 group-hover:scale-105"
                  >
                    {feature.icon}
                  </div>

                  <h3 className="mt-3.5 text-sm sm:text-base font-bold tracking-tight text-primary font-heading">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-secondary line-clamp-2">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40">
                  <Link
                    href={feature.href}
                    className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Explore Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-accent shadow-sm transition-all duration-200 hover:border-accent hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span>{expanded ? 'Show Less' : 'View All Features'}</span>
              <span
                aria-hidden="true"
                className={`transition-transform duration-200 text-[10px] ${expanded ? 'rotate-180' : 'rotate-0'}`}
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
