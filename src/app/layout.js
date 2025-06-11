import { IBM_Plex_Sans } from 'next/font/google'

import './layout.scss'

import Header from '@/components/Header/Header'
import Page from '@/components/Page/Page'
import Footer from '@/components/Footer'

const inter = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500']
})

export const metadata = {
  title: 'Unstoppable - Bitcoin & Crypto Wallet',
  description: 'Unchain Assets | Go Borderless | Stay Private',
}

function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
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
