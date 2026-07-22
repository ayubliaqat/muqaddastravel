import { BookOpen, ShieldCheck, Globe2, Sparkles } from 'lucide-react'

export function TrustFlower() {
  return (
    <div className="relative mx-auto flex max-w-xl items-center justify-center py-10">
      {/* Left Connector */}
      <div className="absolute left-[24%] top-[47%] h-px w-16 bg-gradient-to-r from-transparent via-[#D5B06A] to-[#D5B06A]" />

      {/* Right Connector */}
      <div className="absolute right-[24%] top-[47%] h-px w-16 bg-gradient-to-l from-transparent via-[#D5B06A] to-[#D5B06A]" />

      {/* Bottom Connector */}
      <div className="absolute top-[48%] h-20 w-px bg-gradient-to-b from-[#D5B06A] to-transparent" />

      {/* Center Ornament */}
      <div className="absolute top-[48%] -translate-y-1/2 rounded-full border border-[#E2C98E] bg-[#FFF8EA] p-3 shadow-lg">
        <Sparkles className="h-5 w-5 text-[#B88A2C]" />
      </div>

      <div className="grid grid-cols-2 gap-10">
        {/* Top Card */}
        <div className="col-span-2 flex justify-center">
          <TrustCard
            icon={<BookOpen className="h-7 w-7" />}
            title="100% Qur'an & Hadith"
            subtitle="Every guide is referenced from authentic Islamic sources."
            large
          />
        </div>

        {/* Bottom Left */}
        <TrustCard
          icon={<ShieldCheck className="h-7 w-7" />}
          title="Scholar Verified"
          subtitle="Reviewed carefully to ensure reliable fiqh guidance."
        />

        {/* Bottom Right */}
        <TrustCard
          icon={<Globe2 className="h-7 w-7" />}
          title="Made for Western Pilgrims"
          subtitle="Practical guidance for Muslims in the UK, USA & Canada."
        />
      </div>
    </div>
  )
}

type CardProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
  large?: boolean
}

function TrustCard({ icon, title, subtitle, large = false }: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-[#E4CAA0]
        bg-[#FFFCF6]
        shadow-[0_15px_40px_rgba(0,0,0,.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_60px_rgba(0,0,0,.12)]
        ${large ? 'w-[320px]' : 'w-[250px]'}
      `}
    >
      {/* Gold Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#D5A648] via-[#F4D38C] to-[#D5A648]" />

      <div className="p-6">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0B6B4D]/10 text-[#0B6B4D]">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-center text-lg font-semibold text-[#15352D]">{title}</h3>

        {/* Description */}
        <p className="mt-3 text-center text-sm leading-6 text-[#67716E]">{subtitle}</p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#F5E7BF]/40 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}
