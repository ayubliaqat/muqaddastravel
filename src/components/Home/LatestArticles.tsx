import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: '10 Common Mistakes Before Hajj',
    category: 'Preparation',
    image: '/images/blog/mistakes.webp',
    excerpt: 'Avoid the most common mistakes pilgrims make before beginning their sacred journey.',
    readingTime: '6 min read',
    href: '/blog/10-common-mistakes-before-hajj',
  },
  {
    title: 'Best Time to Perform Umrah',
    category: 'Umrah',
    image: '/images/blog/best-time.webp',
    excerpt: 'Learn which months are best for Umrah and what to expect throughout the year.',
    readingTime: '8 min read',
    href: '/blog/best-time-for-umrah',
  },
  {
    title: 'Essential Packing Checklist',
    category: 'Travel Tips',
    image: '/images/blog/packing.webp',
    excerpt: 'Everything you should pack before travelling to Makkah and Madinah.',
    readingTime: '5 min read',
    href: '/blog/hajj-packing-checklist',
  },
  {
    title: 'How to Prepare Spiritually',
    category: 'Preparation',
    image: '/images/blog/spiritual.webp',
    excerpt: 'Prepare your heart and mind before embarking on your sacred journey.',
    readingTime: '7 min read',
    href: '/blog/spiritual-preparation',
  },
]

export function LatestArticles() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Latest Articles
          </span>

          <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Fresh Insights for Every Pilgrim
          </h2>

          <p className="mt-5 text-lg leading-8 text-secondary">
            Discover authentic articles, practical tips, and Islamic guidance to help you prepare
            for Hajj and Umrah with confidence.
          </p>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={article.href}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-5">
                <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-brand">
                  {article.category}
                </span>

                <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-7 text-primary">
                  <Link href={article.href} className="transition-colors hover:text-brand">
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-secondary">
                  {article.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-secondary">{article.readingTime}</span>

                  <Link
                    href={article.href}
                    className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-xl bg-brand px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
