import Link from 'next/link'
import { Logo } from './Logo'
import { footerQuickLinks, footerGuidesNav } from '@/constants/navigation'

export function Footer() {
  return (
    <footer className="border-t border-border bg-section">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-secondary">
              Authentic, well-researched guides for Hajj and Umrah pilgrims travelling from the UK,
              USA and Canada.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-primary">Quick links</p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-primary">Guides</p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerGuidesNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-primary">Contact details</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-secondary">
              <li>Lahore, Pakistan</li>
              <li>
                <a
                  href="mailto:hello@muqaddastravel.com"
                  className="transition-colors hover:text-brand"
                >
                  hello@muqaddastravel.com
                </a>
              </li>
              <li>
                <a href="tel:+923001234567" className="transition-colors hover:text-brand">
                  +92 300 1234567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-xs text-secondary">
            © {new Date().getFullYear()} MuqaddasTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
