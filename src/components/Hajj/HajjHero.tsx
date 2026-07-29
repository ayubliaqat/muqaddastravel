// components/HajjHero.tsx
'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'

export default function HajjHero() {
  const [query, setQuery] = useState('')

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const trimmed = query.trim()

    if (trimmed) {
      window.location.href = `/hajj/search?q=${encodeURIComponent(trimmed)}`
    }
  }

  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-4 px-4 py-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-8 lg:py-12">
        {' '}
        {/* LEFT CONTENT */}
        <div className="space-y-5 lg:space-y-6">
          <h1 className="text-2xl font-medium leading-[1.15] lg:text-4xl">
            <span className="text-white">Complete &amp; Authentic</span>
            <br />
            <span className="text-accent">Hajj guide</span>
          </h1>

          <p className="max-w-sm text-sm leading-relaxed text-white lg:text-base">
            Everything you need to prepare for Hajj — rituals, planning, authentic duas, and
            step-by-step guidance.
          </p>

          <form onSubmit={handleSearch} className="flex h-11 max-w-sm">
            <div className="flex flex-1 items-center rounded-l-lg bg-white pl-4">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mr-2 shrink-0 text-secondary/60"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Hajj guides, rituals, duas..."
                aria-label="Search Hajj articles"
                className="h-full w-full bg-transparent text-sm text-secondary placeholder:text-secondary/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded-r-lg bg-accent px-5 text-sm font-medium text-kiswah transition-colors duration-500 ease-out hover:bg-accent/90"
            >
              Search
            </button>
          </form>

          <div className="flex max-w-sm gap-3">
            <Link
              href="/hajj/guides"
              className="flex-1 rounded-full bg-accent px-4 py-2.5 text-center text-xs font-medium text-kiswah transition-colors duration-500 ease-out hover:bg-accent/90"
            >
              Explore Guides
            </Link>

            <Link
              href="/duas"
              className="flex-1 rounded-full border border-white px-4 py-2.5 text-center text-xs font-medium text-white transition-colors duration-500 ease-out hover:bg-white/5"
            >
              Learn Du&apos;as
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
            <span className="flex items-center gap-1 text-[11px] text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A45A"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Authentic sources
            </span>

            <span className="flex items-center gap-1 text-[11px] text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A45A"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M9 6h6M9 12h6M9 18h6M5 6h.01M5 12h.01M5 18h.01" />
              </svg>
              Step-by-step
            </span>

            <span className="flex items-center gap-1 text-[11px] text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A45A"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V15c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
              </svg>
              Scholar reviewed
            </span>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="grid gap-3">
          {/* Quran Card */}
          <div className="relative rounded-xl bg-white py-3.5 pl-5 pr-4">
            <span className="absolute left-0 top-3.5 h-[calc(100%-1.75rem)] w-[3px] bg-accent" />

            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-brand">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
                </svg>
              </span>

              <span className="text-sm font-medium text-kiswah">Quran</span>
            </div>

            <p dir="rtl" lang="ar" className="mb-1.5 text-base leading-loose text-brand">
              وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ
              مِن كُلِّ فَجٍّ عَمِيقٍ
            </p>

            <p className="mb-1.5 text-xs leading-relaxed text-secondary">
              &quot;And proclaim to the people the Hajj; they will come to you on foot and on every
              lean camel, coming from every distant pass.&quot;
            </p>

            <span className="text-[11px] text-accent">— Surah Al-Hajj (22:27)</span>
          </div>

          {/* Hadith Card */}
          <div className="relative rounded-xl bg-accent py-3.5 pl-5 pr-4">
            <span className="absolute left-0 top-3.5 h-[calc(100%-1.75rem)] w-[3px] bg-kiswah" />

            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-kiswah">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A45A"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h6M9 13h6" />
                </svg>
              </span>

              <span className="text-sm font-medium text-kiswah-deep">Hadith</span>
            </div>

            <p className="mb-1.5 text-xs leading-relaxed text-kiswah-deep">
              &quot;Whoever performs Hajj for Allah&apos;s sake only, and does not do anything
              sinful or wrong, will return as free of sin as the day his mother bore him.&quot;
            </p>

            <span className="text-[11px] text-kiswah">
              — Sahih al-Bukhari (1521), narrated by Abu Huraira
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
