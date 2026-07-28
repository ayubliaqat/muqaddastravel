'use client'

import { Sparkles } from 'lucide-react'

const announcements = [
  {
    text: 'Essential Guides for Hajj & Umrah Preparation 2026',
    arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ',
  },
  {
    text: 'Step-by-Step Rituals & Authentic Duas Available Now',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً',
  },
  {
    text: 'Comprehensive Ziyarat Resources for Makkah & Madinah',
    arabic: 'السَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ',
  },
]

const marqueeItems = [...announcements, ...announcements, ...announcements]

export function AnnouncementBar() {
  return (
    <div
      aria-label="Site announcement"
      className="relative z-50 overflow-hidden border-b border-[#2A7D63] bg-[#1E6B52] text-white"
    >
      <p className="sr-only">
        Essential Hajj and Umrah announcements and authentic Islamic reminders.
      </p>

      <div className="container py-2.5">
        <div className="relative flex overflow-hidden">
          {/* Fade Left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#1E6B52] to-transparent"
          />

          {/* Fade Right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#1E6B52] to-transparent"
          />

          {/* Marquee */}
          <div className="marquee flex min-w-max shrink-0 items-center gap-12 whitespace-nowrap">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-8 text-xs font-medium tracking-wide sm:text-sm"
              >
                <span className="flex items-center gap-2 text-white/90 transition-colors duration-300 hover:text-white">
                  <Sparkles className="h-[18px] w-[18px] shrink-0 text-amber-300" strokeWidth={2} />
                  <span>{item.text}</span>
                </span>

                <span dir="rtl" className="font-heading text-sm tracking-normal text-amber-300/90">
                  {item.arabic}
                </span>

                <span aria-hidden="true" className="select-none text-white/30">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: marquee 50s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
