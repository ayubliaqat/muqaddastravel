export function TrustHighlights() {
  const highlights = [
    {
      icon: '📖',
      title: 'Authentic Information',
      description: 'Based on trusted Islamic sources.',
    },
    {
      icon: '📜',
      title: "Qur'an References",
      description: 'Relevant verses for every guide.',
    },
    {
      icon: '🌙',
      title: 'Authentic Hadith',
      description: 'Verified narrations with citations.',
    },
    {
      icon: '🕌',
      title: 'Step-by-Step Guides',
      description: 'Simple guidance for every pilgrim.',
    },
  ]

  return (
    <section className="relative -mt-12 mb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-base font-semibold text-primary">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
