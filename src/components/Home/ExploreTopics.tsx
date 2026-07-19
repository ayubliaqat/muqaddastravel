import Link from 'next/link'
import { Landmark, BookOpen, Plane } from 'lucide-react'
const topics = [
  {
    title: 'Hajj',
    description:
      'Learn every step of Hajj with authentic guidance, practical tips, and detailed articles written for first-time and experienced pilgrims.',
    href: '/blog/category/hajj',
    icon: Landmark,
    articles: '42+ Articles',
  },
  {
    title: 'Umrah',
    description:
      'Understand every stage of Umrah, from entering Ihram to completing Tawaf and Sa’i, with clear and trusted explanations.',
    href: '/blog/category/umrah',
    icon: BookOpen,
    articles: '36+ Articles',
  },
  {
    title: 'Preparation',
    description:
      'Prepare with confidence using travel checklists, packing guides, health advice, visas, and everything you need before departure.',
    href: '/blog/category/preparation',
    icon: Plane,
    articles: '18+ Articles',
  },
]

export function ExploreTopics() {
  return (
    <section className="bg-[#FCFBF7] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading: Reduced top/bottom spacing and font sizes */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#0A3D62]/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A3D62]">
            Explore Topics
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0A3D62] md:text-4xl">
            Discover Knowledge for Your Journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#0A3D62]/70">
            Explore our carefully organized knowledge base built upon authentic Islamic sources for
            Hajj, Umrah, and travel preparation.
          </p>
        </div>

        {/* Cards: Reduced padding and rounded corners for a sleeker look */}
        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.title}
                href={topic.href}
                className="group flex flex-col rounded-2xl border border-[#0A3D62]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00BCD4]/30 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A3D62]/5 transition-colors group-hover:bg-[#00BCD4]/10">
                  <Icon className="h-6 w-6 text-[#0A3D62] transition-colors group-hover:text-[#00BCD4]" />
                </div>

                <h3 className="text-xl font-semibold text-[#0A3D62]">{topic.title}</h3>

                <p className="mt-3 flex-grow text-sm leading-relaxed text-[#0A3D62]/70">
                  {topic.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#0A3D62]/10 pt-4">
                  <span className="text-[13px] font-medium text-[#0A3D62]/50">
                    {topic.articles}
                  </span>
                  <span className="text-[13px] font-bold text-[#00BCD4]">Explore →</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
