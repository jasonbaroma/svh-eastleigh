import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { siteUrl } from '@/lib/company'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Van, Car, Minibus and Truck Hire in Eastleigh | Southern Van Hire',
  description: 'Southern Van Hire Eastleigh offers flexible van, car, minibus and truck hire with maintained vehicles, practical support and delivery options.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

