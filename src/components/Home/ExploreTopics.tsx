'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const posts = [
  {
    tag: 'Hajj',
    heading: 'Hajj Guide',
    image: '/images/blog-hajj-guide.jpg',
    href: '/blog/hajj-step-by-step-guide',
  },
  {
    tag: 'Umrah',
    heading: 'Umrah Guide',
    image: '/images/blog-umrah-guide.jpg',
    href: '/blog/how-to-perform-umrah',
  },
  {
    tag: 'Planning',
    heading: 'Planning Guide',
    image: '/images/blog-best-time.jpg',
    href: '/blog/best-time-to-perform-umrah',
  },
  {
    tag: 'Preparation',
    heading: 'Packing Guide',
    image: '/images/blog-packing-list.jpg',
    href: '/blog/umrah-packing-list',
  },
  {
    tag: 'Duas',
    heading: 'Duas Guide',
    image: '/images/blog-duas.jpg',
    href: '/blog/essential-travel-duas',
  },
  {
    tag: 'Ziyarat',
    heading: 'Ziyarat Guide',
    image: '/images/blog-ziyarat.jpg',
    href: '/blog/madinah-ziyarat-sites',
  },
  {
    tag: 'Health',
    heading: 'Health Guide',
    image: '/images/blog-health.jpg',
    href: '/blog/staying-healthy-during-hajj',
  },
  {
    tag: 'Etiquette',
    heading: 'Etiquette Guide',
    image: '/images/blog-etiquette.jpg',
    href: '/blog/pilgrim-etiquette-guide',
  },
  {
    tag: 'Travel',
    heading: 'Travel Guide',
    image: '/images/blog-travel-guide.jpg',
    href: '/blog/hajj-umrah-travel-guide',
  },
  {
    tag: 'Preparation',
    heading: 'Spiritual Prep Guide',
    image: '/images/blog-spiritual-prep.jpg',
    href: '/blog/physical-spiritual-preparation',
  },
]

export default function ExploreTopics() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    const element = scrollerRef.current

    if (!element) return

    const card = element.querySelector<HTMLElement>('[data-blog-card]')
    const cardWidth = card ? card.offsetWidth + 20 : 300

    element.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-background py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="badge">Latest Blogs</span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
            Knowledge for Every Step of Your Journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base">
            Authentic guides for Hajj, Umrah, and everything in between — written to help you
            prepare with clarity and confidence.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 hidden justify-end gap-3 sm:flex">
          <button
            type="button"
            aria-label="Previous posts"
            onClick={() => scrollByCard('left')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary backdrop-blur-md transition duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next posts"
            onClick={() => scrollByCard('right')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary backdrop-blur-md transition duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            ›
          </button>
        </div>

        {/* Blog Cards */}
        <div
          ref={scrollerRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3"
        >
          {posts.map((post, index) => (
            <Link
              key={`${post.href}-${index}`}
              href={post.href}
              data-blog-card
              className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-[46%] lg:w-[calc(25%-15px)]"
            >
              <div className="relative h-40 w-full overflow-hidden sm:h-44 lg:h-48">
                <Image
                  src={post.image}
                  alt={post.heading}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 46vw, 82vw"
                  className="object-cover transition duration-200 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
                  {post.tag}
                </span>
              </div>

              <div className="flex flex-col p-4 pb-5 sm:p-5 sm:pb-6">
                <h3 className="text-base font-semibold leading-snug text-primary">
                  {post.heading}
                </h3>

                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-light px-4 py-2 text-xs font-semibold text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                  Read Guide
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
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
