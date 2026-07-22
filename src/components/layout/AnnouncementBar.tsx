import { ShieldCheck, BookOpenCheck, BadgeCheck, Heart } from 'lucide-react'

export function AnnouncementBar() {
  const items = [
    {
      icon: ShieldCheck,
      label: 'Authentic Guidance',
    },
    {
      icon: BookOpenCheck,
      label: "Qur'an & Sunnah Based",
    },
    {
      icon: BadgeCheck,
      label: 'Scholar Reviewed',
    },
    {
      icon: ShieldCheck,
      label: 'Trusted by Thousands',
    },
  ]

  return (
    <div className="hidden border-b border-border bg-[#F7F8F5] lg:block">
      <div className="container-custom">
        <div className="flex h-11 items-center justify-between">
          <div className="flex items-center gap-8">
            {items.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-xs font-medium text-secondary"
                >
                  <Icon className="h-4 w-4 text-brand" />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-secondary">
            <Heart className="h-4 w-4 text-brand" />
            <span>Peace of Mind for Your Journey</span>
          </div>
        </div>
      </div>
    </div>
  )
}
