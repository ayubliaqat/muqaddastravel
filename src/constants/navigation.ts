export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Hajj',
    href: '/hajj',
  },
  {
    label: 'Umrah',
    href: '/umrah',
  },
  {
    label: 'Ziyarat',
    href: '/ziyarat',
    children: [
      {
        label: 'Makkah Ziyarat',
        href: '/ziyarat/makkah',
      },
      {
        label: 'Madinah Ziyarat',
        href: '/ziyarat/madinah',
      },
      {
        label: 'Historical Places',
        href: '/ziyarat/historical-places',
      },
    ],
  },
  {
    label: 'Guides',
    href: '/guides',
    children: [
      {
        label: 'Duas',
        href: '/duas',
      },
      {
        label: 'Travel Guide',
        href: '/travel-guide',
      },
      {
        label: 'Preparation',
        href: '/preparation',
      },
    ],
  },
  {
    label: 'Planning',
    href: '/planning',
  },
]

export const footerExploreNav: NavItem[] = [
  {
    label: 'Hajj',
    href: '/hajj',
  },
  {
    label: 'Umrah',
    href: '/umrah',
  },
  {
    label: 'Ziyarat',
    href: '/ziyarat',
  },
  {
    label: 'Duas',
    href: '/duas',
  },
  {
    label: 'Travel Guide',
    href: '/travel-guide',
  },
  {
    label: 'Preparation',
    href: '/preparation',
  },
  {
    label: 'Planning',
    href: '/planning',
  },
]

export const footerCompanyNav: NavItem[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerTrustNav: NavItem[] = [
  {
    label: 'Editorial Policy',
    href: '/editorial-policy',
  },
  {
    label: 'Authors',
    href: '/authors',
  },
  {
    label: 'References',
    href: '/references',
  },
]

export const footerLegalNav: NavItem[] = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Terms & Conditions',
    href: '/terms-and-conditions',
  },
  {
    label: 'Disclaimer',
    href: '/disclaimer',
  },
  {
    label: 'Cookie Policy',
    href: '/cookie-policy',
  },
]
