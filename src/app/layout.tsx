import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.fullName}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - จำหน่ายบัญชีโฆษณา Google Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    images: ['/images/og-image.jpg'],
    creator: '@adsaccountpro',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    types: {
      'application/rss+xml': `${SITE_CONFIG.url}/api/rss`,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'advertising',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0f',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-gray-950 text-gray-100 antialiased" suppressHydrationWarning>
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
