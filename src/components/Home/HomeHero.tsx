import Link from 'next/link'

const NODES = [
  {
    title: 'Authentic Info',
    desc: 'Trusted sources',
    pos: { top: '6%', left: '50%' },
    icon: (
      <path
        d="M4 5.5A2.5 2.5 0 016.5 3H19v16H6.5A2.5 2.5 0 004 21V5.5z M19 19H6.5a2.5 2.5 0 00-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Scholar Reviewed',
    desc: 'Checked for accuracy',
    pos: { top: '36%', left: '90%' },
    icon: (
      <path
        d="M12 4L3 8l9 4 9-4-9-4z M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Hadith Verified',
    desc: 'With citations',
    pos: { top: '84%', left: '75%' },
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Step-by-Step',
    desc: 'Clear guidance',
    pos: { top: '84%', left: '25%' },
    icon: (
      <path
        d="M4 6h10M4 12h16M4 18h10 M18 5l2 1-2 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Qur'an Verses",
    desc: 'References included',
    pos: { top: '36%', left: '10%' },
    icon: (
      <path
        d="M12 6c-1.5-1.3-3.7-2-6-2v13c2.3 0 4.5.7 6 2m0-13c1.5-1.3 3.7-2 6-2v13c-2.3 0-4.5.7-6 2m0-13v13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex items-center overflow-hidden bg-background py-12 sm:py-16 sm:min-h-[64vh] lg:min-h-[70vh] lg:py-20 border-b border-accent/20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left Column */}
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 shadow-[0_8px_20px_rgba(30,107,82,0.15)] border border-accent/30">
                <span className="text-accent" aria-hidden="true">
                  ✦
                </span>
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-heading text-base text-white sm:text-lg lg:text-xl font-medium tracking-wide"
                >
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>
                <span className="text-accent" aria-hidden="true">
                  ✦
                </span>
              </div>
            </div>

            <h1
              id="hero-heading"
              className="font-heading text-[2.25rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-primary"
            >
              <span className="text-accent">Guidance for</span>
              <br />
              <span className="text-brand">Hajj &amp; Umrah</span>
            </h1>

            <p className="mt-4 max-w-md text-base leading-7 text-secondary sm:max-w-lg sm:text-lg sm:leading-8">
              Authentic guides, practical checklists, and trusted resources to help you prepare for
              your sacred journey with confidence and peace of mind.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/guides"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,107,82,0.25)] transition-all duration-200 hover:bg-brand-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:translate-y-0 sm:w-auto no-underline !text-white"
              >
                Explore Guides
              </Link>
              <Link
                href="/planning"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-primary shadow-[0_4px_14px_rgba(201,162,39,0.2)] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:translate-y-0 sm:w-auto no-underline"
              >
                Start Planning
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col items-center lg:col-span-6">
            <div
              className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="motion-safe:animate-pulse h-72 w-72 rounded-full bg-gradient-to-tr from-accent/20 to-brand/10 blur-3xl sm:h-80 sm:w-80" />
            </div>

            <div className="relative h-72 w-72 sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]">
              <div
                className="absolute inset-0 rounded-full border border-accent/30 bg-accent/5 shadow-inner backdrop-blur-sm"
                aria-hidden="true"
              />
              <div
                className="absolute inset-8 rounded-full border border-accent/15 sm:inset-12"
                aria-hidden="true"
              />
              <div
                className="motion-safe:[animation:spin_70s_linear_infinite] absolute inset-4 rounded-full border border-dashed border-accent/40"
                aria-hidden="true"
              />

              {/* Verse card */}
              <div className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 sm:w-52 lg:w-60 motion-safe:animate-[float_6s_ease-in-out_infinite]">
                <div className="relative overflow-hidden rounded-tl-[24px] rounded-br-[24px] rounded-tr-md rounded-bl-md border border-accent/40 bg-brand p-4 text-center shadow-[0_16px_40px_rgba(30,107,82,0.3)] sm:p-5">
                  <div className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
                  <p
                    dir="rtl"
                    lang="ar"
                    style={{ color: '#ffffff' }}
                    className="font-heading text-base font-bold leading-[1.6] sm:text-lg lg:text-xl drop-shadow-xs"
                  >
                    وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
                  </p>
                  <div className="mx-auto my-2.5 h-px w-10 bg-accent/70" aria-hidden="true" />
                  <span className="text-[9px] font-medium uppercase tracking-wider text-accent sm:text-[10px]">
                    Al-Baqarah • 2:196
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" aria-hidden="true" />
                </div>
              </div>

              <ul className="contents">
                {NODES.map((item) => (
                  <li
                    key={item.title}
                    style={{ ...item.pos, transform: 'translate(-50%, -50%)' }}
                    className="absolute flex w-24 flex-col items-center rounded-xl border border-accent/30 bg-white/95 p-2.5 text-center shadow-[0_10px_25px_rgba(201,162,39,0.15)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-[calc(50%+4px)] sm:w-28 lg:w-32 lg:p-3"
                  >
                    <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-brand sm:h-8 sm:w-8">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="text-[10px] font-bold text-brand sm:text-[11px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[8px] leading-tight text-secondary sm:text-[9px] mt-0.5">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
