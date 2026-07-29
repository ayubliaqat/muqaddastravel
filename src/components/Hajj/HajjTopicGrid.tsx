// components/HajjTopicGrid.tsx
import Link from 'next/link'

const topics = [
  {
    label: 'Ihram',
    count: 14,
    href: '/hajj?topic=ihram',
    tone: 'brand',
    icon: <path d="M4 4h16v4l-4 12H8L4 8V4Z" />,
    radius: 'rounded-tl-[24px] rounded-tr-xl rounded-br-xl rounded-bl-xl',
  },
  {
    label: 'Tawaf',
    count: 11,
    href: '/hajj?topic=tawaf',
    tone: 'accent',
    icon: <path d="M12 3a9 9 0 1 0 9 9M12 3v6l4-3" />,
    radius: 'rounded-tl-xl rounded-tr-[24px] rounded-br-xl rounded-bl-xl',
  },
  {
    label: "Sa'i",
    count: 8,
    href: '/hajj?topic=sai',
    tone: 'brand',
    icon: <path d="M6 20l4-8 3 4 5-10M6 20h12" />,
    radius: 'rounded-tl-xl rounded-tr-xl rounded-br-[24px] rounded-bl-xl',
  },
  {
    label: 'Mina',
    count: 9,
    href: '/hajj?topic=mina',
    tone: 'accent',
    icon: <path d="M3 20 12 4l9 16H3Z" />,
    radius: 'rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-[24px]',
  },
  {
    label: 'Arafat',
    count: 12,
    href: '/hajj?topic=arafat',
    tone: 'brand',
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
      </>
    ),
    radius: 'rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-[24px]',
  },
  {
    label: 'Muzdalifah',
    count: 6,
    href: '/hajj?topic=muzdalifah',
    tone: 'accent',
    icon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
    radius: 'rounded-tl-xl rounded-tr-xl rounded-br-[24px] rounded-bl-xl',
  },
  {
    label: 'Jamarat',
    count: 10,
    href: '/hajj?topic=jamarat',
    tone: 'brand',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    radius: 'rounded-tl-xl rounded-tr-[24px] rounded-br-xl rounded-bl-xl',
  },
  {
    label: 'Preparation',
    count: 18,
    href: '/hajj?topic=preparation',
    tone: 'accent',
    icon: <path d="M9 6h6M9 12h6M9 18h6M5 6h.01M5 12h.01M5 18h.01" />,
    radius: 'rounded-tl-[24px] rounded-tr-xl rounded-br-xl rounded-bl-xl',
  },
] as const

export default function HajjTopicGrid() {
  return (
    <section className="bg-surface px-4 py-12 lg:py-20">
      <div className="mx-auto mb-12 max-w-xl text-center lg:mb-16">
        <h2 className="mb-3 font-heading text-2xl font-bold tracking-tight text-brand sm:text-3xl lg:text-4xl">
          Explore by topic
        </h2>
        <p className="text-sm font-medium tracking-wide text-accent sm:text-base">
          Every stage of the journey, carefully covered
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {topics.map((topic) => {
          const iconBg = topic.tone === 'accent' ? 'bg-[#C9A45A]/15' : 'bg-brand/10'
          const iconColor = topic.tone === 'accent' ? '#C9A45A' : '#1E6B52'

          return (
            <Link
              key={topic.label}
              href={topic.href}
              className={`border border-[#C9A45A]/40 bg-white p-6 text-center transition-all duration-300 ease-out hover:border-[#C9A45A] hover:shadow-md ${topic.radius}`}
            >
              <div
                className={`mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full ${iconBg}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={iconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {topic.icon}
                </svg>
              </div>
              <p className="mb-1 text-sm font-semibold text-primary">{topic.label}</p>
              <p className="text-xs text-secondary">{topic.count} articles</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
