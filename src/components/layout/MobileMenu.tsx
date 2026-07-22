'use client'

import { useState } from 'react'
import Link from 'next/link'
import { mainNav } from '@/constants/navigation'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  function closeMenu() {
    setOpen(false)
    setActiveDropdown(null)
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-section"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M2 2L16 16M16 2L2 16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M1 4H17M1 9H17M1 14H17"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/* Mobile Panel */}
      {open && (
        <div className="fixed inset-x-0 top-[var(--header-height)] z-[999] border-b border-border bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-divider">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown((current) => (current === item.label ? null : item.label))
                      }
                      className="flex w-full items-center justify-between py-4 text-sm font-medium text-primary"
                    >
                      {item.label}

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="M3 5L7 9L11 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {activeDropdown === item.label && (
                      <div className="mb-3 rounded-lg bg-section px-4 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-2.5 text-sm text-secondary transition-colors hover:text-brand"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-4 text-sm font-medium text-primary transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="/guides"
            onClick={closeMenu}
            className="mt-5 block rounded-full bg-brand px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Explore Guides
          </Link>
        </div>
      )}
    </div>
  )
}
