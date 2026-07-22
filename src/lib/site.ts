export const siteConfig = {
  /* -------------------------------------------------------------------------- */
  /* General */
  /* -------------------------------------------------------------------------- */

  name: 'MuqaddasTravel',

  shortName: 'MuqaddasTravel',

  url: 'https://muqaddastravel.com',

  title: 'Trusted Hajj & Umrah Guides',

  description:
    'Trusted Hajj and Umrah guides for pilgrims from the UK, USA, Canada, Australia and around the world.',

  email: 'mayub7540@gmail.com',

  phone: '', // Add later

  language: 'en-GB',

  timezone: 'UTC',

  copyright: `© ${new Date().getFullYear()} MuqaddasTravel. All rights reserved.`,

  /* -------------------------------------------------------------------------- */
  /* Branding */
  /* -------------------------------------------------------------------------- */

  logo: '/images/logo.svg', // Replace later

  logoDark: '/images/logo-dark.svg', // Replace later

  favicon: '/favicon.ico',

  ogImage: '/images/og-image.png', // Replace later

  /* -------------------------------------------------------------------------- */
  /* Social */
  /* -------------------------------------------------------------------------- */

  social: {
    facebook: '',

    instagram: '',

    x: '',

    youtube: '',

    linkedin: '',
  },

  /* -------------------------------------------------------------------------- */
  /* Countries */
  /* -------------------------------------------------------------------------- */

  supportedCountries: [
    'United Kingdom',
    'United States',
    'Canada',
    'Australia',
    'New Zealand',
    'Ireland',
    'Worldwide',
  ],

  /* -------------------------------------------------------------------------- */
  /* Navigation */
  /* -------------------------------------------------------------------------- */

  navigation: [
    {
      title: 'Home',
      href: '/',
    },

    {
      title: 'Explore',
      href: '#',
    },

    {
      title: 'About',
      href: '/about',
    },

    {
      title: 'Contact',
      href: '/contact',
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Mega Menu */
  /* -------------------------------------------------------------------------- */

  megaMenu: [
    {
      title: 'Guides',

      items: [
        {
          title: 'Hajj',
          href: '/hajj',
        },

        {
          title: 'Umrah',
          href: '/umrah',
        },

        {
          title: 'Ziyarat',
          href: '/ziyarat',
        },

        {
          title: 'Duas',
          href: '/duas',
        },
      ],
    },

    {
      title: 'Planning',

      items: [
        {
          title: 'Travel Guide',
          href: '/travel-guide',
        },

        {
          title: 'Preparation',
          href: '/preparation',
        },

        {
          title: 'Planning',
          href: '/planning',
        },
      ],
    },

    {
      title: 'Resources',

      items: [
        {
          title: 'Blog',
          href: '/blog',
        },

        {
          title: 'News',
          href: '/news',
        },

        {
          title: 'About',
          href: '/about',
        },

        {
          title: 'Contact',
          href: '/contact',
        },
      ],
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Footer */
  /* -------------------------------------------------------------------------- */

  footer: {
    company: [
      {
        title: 'About',
        href: '/about',
      },

      {
        title: 'Contact',
        href: '/contact',
      },
    ],

    guides: [
      {
        title: 'Hajj',
        href: '/hajj',
      },

      {
        title: 'Umrah',
        href: '/umrah',
      },

      {
        title: 'Ziyarat',
        href: '/ziyarat',
      },

      {
        title: 'Duas',
        href: '/duas',
      },
    ],

    planning: [
      {
        title: 'Travel Guide',
        href: '/travel-guide',
      },

      {
        title: 'Preparation',
        href: '/preparation',
      },

      {
        title: 'Planning',
        href: '/planning',
      },
    ],

    legal: [
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
      },

      {
        title: 'Terms & Conditions',
        href: '/terms-and-conditions',
      },

      {
        title: 'Disclaimer',
        href: '/disclaimer',
      },

      {
        title: 'Cookie Policy',
        href: '/cookie-policy',
      },

      {
        title: 'Editorial Policy',
        href: '/editorial-policy',
      },
    ],
  },

  /* -------------------------------------------------------------------------- */
  /* Search */
  /* -------------------------------------------------------------------------- */

  search: {
    placeholder: 'Search guides, duas, articles...',
  },

  /* -------------------------------------------------------------------------- */
  /* Newsletter */
  /* -------------------------------------------------------------------------- */

  newsletter: {
    title: 'Stay Updated',

    description:
      'Get the latest Hajj and Umrah guides, travel advice and pilgrimage updates delivered to your inbox.',
  },
} as const

export type SiteConfig = typeof siteConfig
