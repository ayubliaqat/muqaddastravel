import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './styles.css'

const playfairDisplay = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MuqaddasTravel | Hajj & Umrah Guides',
  description:
    'Authentic, well-researched Hajj and Umrah guides, checklists, duas and travel resources for pilgrims from the UK, USA, Canada and beyond.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-primary font-body">
        {children}
      </body>
    </html>
  )
}
