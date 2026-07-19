export type NavItem = {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Hajj guide', href: '/hajj-guide' },
  { label: 'Umrah guide', href: '/umrah-guide' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerQuickLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy policy', href: '/privacy-policy' },
]

export const footerGuidesNav: NavItem[] = [
  { label: 'Umrah guide', href: '/umrah-guide' },
  { label: 'Hajj guide', href: '/hajj-guide' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
]
