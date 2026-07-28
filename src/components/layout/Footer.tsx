import Link from 'next/link'
import { Logo } from './Logo'
import { footerExploreNav, footerCompanyNav, footerLegalNav } from '@/constants/navigation'

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center justify-between rounded-xl border border-border/60 bg-white/60 px-4 py-3 text-sm font-medium text-secondary transition-all duration-200 hover:border-accent/30 hover:bg-brand-light/40 hover:text-accent md:inline-block md:w-fit md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:bg-transparent"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 hidden h-px w-0 bg-brand transition-all duration-300 group-hover:w-full md:block" />
      </span>

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="text-light transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent md:hidden"
      >
        <path
          d="M5 3L9 7L5 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-section">
      <div className="container-custom py-14 lg:py-18">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
              Your trusted companion for Hajj & Umrah. Authentic guides, practical tips, and
              inspiring content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-brand">Quick Links</h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {footerExploreNav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg font-bold text-brand">Resources</h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {footerExploreNav.slice(4).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}

              <li>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </li>
            </ul>
          </div>

          {/* About / Company */}
          <div>
            <h3 className="font-serif text-lg font-bold text-brand">Company</h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {footerCompanyNav.concat(footerLegalNav.slice(0, 2)).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help? */}
          <div>
            <h3 className="font-serif text-lg font-bold text-brand">Need Help?</h3>

            <p className="mt-4 text-sm leading-relaxed text-secondary">
              Have questions about Hajj, Umrah, or our guides?
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:hello@muqaddastravel.com"
                className="group flex items-center gap-2.5 text-sm font-medium text-secondary transition hover:text-accent"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-white/80 text-brand shadow-xs transition group-hover:border-accent/40 group-hover:bg-brand-light/50 group-hover:text-accent">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M3 4H17C17.5523 4 18 4.44772 18 5V15C18 15.5523 17.5523 16 17 16H3C2.44772 16 2 15.5523 2 15V5C2 4.44772 2.44772 4 3 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 6L10 11L18 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="relative">
                  hello@muqaddastravel.com
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <a
                href="tel:+923001234567"
                className="group flex items-center gap-2.5 text-sm font-medium text-secondary transition hover:text-accent"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-white/80 text-brand shadow-xs transition group-hover:border-accent/40 group-hover:bg-brand-light/50 group-hover:text-accent">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64448 2 6.07138 2.34812 6.17323 2.82915L7.0514 7.01165C7.13587 7.40877 6.96547 7.81858 6.62725 8.04405L4.76785 9.28364C5.97577 11.9782 8.02176 14.0242 10.7164 15.2321L11.956 13.3727C12.1814 13.0345 12.5912 12.8641 12.9884 12.9486L17.1708 13.8268C17.6519 13.9286 18 14.3555 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="relative">
                  +92 300 1234567
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/60 pt-6">
          <p className="text-center text-xs text-secondary">
            © {new Date().getFullYear()} MuqaddasTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
