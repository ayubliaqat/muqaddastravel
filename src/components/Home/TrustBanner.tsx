import Image from 'next/image'
import Link from 'next/link'

export default function BannerHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 px-6 md:px-8 lg:px-24 ">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-18">
          {/* Left Column: Content — same rhythm as HomeHero */}
          <div className="lg:col-span-6">
            <span className="badge">
              <span aria-hidden="true"></span>
              The City of the Prophet (PBUH)
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
              Sanctuary of <br />
              <span className="text-brand">Masjid an-Nabawi</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-secondary sm:text-lg">
              Explore comprehensive guides, historical Ziyarat locations, and essential preparation
              tips for your sacred visit to Madinah.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/ziyarat"
                className="inline-flex items-center justify-center gap-2 rounded-brand bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-200 hover:bg-brand-hover"
              >
                Explore Madinah Guides
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/preparation"
                className="inline-flex items-center justify-center gap-2 rounded-brand border border-border bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-200 hover:border-brand/40 hover:text-brand"
              >
                Prepare for Your Visit
              </Link>
            </div>
          </div>

          {/* Right Column: Image, edges gently dissolved into white, not boxed */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden lg:max-w-none">
              <Image
                src="/images/masjid-an-nabvi.png"
                alt="Wide view of Masjid an-Nabawi in Madinah at sunset"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left"
              />

              {/* Soft edge-only fade — image stays mostly visible, just blends at the border */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to right, white 0%, transparent 12%, transparent 88%, white 100%), linear-gradient(to bottom, white 0%, transparent 10%, transparent 92%, white 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
