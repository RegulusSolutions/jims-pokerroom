import type { Metadata, Viewport } from 'next';
import { Prata, Jost, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import LiveBar from '@/components/layout/LiveBar';
import AgeGate from '@/components/layout/AgeGate';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { site } from '@/lib/site';

/* Display: Prata — a Didone. High stroke contrast reads as gold leaf on black.
   Body: Jost — a Futura revival, the geometric register of Deco-era rooms.
   Data: JetBrains Mono — blinds, stakes and countdowns are numbers, not prose. */
const display = Prata({ subsets: ['latin'], weight: '400', variable: '--font-display', display: 'swap' });
const sans = Jost({ subsets: ['latin'], weight: ['200', '300', '400', '500'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Casino Marina Colombo`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Diamond Lounge',
    'Casino Marina Colombo',
    'VIP lounge Colombo',
    "Texas Hold'em Colombo",
    'Teen Patti Colombo',
    'Blackjack Baccarat Colombo',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
    title: `${site.name} — Casino Marina Colombo`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#050506',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.venue}, ${site.address.building}, ${site.address.street}`,
    addressLocality: 'Colombo',
    postalCode: '01000',
    addressCountry: 'LK',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.address.lat, longitude: site.address.lng },
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AgeGate />
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <LiveBar />
      </body>
    </html>
  );
}
