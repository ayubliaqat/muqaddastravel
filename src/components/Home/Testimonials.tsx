'use client'

import { useRef, useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Tariq Mahmood',
    location: 'Karachi, Pakistan',
    pilgrimage: 'Hajj 2025',
    rating: 5,
    quote:
      'The step-by-step guidance provided in these modules made my Hajj journey remarkably smooth. Every ritual from Ihram to Rami was explained with absolute clarity and authenticity.',
  },
  {
    id: 2,
    name: 'Dr. Ahmed Raza',
    location: 'Lahore, Pakistan',
    pilgrimage: 'Umrah & Ziyarat',
    rating: 5,
    quote:
      'An exceptional resource for anyone planning a spiritual journey. The historical context given for Ziyarat locations deeply enriched our understanding and appreciation.',
  },
  {
    id: 3,
    name: 'Zainab Siddiqui',
    location: 'Islamabad, Pakistan',
    pilgrimage: 'Umrah 2026',
    rating: 5,
    quote:
      'The preparation checklists and packing guides were absolute lifesavers. Having reliable, Quran and Hadith-based references in one place gave me total confidence.',
  },
  {
    id: 4,
    name: 'Muhammad Usman',
    location: 'Faisalabad, Pakistan',
    pilgrimage: 'Hajj 2024',
    rating: 5,
    quote:
      'From organizing my travel itinerary to understanding the exact duties at Mina and Arafat, this platform was like having a personal scholar right by my side.',
  },
  {
    id: 5,
    name: 'Ayesha Khan',
    location: 'Rawalpindi, Pakistan',
    pilgrimage: 'Umrah 2025',
    rating: 5,
    quote:
      'I felt completely unprepared until I found these resources. The Dua lists and step-by-step Tawaf guides made the entire pilgrimage peaceful and spiritually uplifting.',
  },
  {
    id: 6,
    name: 'Bilal Farooq',
    location: 'Multan, Pakistan',
    pilgrimage: 'Hajj 2025',
    rating: 5,
    quote:
      'Incredible detail and layout. The minimalist design and dark mode options make reading through the rules and requirements effortless during late-night study.',
  },
  {
    id: 7,
    name: 'Fatima Noor',
    location: 'Peshawar, Pakistan',
    pilgrimage: 'Ziyarat Trip',
    rating: 5,
    quote:
      'Visiting the holy sites in Makkah and Madinah was transformative, largely because we knew the history behind every mosque and landmark beforehand.',
  },
  {
    id: 8,
    name: 'Imran Akram',
    location: 'Sialkot, Pakistan',
    pilgrimage: 'Umrah 2026',
    rating: 5,
    quote:
      'An absolute masterpiece of a web guide. Clean navigation, verified references, and zero clutter. Recommended to all my friends and family planning to travel.',
  },
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const maxScroll = scrollWidth - clientWidth
      if (maxScroll > 0) {
        const percentage = scrollLeft / maxScroll
        const index = Math.round(percentage * (testimonials.length - 1))
        setActiveIndex(index)
      }
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 340 + 24 // card width + gap
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-section-background py-8 sm:py-6 lg:py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Pilgrim Testimonials
          </span>

          <h2
            style={{ color: 'var(--brand)' }}
            className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Trusted by Pilgrims Worldwide
          </h2>

          <div className="mx-auto mt-3 h-0.5 w-16 bg-accent/60 rounded-full" aria-hidden="true" />

          <p className="mt-4 text-base leading-7 text-secondary">
            Read genuine reflections from those who completed their sacred journey with our
            guidance.
          </p>
        </div>

        {/* Carousel Wrapper with Left & Right Side Absolute Buttons */}
        <div className="relative mt-14 px-2 sm:px-12">
          {/* Left Arrow Button (Strictly Left Side) */}
          <button
            onClick={handleScrollLeft}
            aria-label="Scroll left"
            className="absolute -left-1 sm:left-2 top-[46%] z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white text-secondary shadow-md transition-all hover:border-accent hover:bg-accent hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button (Strictly Right Side) */}
          <button
            onClick={handleScrollRight}
            aria-label="Scroll right"
            className="absolute -right-1 sm:right-2 top-[46%] z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white text-secondary shadow-md transition-all hover:border-accent hover:bg-accent hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Horizontal Row Scroll Container with 8 Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative flex min-w-[300px] sm:min-w-[340px] max-w-[340px] shrink-0 snap-start flex-col justify-between rounded-3xl border border-border/60 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/80 hover:shadow-md"
              >
                <div className="absolute right-6 top-6 text-accent/10">
                  <Quote className="h-10 w-10" />
                </div>

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="mt-4 text-xs font-medium leading-relaxed text-primary">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 border-t border-border/60 pt-4">
                  <h3 style={{ color: 'var(--brand)' }} className="font-heading text-sm font-bold">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-secondary mt-0.5">
                    {item.location} —{' '}
                    <span className="font-semibold text-accent">{item.pilgrimage}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dots Indicator List */}
          <div className="mt-8 flex justify-center items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  Math.abs(activeIndex - index) <= 0
                    ? 'w-8 bg-accent'
                    : 'w-2.5 bg-border hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
