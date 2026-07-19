import Link from 'next/link'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { mainNav } from '@/constants/navigation'

export function Header() {
  return (
    <header className="relative border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden md:flex md:items-center md:gap-8">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm text-secondary transition-colors hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Get in touch
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
