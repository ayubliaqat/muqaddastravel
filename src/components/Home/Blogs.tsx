import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    tag: 'Hajj',
    title: 'A Complete Guide to Performing Hajj Step by Step',
    image: '/images/blog-hajj-guide.jpg',
    href: '/blog/hajj-step-by-step-guide',
  },
  {
    tag: 'Umrah',
    title: 'Umrah Step by Step for Beginners',
    image: '/images/blog-umrah-guide.jpg',
    href: '/blog/how-to-perform-umrah',
  },
  {
    tag: 'Guides',
    title: 'Essential Packing List for Hajj & Umrah',
    image: '/images/blog-packing-list.jpg',
    href: '/blog/umrah-packing-list',
  },
]

export function FeaturedArticles() {
  return (
    <section className="bg-section py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">Featured Articles</h2>
            <span aria-hidden="true" className="mt-1.5 block h-1 w-8 rounded-full bg-brand" />
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-200 hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            View All Articles
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <div className="relative h-40 w-full overflow-hidden sm:h-44">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-200 group-hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-5">
                <span className="inline-flex items-center rounded-full bg-brand-light px-2.5 py-1 text-[11px] font-semibold text-brand">
                  {article.tag}
                </span>

                <h3 className="mt-2.5 text-sm font-semibold leading-snug text-primary sm:text-base">
                  {article.title}
                </h3>

                <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-transform duration-200 group-hover:translate-x-0.5">
                  Read More
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
