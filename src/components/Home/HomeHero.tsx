import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, ClipboardList, ShieldCheck, Users } from 'lucide-react'
import { VerseHighlightCard } from './VerseHighlightCard'

const trustPoints = [
  {
    icon: BookOpen,
    label: "Qur'an & Sunnah Based",
  },
  {
    icon: Users,
    label: 'Scholar Reviewed',
  },
  {
    icon: ClipboardList,
    label: 'Step by Step Guidance',
  },
  {
    icon: ShieldCheck,
    label: '100% Free For Everyone',
  },
]

export function HomeHero() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden py-6 lg:min-h-[78vh] lg:py-10">
      {/* Hero Background */}
      <Image
        src="/images/masjid-al-haram.png"
        alt="Pilgrims performing Tawaf around the Kaaba"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay: full-coverage on mobile (text spans full width there),
          left-weighted on lg+ where text is constrained to max-w-3xl */}
      <div
        className="absolute inset-0 bg-white/85 sm:bg-white/75 lg:bg-transparent"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.82) 0%, rgba(255,255,255,.48) 35%, rgba(255,255,255,.15) 58%, transparent 75%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-4 lg:px-6 xl:px-12">
        <div className="max-w-full lg:max-w-3xl">
          {/* Heading */}
          <h1 className="mt-4 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-primary sm:text-4xl sm:leading-[1.12] lg:text-3xl lg:leading-[1.1]">
            Your Complete Guide to
            <br />
            <span className="text-brand">Hajj &amp; Umrah</span>
            <br />
            For the Journey of a Lifetime
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            Step-by-step guidance, authentic knowledge, and practical tools to help you prepare for
            the journey of a lifetime with clarity, confidence, and peace of mind.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/guides"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore Guides
            </Link>

            <Link
              href="/planning"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-white/90 px-6 py-2.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
            >
              Start Planning
            </Link>
          </div>

          {/* Verse Highlight — inline on mobile/tablet, above the trust strip */}
          <div className="mt-6 lg:hidden">
            <VerseHighlightCard />
          </div>

          {/* Trust Features */}
          <div className="mt-9 sm:mt-11 lg:mt-14">
            <div className="rounded-2xl border border-white/60 bg-white/80 p-1.5 shadow-lg backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-1.5 md:grid-cols-4">
                {trustPoints.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="relative flex items-center gap-2.5 rounded-xl px-3 py-3 transition-colors duration-300 hover:bg-brand-light/40"
                    >
                      {/* Short Divider */}
                      {index !== trustPoints.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute right-0 top-1/2 hidden h-7 w-px -translate-y-1/2 bg-border md:block"
                        />
                      )}

                      <div
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand"
                      >
                        <Icon size={14} strokeWidth={2} />
                      </div>

                      <h3 className="text-left text-[12px] font-medium leading-4 text-primary sm:text-[13px]">
                        {item.label}
                      </h3>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verse Highlight — floating over the hero image, desktop only */}
      <div className="absolute bottom-6 right-4 z-10 hidden lg:right-8 lg:block xl:right-12">
        <VerseHighlightCard />
      </div>
    </section>
  )
}
