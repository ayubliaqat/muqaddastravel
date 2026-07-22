import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg
        width="40"
        height="40"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M15 2L19 8H11L15 2Z" fill="var(--brand)" />

        <rect x="6" y="9" width="18" height="16" rx="1.5" fill="var(--brand)" />

        <rect x="13" y="16" width="4" height="9" fill="var(--background)" />

        <circle cx="15" cy="13" r="1.4" fill="var(--background)" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="text-2xl text-lg font-bold tracking-tight text-primary">
          Muqaddas<span className="text-brand">Travel</span>
        </span>

        <span className="mt-1 text-[11px] font-medium tracking-wide text-secondary">
          Authentic guidance for your sacred journey
        </span>
      </span>
    </Link>
  )
}
