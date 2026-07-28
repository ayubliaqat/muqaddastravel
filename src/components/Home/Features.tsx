'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Check } from 'lucide-react'

const trustPoints = [
  {
    title: 'Quran & Hadith Based',
  },
  {
    title: 'Step-by-Step Guides',
  },
  {
    title: 'Practical Preparation',
  },
  {
    title: 'Scholar Reviewed Content',
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F5] py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#0F6E56]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-[#CBA35C]/30 shadow-xl bg-slate-100">
              <Image
                src="/images/kaaba-image.png"
                alt="Kaaba surrounded by pilgrims in Masjid al-Haram"
                width={700}
                height={850}
                className="h-[520px] w-full object-cover"
              />

              {/* Faded Gradient Overlay to blend image smoothly into the page */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/40 bg-white/85 px-5 py-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F6E56] text-white">
                    <Sparkles className="h-5 w-5 text-[#CBA35C]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#1E293B]">Trusted Guidance</p>
                    <p className="text-xs text-[#64748B]">For every pilgrim</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full border border-[#CBA35C]/20 pointer-events-none" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand sm:text-4xl lg:text-5xl font-heading">
              Why Trust Our Pilgrimage Knowledge?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B]">
              Preparing for Hajj and Umrah requires accurate and clear guidance. We bring together
              authentic references, practical resources, and carefully structured guides to help
              pilgrims travel with confidence.
            </p>

            {/* Trust Points - Clean Vertical List */}
            <div className="mt-8 space-y-4">
              {trustPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3.5"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CBA35C]/15 text-[#CBA35C] shadow-sm">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>

                  <span className="text-base font-bold text-[#1E293B]">{item.title}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/guides"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0F6E56] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0F6E56]/20 transition hover:bg-[#0A4D3D] hover:scale-105"
            >
              Explore Our Guides
              <ArrowRight className="h-4 w-4 text-[#CBA35C]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
