import Link from 'next/link'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { mainNav } from '@/constants/navigation'

export function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="container-custom flex h-[var(--header-height)] items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="relative flex items-center gap-1 py-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
              >
                {item.label}

                {item.children && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 5L7 9L11 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-200 ease-out group-hover:w-full" />
              </Link>

              {/* Dropdown */}
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 mt-3 w-56 translate-y-2 rounded-xl border border-border bg-white p-2 opacity-0 shadow-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-secondary transition-colors hover:bg-section hover:text-brand"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <Link
            href="/guides"
            className="rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Explore Guides
          </Link>
        </div>

        {/* Mobile */}
        <MobileMenu />
      </div>
    </header>
  )
}
