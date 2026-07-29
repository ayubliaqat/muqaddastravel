// components/Hajj/HajjOverview.tsx

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const highlights = [
  'The Fifth Pillar of Islam',
  'Required once for every able Muslim',
  'Performed during Dhul Hijjah',
  'A journey of faith, devotion, and unity',
]

export default function HajjOverview() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}

          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-brand-light">
              <Image
                src="/images/hajj-kabaa-image.png"
                alt="Pilgrims performing Hajj around the Kaaba"
                width={700}
                height={700}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Content */}

          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl font-bold text-brand lg:text-5xl">
              What is Hajj?
            </h2>

            <div className="mt-4 mb-6 h-1 w-20 rounded-full bg-accent" />

            <p className="text-secondary text-lg leading-8">
              Hajj is the fifth pillar of Islam and one of the greatest acts of worship. Every
              Muslim who is physically and financially able is required to perform Hajj once in
              their lifetime.
            </p>

            <p className="mt-5 text-secondary leading-8">
              Performed annually during the month of Dhul Hijjah in Makkah, Hajj includes a series
              of sacred rituals that commemorate the devotion and obedience of Prophet Ibrahim (AS),
              Hajar (AS), and Prophet Ismail (AS), while strengthening faith, patience, and unity
              among Muslims from around the world.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/blog/what-is-hajj"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-primary transition-colors hover:bg-[#b8934b]"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
