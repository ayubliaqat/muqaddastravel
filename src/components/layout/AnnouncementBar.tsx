import { Sparkles } from 'lucide-react'

const messages = [
  { text: 'May Allah accept your worship and grant you a blessed journey.', lang: 'en' },
  { text: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ', lang: 'ar' },
]

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-brand py-2.5">
      {/* Static text for screen readers — the animated track below is decorative/hidden from them */}
      <p className="sr-only">May Allah accept your worship and grant you a blessed journey.</p>

      {/* Edge fade so text doesn't hard-cut at the container edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand to-transparent sm:w-24"
      />

      <div aria-hidden="true" className="marquee-track flex w-max items-center">
        {/* Render the sequence twice back-to-back so the -50% loop is seamless */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center">
            {messages.map((item, i) => (
              <span
                key={`${copyIndex}-${i}`}
                className={`flex items-center gap-2 whitespace-nowrap px-4 text-sm font-medium sm:px-6 ${
                  item.lang === 'ar' ? 'text-[#D4A954]' : 'text-white'
                }`}
                dir={item.lang === 'ar' ? 'rtl' : 'ltr'}
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#D4A954]" strokeWidth={2} />
                {item.text}
              </span>
            ))}
            <span className="mx-2 h-4 w-px shrink-0 bg-white/20 sm:mx-4" role="presentation" />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
