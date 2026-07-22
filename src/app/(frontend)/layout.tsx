import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import './styles.css'

/* -------------------------------------------------------------------------- */
/* Fonts */
/* -------------------------------------------------------------------------- */

const heading = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

/* -------------------------------------------------------------------------- */
/* Site Configuration */
/* -------------------------------------------------------------------------- */

const site = {
  name: 'MuqaddasTravel',

  url: 'https://muqaddastravel.com',

  title: 'MuqaddasTravel | Trusted Hajj & Umrah Guides',

  description:
    'Trusted Hajj and Umrah guides for pilgrims from the UK, USA, Canada, Australia and around the world. Find scholar-reviewed articles, step-by-step rituals, duas, travel guides, preparation checklists and ziyarat resources.',

  email: 'mayub7540@gmail.com',

  locale: 'en_GB',

  keywords: [
    'Hajj',
    'Umrah',
    'Hajj Guide',
    'Umrah Guide',
    'Hajj Checklist',
    'Umrah Checklist',
    'Hajj Preparation',
    'Umrah Preparation',
    'Hajj Packing List',
    'Umrah Packing List',
    'Travel Guide',
    'Planning',
    'Ziyarat',
    'Duas',
    'Islamic Travel',
    'Pilgrimage',
    'Saudi Arabia',
    'Makkah',
    'Madinah',
    'Hajj from UK',
    'Umrah from UK',
    'Hajj from USA',
    'Umrah from USA',
    'Hajj from Canada',
    'Umrah from Canada',
    'Hajj from Australia',
    'Umrah from Australia',
  ],
}

/* -------------------------------------------------------------------------- */
/* Metadata */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: '%s | MuqaddasTravel',
  },

  description: site.description,

  applicationName: site.name,

  authors: [
    {
      name: site.name,
    },
  ],

  creator: site.name,

  publisher: site.name,

  category: 'Travel',

  classification: 'Travel & Religious Guides',

  keywords: site.keywords,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,

    images: [
      {
        // TODO: Replace with your final Open Graph image
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MuqaddasTravel',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,

    // TODO: Replace with your final OG image
    images: ['/images/og-image.png'],

    // TODO: Add your X username
    // creator: '@muqaddastravel',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  referrer: 'origin-when-cross-origin',

  other: {
    language: 'English',
    audience: 'Pilgrims from the United Kingdom, United States, Canada, Australia and worldwide',
  },

  icons: {
    // TODO: Replace with your final icons
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  // TODO: Add Google Search Console verification
  /*
  verification: {
    google: 'YOUR_SEARCH_CONSOLE_CODE',
  },
  */
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F6B43',
  colorScheme: 'light',
}
/* -------------------------------------------------------------------------- */
/* Root Layout */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-background font-body text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': `${site.url}#organization`,

                name: site.name,
                url: site.url,
                description: site.description,

                logo: {
                  '@type': 'ImageObject',

                  // TODO: Replace with your final logo
                  url: `${site.url}/images/logo.png`,
                },

                email: site.email,

                areaServed: ['United Kingdom', 'United States', 'Canada', 'Australia', 'Worldwide'],

                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'Customer Support',
                  email: site.email,
                  availableLanguage: ['English'],
                },

                sameAs: [
                  // TODO: Add your social profiles
                  // 'https://facebook.com/muqaddastravel',
                  // 'https://instagram.com/muqaddastravel',
                  // 'https://x.com/muqaddastravel',
                  // 'https://youtube.com/@muqaddastravel',
                  // 'https://www.linkedin.com/company/muqaddastravel',
                ],
              },

              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${site.url}#website`,

                name: site.name,
                url: site.url,
                description: site.description,

                inLanguage: 'en-GB',

                publisher: {
                  '@id': `${site.url}#organization`,
                },

                potentialAction: {
                  '@type': 'SearchAction',

                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${site.url}/search?q={search_term_string}`,
                  },

                  'query-input': 'required name=search_term_string',
                },
              },

              {
                '@context': 'https://schema.org',
                '@type': 'WebPage',

                name: site.title,

                url: site.url,

                description: site.description,

                isPartOf: {
                  '@id': `${site.url}#website`,
                },

                about: {
                  '@id': `${site.url}#organization`,
                },

                inLanguage: 'en-GB',
              },
            ]),
          }}
        />

        <div className="flex min-h-screen flex-col">
          <AnnouncementBar />
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
