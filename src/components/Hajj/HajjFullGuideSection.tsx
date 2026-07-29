'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, Clock } from 'lucide-react'

export default function HajjFullGuideBlog() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-white px-4 py-16 lg:py-24 text-[var(--primary)]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)]/10 px-3.5 py-1.5 text-xs font-semibold text-[var(--brand)] w-fit mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[var(--brand)]" />
            <span>Comprehensive Guide</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[var(--brand)] mb-4">
            The Complete Hajj Journey Manual
          </h2>
          <p className="text-base sm:text-lg text-[var(--secondary)] leading-relaxed">
            An in-depth, continuous walkthrough covering every stage of your sacred pilgrimage from
            start to finish.
          </p>
        </div>

        {/* Single Expandable Blog Container */}
        <article className="rounded-3xl border-2 border-[var(--brand)] bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--brand)]/15 text-xs text-[var(--secondary)]">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#C9A45A] uppercase tracking-wider bg-[#C9A45A]/10 px-3 py-1 rounded-md">
                Master Guide
              </span>
              <span>Updated for 2026 Season</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A45A]" />
              <span>12 min read</span>
            </div>
          </div>

          {/* Core Blog Content (Always Visible) */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--primary)]">
            <p>
              Performing Hajj is a transformative spiritual milestone and one of the fundamental
              pillars of Islam. Embarking on this sacred journey requires both rigorous physical
              preparation and precise adherence to authentic traditional rituals. Navigating the
              logistics, crowd management, and spiritual reflections can feel complex without a
              clear, comprehensive roadmap.
            </p>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--brand)] pt-4">
              1. Understanding the Three Types of Hajj
            </h3>
            <p>
              Before stepping into the state of Ihram, pilgrims must choose one of three traditional
              methods to perform their pilgrimage:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[var(--secondary)] text-sm sm:text-base">
              <li>
                <strong className="text-[var(--primary)]">Tamattu' (Enjoyment):</strong> Entering
                Ihram for Umrah first, completing its rites, exiting Ihram, and entering a fresh
                state of Ihram on the 8th of Dhul Hijjah specifically for Hajj. This is the most
                common method for international pilgrims.
              </li>
              <li>
                <strong className="text-[var(--primary)]">Ifrad (Isolation):</strong> Entering Ihram
                solely for Hajj upon reaching the Meeqat, remaining in Ihram until all major rites
                are completed on Eid al-Adha.
              </li>
              <li>
                <strong className="text-[var(--primary)]">Qiran (Combining):</strong> Combining both
                Umrah and Hajj under a single continuous Ihram until all rites of both pilgrimages
                are finalized.
              </li>
            </ul>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--brand)] pt-4">
              2. The Meeqat and Assuming Ihram
            </h3>
            <p>
              The physical journey officially commences at the Meeqat stations where pilgrims assume
              Ihram. For men, this involves wearing two unstitched white sheets; for women, modest
              customary attire that follows Islamic principles while leaving the face uncovered.
              Pilgrims perform ritual purification (Ghusl), form their explicit intention (Niyyah),
              and begin reciting the Talbiyah continuously.
            </p>
          </div>

          {/* Expandable Content (Shown on Read More) */}
          {isExpanded && (
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--primary)] pt-6 mt-6 border-t border-[var(--brand)]/15 animate-[fadeIn_0.4s_ease-out_forwards]">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--brand)] pt-2">
                3. The Five Days of Hajj (Dhul Hijjah 8–13)
              </h3>
              <p>
                The core rituals span five concise yet intense days of devotion, movement, and
                remembrance across holy sites:
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[var(--secondary)]">
                <p>
                  <strong className="text-[var(--primary)]">Day 8 (Tarwiyah - Mina):</strong>{' '}
                  Pilgrims travel to the tent city of Mina after sunrise, spending the day and night
                  in prayer, shortening prayers without combining them according to the Sunnah.
                </p>
                <p>
                  <strong className="text-[var(--primary)]">Day 9 (Arafat):</strong> The definitive
                  pinnacle of Hajj. Pilgrims gather on the plain of Arafat from dawn until sunset,
                  engaging in heartfelt supplication and seeking divine forgiveness. After sunset,
                  pilgrims depart for Muzdalifah without praying Maghrib on-site, combining Maghrib
                  and Isha upon arrival.
                </p>
                <p>
                  <strong className="text-[var(--primary)]">
                    Night of the 9th & Day 10 (Muzdalifah and Jamarat):
                  </strong>{' '}
                  After resting under the open sky and collecting pebbles in Muzdalifah, pilgrims
                  return to Mina on Eid morning to perform Rami (stoning Jamrat al-Aqabah), complete
                  Qurbani (sacrifice), shave or trim their hair (Halq/Taqsir), and travel to Makkah
                  for Tawaf al-Ifadah.
                </p>
                <p>
                  <strong className="text-[var(--primary)]">Days 11–13 (Days of Tashreeq):</strong>{' '}
                  Pilgrims return to Mina to stay overnight and stone all three pillars (Jamrat
                  al-Sugra, Al-Wusta, and Al-Aqabah) each afternoon after the sun passes its zenith.
                </p>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--brand)] pt-4">
                4. Concluding Rites and Practical Tips
              </h3>
              <p>
                Before departing Makkah, every pilgrim must perform Tawaf al-Wada' (the Farewell
                Tawaf) as their final act of worship in the Sacred Mosque. Staying hydrated,
                following crowd safety guidelines, and keeping essential documents secure will
                ensure a smooth, spiritually rewarding experience.
              </p>
            </div>
          )}

          {/* Toggle Button Inside Container */}
          <div className="mt-10 pt-6 border-t border-[var(--brand)]/15 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-[var(--brand)] bg-[var(--brand)] text-white font-medium text-sm transition-all hover:bg-[var(--brand)]/90 shadow-sm cursor-pointer"
            >
              <span>{isExpanded ? 'Show Less' : 'Read Full Guide'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
