export function VerseHighlightCard() {
  return (
    <div className="flex max-w-sm items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:gap-4 sm:px-5 sm:py-4">
      <div className="min-w-0">
        <p
          dir="rtl"
          lang="ar"
          className="text-right text-base font-semibold leading-relaxed text-brand sm:text-lg"
        >
          وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ
        </p>
        <p className="mt-1.5 text-xs leading-5 text-primary sm:text-sm">
          And complete the Hajj and Umrah for Allah.
        </p>
        <p className="mt-0.5 text-[11px] font-medium text-brand/70 sm:text-xs">
          (Qur&apos;an 2:196)
        </p>
      </div>

      {/* Lantern accent */}
      <svg aria-hidden="true" viewBox="0 0 48 64" className="h-10 w-8 shrink-0 sm:h-12 sm:w-9">
        <path
          d="M24 2v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-brand"
        />
        <path d="M14 8h20l-3 6H17l-3-6z" fill="currentColor" className="text-brand" />
        <rect
          x="10"
          y="14"
          width="28"
          height="34"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand"
        />
        <rect x="16" y="20" width="16" height="22" rx="3" fill="#F5C244" opacity="0.85" />
        <path d="M15 48h18l-2 6H17l-2-6z" fill="currentColor" className="text-brand" />
        <path d="M20 54h8v4h-8z" fill="currentColor" className="text-brand" />
      </svg>
    </div>
  )
}
