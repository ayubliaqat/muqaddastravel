'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const posts = [
  {
    tag: 'Hajj',
    title: 'A Complete Guide to Performing Hajj Step by Step',
    excerpt: 'From Ihram to Tawaf al-Wida — everything you need to know before you go.',
    image: '/images/blog-hajj-guide.jpg',
    date: 'Jul 18, 2026',
    readTime: '8 min read',
    href: '/blog/hajj-step-by-step-guide',
  },
  {
    tag: 'Umrah',
    title: 'How to Perform Umrah: A Beginner-Friendly Walkthrough',
    excerpt: 'Learn the step-by-step process of Umrah with clear, trusted explanations.',
    image: '/images/blog-umrah-guide.jpg',
    date: 'Jul 15, 2026',
    readTime: '6 min read',
    href: '/blog/how-to-perform-umrah',
  },
  {
    tag: 'Planning',
    title: 'Best Time to Perform Umrah This Year',
    excerpt: 'Find the best months for a comfortable, less crowded journey.',
    image: '/images/blog-best-time.jpg',
    date: 'Jul 12, 2026',
    readTime: '5 min read',
    href: '/blog/best-time-to-perform-umrah',
  },
  {
    tag: 'Preparation',
    title: 'The Ultimate Umrah Packing List',
    excerpt: 'Essential items you should never forget before departure.',
    image: '/images/blog-packing-list.jpg',
    date: 'Jul 9, 2026',
    readTime: '4 min read',
    href: '/blog/umrah-packing-list',
  },
  {
    tag: 'Duas',
    title: 'Essential Duas to Recite During Your Journey',
    excerpt: 'A collection of duas for every stage, from departure to Tawaf.',
    image: '/images/blog-duas.jpg',
    date: 'Jul 6, 2026',
    readTime: '7 min read',
    href: '/blog/essential-travel-duas',
  },
  {
    tag: 'Ziyarat',
    title: 'Places to Visit in Madinah Beyond the Masjid',
    excerpt: 'A guide to the historical and blessed sites around the Prophet’s Mosque.',
    image: '/images/blog-ziyarat.jpg',
    date: 'Jul 3, 2026',
    readTime: '6 min read',
    href: '/blog/madinah-ziyarat-sites',
  },
  {
    tag: 'Health',
    title: 'Staying Healthy During Hajj: Tips From Doctors',
    excerpt: 'Vaccinations, fitness, and precautions to take before you travel.',
    image: '/images/blog-health.jpg',
    date: 'Jun 29, 2026',
    readTime: '5 min read',
    href: '/blog/staying-healthy-during-hajj',
  },
  {
    tag: 'Etiquette',
    title: 'Manners and Etiquette Every Pilgrim Should Know',
    excerpt: 'What is expected of you in the Haramain, explained simply.',
    image: '/images/blog-etiquette.jpg',
    date: 'Jun 25, 2026',
    readTime: '4 min read',
    href: '/blog/pilgrim-etiquette-guide',
  },
  {
    tag: 'Travel',
    title: 'Visas, Flights & Hotels: A Complete Travel Guide',
    excerpt: 'Everything you need to book and organize before you fly.',
    image: '/images/blog-travel-guide.jpg',
    date: 'Jun 21, 2026',
    readTime: '9 min read',
    href: '/blog/hajj-umrah-travel-guide',
  },
  {
    tag: 'Preparation',
    title: 'Physical and Spiritual Preparation for Hajj',
    excerpt: 'How to prepare your body and heart before the journey begins.',
    image: '/images/blog-spiritual-prep.jpg',
    date: 'Jun 18, 2026',
    readTime: '6 min read',
    href: '/blog/physical-spiritual-preparation',
  },
]

export default function LatestBlogs() {
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
    <section className="bg-[#F8F7F3] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="badge">Latest Blogs</span>

          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Discover Knowledge for Your Journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-secondary sm:text-base">
            Fresh guides and articles, carefully written from authentic Islamic sources for Hajj,
            Umrah, and travel preparation.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 hidden justify-end gap-3 sm:flex">
          <button
            type="button"
            aria-label="Previous posts"
            onClick={() => scrollByCard('left')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary transition hover:border-brand hover:text-brand"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next posts"
            onClick={() => scrollByCard('right')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary transition hover:border-brand hover:text-brand"
          >
            ›
          </button>
        </div>

        {/* Blog Cards */}
        <div
          ref={scrollerRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3"
        >
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              data-blog-card
              className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[46%] lg:w-[calc(25%-15px)]"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 46vw, 82vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
                  {post.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-primary">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-secondary">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-3">
                  <span className="text-[11px] font-medium text-light">
                    {post.date} · {post.readTime}
                  </span>

                  <span className="text-sm font-semibold text-brand transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
