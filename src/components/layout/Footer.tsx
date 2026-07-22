import Link from 'next/link'
import { Logo } from './Logo'
import { footerExploreNav, footerCompanyNav, footerLegalNav } from '@/constants/navigation'

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative flex items-center justify-between rounded-lg border border-border/70 px-3.5 py-2.5 text-sm font-medium text-secondary transition-all duration-200 hover:border-brand/30 hover:bg-brand-light/40 hover:text-brand md:inline-block md:w-fit md:border-0 md:bg-transparent md:px-0 md:py-0 md:hover:bg-transparent"
    >
      <span className="relative">
        {children}

        <span className="absolute -bottom-1 left-0 hidden h-px w-0 bg-brand transition-all duration-300 group-hover:w-full md:block" />
      </span>

      <span className="text-light md:hidden">›</span>
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-6 text-secondary">
              Your trusted companion for Hajj & Umrah. Authentic guides, practical tips, and
              inspiring content.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {['f', '◎', '▶', '𝕏', '♪'].map((icon) => (
                <span
                  key={icon}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm text-secondary transition hover:border-brand hover:bg-brand-light hover:text-brand"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Quick Links</h3>

            <ul className="mt-5 flex flex-col gap-3">
              {footerExploreNav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Resources</h3>

            <ul className="mt-5 flex flex-col gap-3">
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

          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">About</h3>

            <ul className="mt-5 flex flex-col gap-3">
              {footerCompanyNav.concat(footerLegalNav.slice(0, 2)).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-xl font-bold text-primary">Need Help?</h3>

            <p className="mt-5 text-sm leading-6 text-secondary">
              Have questions about Hajj, Umrah, or our guides?
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:hello@muqaddastravel.com"
                className="group flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-brand"
              >
                <span>✉</span>

                <span className="relative">
                  hello@muqaddastravel.com
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <a
                href="tel:+923001234567"
                className="group flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-brand"
              >
                <span>☎</span>

                <span className="relative">
                  +92 300 1234567
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-5">
          <p className="text-center text-xs text-secondary">
            © {new Date().getFullYear()} MuqaddasTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
