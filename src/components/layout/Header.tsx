import Link from 'next/link'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { mainNav } from '@/constants/navigation'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent/30 bg-white">
      <div className="container-custom flex h-[var(--header-height)] items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {mainNav.map((item, index) => {
            const alignRight = index >= mainNav.length - 2
            return (
              <div key={item.href} className="group relative py-1">
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 py-2 text-sm font-medium text-secondary transition-colors duration-200 hover:text-brand whitespace-nowrap"
                >
                  {item.label}

                  {item.children && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-200 ease-out group-hover:w-full" />
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`invisible absolute top-full z-50 mt-3 w-56 translate-y-2 rounded-xl border border-border bg-white p-2 opacity-0 shadow-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                      alignRight ? 'right-0' : 'left-0'
                    }`}
                  >
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
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 items-center lg:flex">
          <Link
            href="/guides"
            className="rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-hover"
          >
            Explore Guides
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
