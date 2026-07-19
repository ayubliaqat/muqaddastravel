import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M14 2L18 8H10L14 2Z" fill="var(--brand)" />
        <rect x="6" y="9" width="16" height="15" rx="1" fill="var(--brand)" />
        <rect x="12" y="15" width="4" height="9" fill="var(--background)" />
        <circle cx="14" cy="12" r="1.4" fill="var(--background)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg text-primary">
          Muqaddas<span className="text-gold">Travel</span>
        </span>
        <span className="text-[11px] text-secondary tracking-wide">
          Your sacred journey, our priority
        </span>
      </span>
    </Link>
  )
}
