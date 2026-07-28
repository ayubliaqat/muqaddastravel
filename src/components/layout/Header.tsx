'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { mainNav } from '@/constants/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-accent/20 bg-white/90 backdrop-blur-md">
      <div className="container-custom flex h-[var(--header-height)] items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden flex-1 items-center justify-center gap-8 lg:flex"
          aria-label="Main Navigation"
        >
          {mainNav.map((item, index) => {
            const alignRight = index >= mainNav.length - 2
            const isActive =
              pathname === item.href ||
              (item.children && item.children.some((child) => pathname === child.href))

            return (
              <div key={item.href} className="group relative py-1">
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent whitespace-nowrap ${
                    isActive ? 'text-brand' : 'text-secondary'
                  }`}
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

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-brand transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`invisible absolute top-full z-50 mt-2 w-60 translate-y-2 rounded-2xl border border-border/80 bg-white/95 p-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-250 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                      alignRight ? 'right-0' : 'left-0'
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={isChildActive ? 'page' : undefined}
                            className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 no-underline ${
                              isChildActive
                                ? 'bg-brand/10 text-brand font-semibold shadow-xs border border-brand/20'
                                : 'text-secondary hover:bg-brand-light hover:text-accent'
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
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
            className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-[0_4px_14px_rgba(30,107,82,0.25)] transition-all duration-250 ease-out hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,107,82,0.35)] active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 no-underline !text-white"
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
