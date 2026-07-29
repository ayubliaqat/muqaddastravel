'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: 'Report incorrect information',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  // JSON-LD Schema markup for SEO & Rich Results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact MuqaddasTravel',
    description:
      'Share your feedback, report incorrect information, or suggest improvements for MuqaddasTravel Hajj and Umrah guidance platform.',
    url: 'https://muqaddastravel.com/contact',
    publisher: {
      '@type': 'Organization',
      name: 'MuqaddasTravel',
      url: 'https://muqaddastravel.com',
      logo: 'https://muqaddastravel.com/logo.png',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FAF9F6] text-[#1d2939] antialiased selection:bg-[#e9f6f2] selection:text-[#1E6B52]">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden bg-brand py-4 lg:py-8 px-6 sm:px-8 md:px-16 border-b border-[#e5e7eb]/40">
          {/* Subtle Islamic Geometric Pattern Background Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#1E6B52 1px, transparent 1px), radial-gradient(#1E6B52 1px, #edf7f3 1px)`,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px',
            }}
          />

          <div className=" mx-auto max-w-4xl text-center flex flex-col items-center">
            {/* Main Heading - Brand Green Highlight with Balanced Typography */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-3">
              Help Us Improve <span className="text-accent">MuqaddasTravel</span>
            </h1>

            {/* Description */}

            {/* Small Elegant Gold Decorative Line */}
            <div className="flex items-center justify-center gap-3 w-full max-w-[180px]">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#C9A45A]" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A45A]" />
              <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-[#C9A45A]" />
            </div>
          </div>
        </section>

        {/* 2. MAIN CONTACT SECTION */}
        <section className="bg-[#f7f5f1] py-16 sm:py-20 px-6 sm:px-8 md:px-16">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl bg-[rgba(255,255,255,0.82)] backdrop-blur-md p-6 sm:p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#e5e7eb]/85">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#1d2939] mb-8">
                Send Us A Message
              </h2>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4 animate-in fade-in-50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e9f6f2] text-[#1E6B52] shadow-xs">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#1d2939]">
                    Message Received
                  </h3>
                  <p className="text-[#475467] max-w-md text-sm leading-relaxed mb-4">
                    JazakAllah Khair for reaching out. Your feedback has been forwarded to our
                    content team for review.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[#1E6B52] px-8 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#154d39]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#1d2939]">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-sm text-[#1d2939] placeholder-[#98a2b3] shadow-xs transition-all focus:border-[#1E6B52] focus:outline-none focus:ring-2 focus:ring-[#1E6B52]/20"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#1d2939]">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-sm text-[#1d2939] placeholder-[#98a2b3] shadow-xs transition-all focus:border-[#1E6B52] focus:outline-none focus:ring-2 focus:ring-[#1E6B52]/20"
                      />
                    </div>
                  </div>

                  {/* Reason for Contact */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#1d2939]">
                      Reason for Contact
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-sm text-[#1d2939] shadow-xs transition-all focus:border-[#1E6B52] focus:outline-none focus:ring-2 focus:ring-[#1E6B52]/20 cursor-pointer"
                    >
                      <option value="Report incorrect information">
                        Report incorrect information
                      </option>
                      <option value="Missing content">Missing content</option>
                      <option value="Website issue">Website issue</option>
                      <option value="Suggestion">Suggestion</option>
                      <option value="General inquiry">General inquiry</option>
                    </select>
                  </div>

                  {/* Textarea: Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#1d2939]">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe how we can improve or what information needs review..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#e5e7eb] bg-white p-4 text-sm text-[#1d2939] placeholder-[#98a2b3] shadow-xs transition-all focus:border-[#1E6B52] focus:outline-none focus:ring-2 focus:ring-[#1E6B52]/25 resize-none"
                    />
                  </div>

                  {/* Submit Button - Accent Gold with Hover Effect and Brand Green Icon Box */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group inline-flex h-12 w-full items-center justify-between rounded-full bg-[#C9A45A] px-6 text-base font-semibold text-[#1d2939] shadow-sm transition-all duration-300 hover:bg-[#b8934c] hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#C9A45A] focus:ring-offset-2 no-underline"
                    >
                      <span className="flex-1 text-center">Send Message</span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E6B52] text-white transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
