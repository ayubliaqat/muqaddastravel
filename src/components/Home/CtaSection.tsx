'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, UserCheck, Mail } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F5] py-16 lg:py-20 border-t border-b border-[#CBA35C]/30">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F6E56]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-[#CBA35C]/40 bg-white/80 p-8 sm:p-14 lg:p-20 shadow-xl backdrop-blur-md"
        >
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#0F6E56]/10 px-4 py-2 text-xs font-bold text-[#0F6E56]">
            <Sparkles className="h-4 w-4 text-[#CBA35C]" />
            Connect With Us
          </div>

          {/* Short Heading in Brand Green */}
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#0F6E56] sm:text-4xl lg:text-5xl font-heading">
            Have a Suggestion or Question?
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#64748B]">
            Have suggestions, want to request a new topic, or need help reviewing a guide? Explore
            our background or reach out to our team directly.
          </p>

          {/* Action Buttons: One Green, One Accent */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F6E56] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0F6E56]/20 transition hover:bg-[#0A4D3D] hover:scale-105"
            >
              <UserCheck className="h-4 w-4 text-[#CBA35C]" />
              About Us
              <ArrowRight className="h-4 w-4 text-[#CBA35C]" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#CBA35C] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#CBA35C]/20 transition hover:bg-[#B8914D] hover:scale-105"
            >
              <Mail className="h-4 w-4 text-white" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
