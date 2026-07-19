'use client'

import { useState } from 'react'
import Link from 'next/link'
import { mainNav } from '@/constants/navigation'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-primary transition-colors hover:border-border-strong hover:bg-section"
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

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-background px-6 py-2 shadow-card">
          <nav className="flex flex-col divide-y divide-border">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-sm text-primary transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mb-4 mt-3 block rounded-md border border-border bg-brand px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Get in touch
          </Link>
        </div>
      )}
    </div>
  )
}
