export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <p className="text-sm font-medium tracking-wide text-gold uppercase">Muqaddas Travel</p>

      <h1 className="max-w-2xl text-4xl text-primary md:text-5xl">
        Your sacred journey, reimagined
      </h1>

      <p className="max-w-md text-base text-secondary">
        This is a Tailwind and font check. If the heading above is serif, this paragraph is
        sans-serif, and the button below is teal, everything is wired correctly.
      </p>

      <button className="rounded-md bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-brand-hover">
        Explore our guides
      </button>

      <div className="mt-6 rounded-lg border border-border bg-card p-4 shadow-card">
        <p className="text-sm text-secondary">Card test — border, background, and shadow tokens</p>
      </div>
    </main>
  )
}
