import { BookOpen, BadgeCheck, ClipboardCheck, Sparkles, Compass, Luggage } from 'lucide-react'

const trustPoints = [
  {
    icon: BookOpen,
    title: "Qur'an & Sunnah",
    position: 'top-0 left-1/2 -translate-x-1/2',
  },
  {
    icon: BadgeCheck,
    title: 'Scholar Reviewed',
    position: 'top-1/2 right-0 -translate-y-1/2',
  },
  {
    icon: ClipboardCheck,
    title: 'Step-by-Step Guides',
    position: 'bottom-6 right-8',
  },
  {
    icon: Sparkles,
    title: 'Authentic Duas',
    position: 'bottom-6 left-8',
  },
  {
    icon: Compass,
    title: 'Ziyarat Guidance',
    position: 'top-1/2 left-0 -translate-y-1/2',
  },
  {
    icon: Luggage,
    title: 'Journey Preparation',
    position: 'bottom-0 left-1/2 -translate-x-1/2',
  },
]

export function WhyChooseUs() {
  return (
    <section
      className="
      relative overflow-hidden
      bg-[url('/images/kaaba.png')]
      bg-cover
      bg-center
      py-16 lg:py-20
      "
    >
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="max-w-2xl">
          <h2
            className="
    text-2xl
    font-semibold
    leading-tight
    text-primary
    sm:text-3xl
    "
          >
            Why Pilgrims Trust <span className="text-brand">Muqaddas Travel</span>
          </h2>

          <p
            className="
    mt-3
    max-w-xl
    text-sm
    leading-relaxed
    text-muted
    sm:text-base
    "
          >
            Clear guidance based on authentic sources, helping you prepare for your Hajj and Umrah
            journey with confidence and clarity.
          </p>
        </div>

        {/* Circle Diagram */}

        <div className="mt-10 lg:w-1/2">
          <div
            className="
            relative
            mx-auto
            h-[390px]
            w-[390px]
          "
          >
            {/* outer circle */}

            <div
              className="
              absolute
              inset-12
              rounded-full
              border
              border-primary/20
              "
            />

            {/* middle circle */}

            <div
              className="
              absolute
              inset-24
              rounded-full
              border
              border-dashed
              border-primary/20
              "
            />

            {/* Center */}

            <div
              className="
              absolute
              left-1/2
              top-1/2
              flex
              h-28
              w-28
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-xl
              backdrop-blur
              "
            >
              <div className="text-center">
                <p
                  className="
                  text-base
                  font-semibold
                  text-primary
                "
                >
                  Muqaddas
                </p>

                <p
                  className="
                  text-[11px]
                  text-muted
                "
                >
                  Trusted Knowledge
                </p>
              </div>
            </div>

            {/* Points */}

            {trustPoints.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className={`
                  absolute
                  ${item.position}
                  flex
                  flex-col
                  items-center
                  gap-2
                  `}
                >
                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-brand
                    shadow-md
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <span
                    className="
                    whitespace-nowrap
                    text-xs
                    font-medium
                    text-primary
                    "
                  >
                    {item.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
