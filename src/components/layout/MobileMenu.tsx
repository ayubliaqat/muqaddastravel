'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNav } from '@/constants/navigation'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const scrollYRef = useRef(0)
  const pathname = usePathname()

  // Portal target only exists on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  function closeMenu() {
    setOpen(false)
    setActiveDropdown(null)
  }

  // Close on route change (e.g. back/forward navigation)
  useEffect(() => {
    closeMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // iOS-safe scroll lock + Escape key handling
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    if (open) {
      scrollYRef.current = window.scrollY
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`
      }

      window.addEventListener('keydown', handleKeyDown)
    } else {
      const y = scrollYRef.current
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      window.scrollTo(0, y)
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const drawer = open && (
    <>
      {/* Backdrop Overlay */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className="fixed inset-x-0 top-[var(--mobile-menu-top,var(--header-height,4rem))] bottom-0 z-[9990] bg-black/20 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in-0"
      />

      {/* Floating Close Button positioned perfectly at the top-right corner of the drawer */}
      <button
        type="button"
        onClick={closeMenu}
        aria-label="Close navigation menu"
        aria-expanded={open}
        className="fixed top-[calc(var(--mobile-menu-top,var(--header-height,4rem))+1rem)] right-6 z-[10000] flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white text-primary shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-250 ease-out hover:border-brand/40 hover:bg-section hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 animate-in fade-in-50 zoom-in-90"
      >
        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M3 3L15 15M15 3L3 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="fixed inset-x-0 top-[var(--mobile-menu-top,var(--header-height,4rem))] bottom-0 z-[9995] isolate flex flex-col overflow-y-auto overscroll-contain border-b border-border/80 bg-white px-6 py-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out animate-in slide-in-from-top-2 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <nav className="flex-1 flex flex-col gap-1.5 pt-2" aria-label="Mobile Navigation">
          {mainNav.map((item) => {
            const isActive = pathname === item.href
            const isExpanded = activeDropdown === item.label

            return (
              <div
                key={item.href}
                className="border-b border-border/40 pb-1.5 pt-1.5 last:border-none"
              >
                {item.children ? (
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown((current) => (current === item.label ? null : item.label))
                      }
                      aria-expanded={isExpanded}
                      className="flex min-h-[44px] w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-medium text-primary transition-all duration-200 hover:bg-section/70 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      <span>{item.label}</span>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 14 14"
                        fill="none"
                        className={`transition-transform duration-300 ease-out ${
                          isExpanded ? 'rotate-180 text-brand' : 'text-secondary'
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

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isExpanded
                          ? 'grid-rows-[1fr] opacity-100 my-1.5'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-1 rounded-2xl border border-border/80 bg-section/60 p-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMenu}
                                aria-current={isChildActive ? 'page' : undefined}
                                className={`block min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand no-underline ${
                                  isChildActive
                                    ? 'bg-brand/10 text-brand font-semibold shadow-sm border border-brand/20'
                                    : 'text-secondary hover:bg-white hover:text-brand hover:shadow-xs'
                                }`}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block min-h-[44px] rounded-xl px-3 py-2.5 text-base font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand no-underline ${
                      isActive
                        ? 'bg-brand/10 text-brand font-semibold shadow-sm border border-brand/20'
                        : 'text-primary hover:text-brand hover:bg-section/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}
        </nav>

        <div className="mt-6 pt-2">
          <Link
            href="/guides"
            onClick={closeMenu}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-[0_4px_14px_rgba(30,107,82,0.25)] transition-all duration-250 ease-out hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(30,107,82,0.35)] active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 no-underline !text-white"
          >
            Explore Guides
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <div className="lg:hidden">
      {/* Menu Button (Hamburger - visible only when closed) */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-250 ease-out hover:border-brand/40 hover:bg-section/80 hover:shadow-[0_4px_12px_rgba(30,107,82,0.08)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:scale-105"
          >
            <path
              d="M2 4.5H16M2 9H16M2 13.5H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}

      {/* Rendered via portal so it always sits above the Hero,
          regardless of any transform/will-change stacking context
          created by Header or HomeHero ancestors */}
      {mounted && drawer ? createPortal(drawer, document.body) : null}
    </div>
  )
}
