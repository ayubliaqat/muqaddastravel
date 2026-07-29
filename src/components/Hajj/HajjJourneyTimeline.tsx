// components/HajjJourneyTimeline.tsx
const journey = [
  {
    day: 'Day 8 · Dhul Hijjah',
    place: 'Mina',
    description: 'Ihram begins, prayer at Mina.',
    icon: <path d="M3 20 12 4l9 16H3ZM12 4v16M8 20l4-6 4 6" />,
    dot: 'brand',
    row: 'top',
  },
  {
    day: 'Day 9 · Dhul Hijjah',
    place: 'Arafat',
    description: 'Standing in prayer until sunset.',
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </>
    ),
    dot: 'accent',
    row: 'bottom',
  },
  {
    day: 'Night of the 9th',
    place: 'Muzdalifah',
    description: 'Rest, collect pebbles.',
    icon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
    dot: 'brand',
    row: 'top',
  },
  {
    day: 'Day 10 · Eid al-Adha',
    place: 'Jamarat & sacrifice',
    description: 'Stoning, sacrifice, shaving.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    dot: 'accent',
    row: 'bottom',
  },
  {
    day: 'Days 11–13 · Tashreeq',
    place: 'Mina, again',
    description: 'Stoning all three pillars.',
    icon: <path d="M4 21V4l9 4-9 4M4 21h9" />,
    dot: 'brand',
    row: 'top',
  },
] as const

function Dot({ tone, icon }: { tone: 'brand' | 'accent'; icon: React.ReactNode }) {
  const bg = tone === 'accent' ? 'bg-[#C9A45A]' : 'bg-white'
  const stroke = tone === 'accent' ? '#1d2939' : '#1E6B52'
  return (
    <div className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${bg}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icon}
      </svg>
    </div>
  )
}

export default function HajjJourneyTimeline() {
  return (
    <section className="bg-white px-4 py-10 lg:py-14 text-[var(--primary)]">
      <div className="mx-auto mb-10 max-w-md text-center lg:mb-16">
        <h2 className="mb-2 text-xl font-medium leading-tight text-[var(--brand)] lg:text-2xl">
          The Hajj journey at a glance
        </h2>
        <p className="text-xs font-medium tracking-wide text-[#C9A45A]">Five days, one journey</p>
      </div>

      {/* Mobile / tablet — vertical stack */}
      <div className="relative mx-auto max-w-2xl lg:hidden">
        <div className="absolute inset-y-2 left-4 w-0.5 bg-[var(--brand)]/20" />
        <div className="grid gap-8">
          {journey.map((step) => (
            <div key={step.place} className="grid grid-cols-[32px_1fr] items-start gap-5">
              <Dot tone={step.dot} icon={step.icon} />
              <div className="rounded-2xl border-[1.5px] border-[var(--brand)] bg-white p-5 backdrop-blur shadow-sm">
                <p className="mb-1 text-xs text-[#C9A45A] font-semibold">{step.day}</p>
                <p className="mb-1 text-base font-semibold text-[var(--primary)]">{step.place}</p>
                <p className="text-xs leading-relaxed text-[var(--secondary)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — three stacked rows sharing one column grid */}
      <div className="mx-auto hidden max-w-6xl overflow-x-auto lg:block">
        <div className="min-w-[860px] px-8">
          {/* Row 1 — top text */}
          <div className="grid grid-cols-5 gap-6 mb-4">
            {journey.map((step) => (
              <div key={step.place} className="flex items-end justify-center px-2">
                {step.row === 'top' && (
                  <div className="w-full max-w-[170px] rounded-2xl border-[1.5px] border-[var(--brand)] bg-white p-4 text-center backdrop-blur shadow-sm">
                    <p className="mb-1 text-[11px] text-[#C9A45A] font-semibold">{step.day}</p>
                    <p className="mb-1 text-sm font-semibold text-[var(--primary)]">{step.place}</p>
                    <p className="text-[11px] leading-relaxed text-[var(--secondary)]">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Row 2 — line + dots, guaranteed aligned */}
          <div className="relative grid grid-cols-5 gap-6">
            <div className="absolute left-4 right-4 top-1/2 h-0.5 -translate-y-1/2 bg-[var(--brand)]/20" />
            {journey.map((step) => (
              <div key={step.place} className="flex justify-center">
                <Dot tone={step.dot} icon={step.icon} />
              </div>
            ))}
          </div>

          {/* Row 3 — bottom text */}
          <div className="grid grid-cols-5 gap-6 mt-4">
            {journey.map((step) => (
              <div key={step.place} className="flex items-start justify-center px-2">
                {step.row === 'bottom' && (
                  <div className="w-full max-w-[170px] rounded-2xl border-[1.5px] border-[var(--brand)] bg-white p-4 text-center backdrop-blur shadow-sm">
                    <p className="mb-1 text-[11px] text-[#C9A45A] font-semibold">{step.day}</p>
                    <p className="mb-1 text-sm font-semibold text-[var(--primary)]">{step.place}</p>
                    <p className="text-[11px] leading-relaxed text-[var(--secondary)]">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
