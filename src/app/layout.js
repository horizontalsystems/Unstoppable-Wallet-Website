import { IBM_Plex_Sans } from 'next/font/google'

import './layout.scss'

import Header from '@/components/Header/Header'
import Page from '@/components/Page/Page'
import Footer from '@/components/Footer'

const inter = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500']
})

const siteUrl = 'https://unstoppable.money'
const siteName = 'Unstoppable Wallet'
const description = 'Unstoppable is a secure, non-custodial Bitcoin & crypto wallet for true self-custody. Multi-chain, open-source and private. Unchain Assets | Go Borderless | Stay Private.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Unstoppable — Bitcoin & Crypto Wallet',
    template: '%s | Unstoppable Wallet',
  },
  description,
  applicationName: siteName,
  keywords: [
    'Unstoppable Wallet',
    'Bitcoin wallet',
    'Monero wallet',
    'ZCash wallet',
    'crypto wallet',
    'non-custodial wallet',
    'self-custody',
    'open-source wallet',
    'Ethereum wallet',
    'DeFi wallet',
    'private crypto wallet',
    'multi-chain wallet',
  ],
  authors: [{ name: 'Horizontal Systems', url: 'https://horizontalsystems.io' }],
  creator: 'Horizontal Systems',
  publisher: 'Horizontal Systems',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: 'Unstoppable — Bitcoin & Crypto Wallet',
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unstoppable — Bitcoin & Crypto Wallet',
    description,
    site: '@unstoppablebyhs',
    creator: '@unstoppablebyhs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/header-logo.svg`,
      sameAs: [
        'https://x.com/unstoppablebyhs',
        'https://t.me/unstoppable_announcements',
        'https://github.com/horizontalsystems/unstoppable-wallet-android',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      name: siteName,
      operatingSystem: 'Android, iOS',
      applicationCategory: 'FinanceApplication',
      description,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  ],
}

function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />

        {children}

        <Page black>
          <Footer />
        </Page>
      </body>
    </html>
  )
}

export default RootLayout
