'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Page from '@/components/Page/Page'
import Engineered from '@/components/Engineered'
import PageHeader from '@/components/Page/PageHeader'
import CardBig from '@/components/Card/CardBig'
import MultiWallet from '@/components/Icon/MultiWallet'
import CardOverlay from '@/components/Card/CardOverlay'
import Chains from '@/components/Icon/Chains'
import Card from '@/components/Card/Card'
import IconSwitcher from '@/components/Icon/IconSwitcher'
import Backup from '@/components/Icon/Backup'
import SpamDetect from '@/components/Icon/SpamDetect'
import OpenSource from '@/components/Icon/OpenSource'
import NonCustodial from '@/components/Icon/NonCustodial'
import MultiWalletMarket from '@/components/Icon/MultiWalletMarket'
import Analytics from '@/components/Icon/Analytics'
import Dexes from '@/components/Icon/Dexes'
import WalletConnect from '@/components/Icon/WalletConnect'
import CardLearn from '@/components/Card/CardLearn'
import CardMedium from '@/components/Card/CardMedium'
import GradientViolet from '@/components/Icon/GradientViolet'
import GradientColor from '@/components/Icon/GradientColor'

function Home() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
  }, [])

  return (
    <main>
      <Hero />

      <Page darkest>
        <Engineered />
      </Page>

      <Page black>
        <div className="container">
          <PageHeader
            title="Easy Self Custody"
            description="Self-Custody is great, but existing tools can be complex and not easily accessible to most. We are here to make it easy."
            column
          />

          <CardBig
            title="Multi-Wallet"
            description="For easy management of many wallets within a single app while staying ultra secure."
            isDesktop={isDesktop}
          >
            <MultiWallet />
          </CardBig>
        </div>
      </Page>

      <Page darkest>
        <div className="container">
          <PageHeader
            title="Ease of use"
            description="Simplify asset management with an intuitive platform for unparalleled ease"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <CardOverlay
                title="Multi-Chain"
                description="Supports 16 Blockchains and over 3000 tokens."
                gradient={<GradientViolet />}
                isDesktop={isDesktop}
              >
                <Chains />
              </CardOverlay>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Easy Migration"
                description="Simplify your transition seamlessly with an easy migration solution."
                gradient={<GradientColor color="yellow" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="migration" />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Easy Backup"
                description="Options to backup encrypted wallets to iCloud or offline storage."
                gradient={<GradientColor color="blue" fromZero />}
                isDesktop={isDesktop}
              >
                <Backup />
              </Card>
            </div>
          </div>
        </div>
      </Page>

      <Page black>
        <div className="container">
          <PageHeader
            title="Secure"
            description="Secure your digital assets with peace of mind using our advanced platform"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3 order-md-2 order-lg-1">
              <Card
                title="Spam Detector"
                description="This improvement boosts wallet security against address poisoning attacks."
                gradient={<GradientColor color="green" fromZero />}
                isDesktop={isDesktop}
                isBlack
              >
                <SpamDetect />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6 order-md-1 order-lg-2">
              <CardOverlay title="Duress Mode" description="A specialized mode designed to keep selected wallets safe under coercion." isBlack>
                <img src="/images/duress/img.png" alt="" width="365" />
              </CardOverlay>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 order-md-3 order-lg-3">
              <Card
                title="Private Tools"
                description="Built for strong privacy. No data collected."
                gradient={<GradientColor color="yellow" />}
                isDesktop={isDesktop}
                isBlack
              >
                <IconSwitcher icons="private-tools" />
              </Card>
            </div>
          </div>
        </div>
      </Page>

      <Page darkest>
        <div className="container">
          <PageHeader
            title="Reliable"
            description="Ensure safe and secure management of your digital assets"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Open Source"
                description="Use an open source wallet to manage your cryptocurrencies securely and transparently."
                gradient={<GradientColor color="green" fromZero />}
                isDesktop={isDesktop}
              >
                <OpenSource />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Non-Custodial"
                description="Trully self-custodial wallet that gives users unconditional control."
                gradient={<GradientColor color="yellow" />}
                isDesktop={isDesktop}
              >
                <NonCustodial />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6">
              <CardMedium
                className="card-bg-violet"
                title="Verified"
                description="The security and transparency of the wallet has been tested and approved by reputable sources."
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="verified" width={509} height={96} />
              </CardMedium>
            </div>
          </div>
        </div>
      </Page>

      <Page black>
        <div className="container">
          <PageHeader
            title="Easy Analytics"
            description="Explore detailed cryptocurrency market insights and comprehensive asset analytics."
            column
          />
          <CardBig
            title="Market"
            description="Explore detailed cryptocurrency market insights and comprehensive asset analytics."
            isDesktop={isDesktop}
            isBlack
          >
            <MultiWalletMarket />
          </CardBig>
        </div>
      </Page>

      <Page darkest>
        <div className="container">
          <PageHeader
            title="Analytics"
            description="Get a set of the best tools for  researching"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Market Ranks"
                description="Effortlessly analyze market dynamics through category-leading asset tracking with analytics."
                gradient={<GradientColor color="violet" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="market-ranks" />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Market Tools"
                description="Effortlessly explore and analyze market trends with powerful tools for efficient insights."
                gradient={<GradientColor color="yellow" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="market-tools" />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6">
              <CardOverlay
                title="Coin Analytics"
                description="Extensive exchange data. On-chain token data. Token rank lists based on data."
                gradient={<GradientColor color="grey" />}
                isDesktop={isDesktop}
              >
                <Analytics />
              </CardOverlay>
            </div>
          </div>
        </div>
      </Page>

      <Page black>
        <div className="container">
          <PageHeader
            title="DeFi Enabled"
            description="Interact with any DeFi service "
          />

          <div className="row py-5 g-3">
            <div className="col-md-6">
              <CardOverlay
                title="DEXes"
                description="Integrates latest updates from all major DEXes incl. 1INCH, Uniswap, Pancake etc."
                gradient={<GradientViolet color="yellow" />}
                isDesktop={isDesktop}
                isBlack
              >
                <Dexes />
              </CardOverlay>
            </div>
            <div className="col-md-6">
              <CardMedium
                className="card-bg-violet"
                title="Wallet Connect"
                description="Interact with any DeFi service via WalletConnect V1 and V2.he security and transparency of the wallet has been tested and approved by reputable sources."
                isDesktop={isDesktop}
                isBlack
              >
                <WalletConnect isMobile={!isDesktop} />
              </CardMedium>
            </div>
          </div>
        </div>
      </Page>

      <Page darkest>
        <div className="container">
          <PageHeader
            title="Easy Learning"
            description="Explore detailed cryptocurrency market insights and comprehensive asset analytics."
            column
          />
          <div className="row py-5 g-3">
            <div className="col-md-6 col-lg-3">
              <CardLearn title="Cryptocurrency Explained" src="/images/learn/crypto.png" isGuide withMargin />
            </div>
            <div className="col-md-6 col-lg-3">
              <CardLearn title="Cryptocurrency Explained" src="/images/learn/bitcoin.png" isGuide withMargin />
            </div>
            <div className="col-md-6 col-lg-3">
              <CardLearn title="Cryptocurrency Explained" src="/images/learn/wallet.png" isGuide withMargin />
            </div>
            <div className="col-md-6 col-lg-3">
              <CardLearn title="Cryptocurrency Explained" src="/images/learn/private-keys.png" isGuide withMargin />
            </div>
          </div>
          <div className="text-end d-flex justify-content-end">
            <a className="text-warning text-decoration-none d-flex align-items-center" href="/">
              <Image src="/icons/arrow-right.png" alt="" height="20" width="20" />
              <span className="ms-3 fs-4">More Guides</span>
            </a>
          </div>
        </div>

        <div className="container">
          <PageHeader
            title="DeFi Enabled"
            description="Interact with any DeFi service "
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardLearn
                title="Beginner"
                description="Integrates latest updates from all major DEXes incl. 1INCH, Uniswap, Pancake etc."
                src="/images/learn/course-beginner.png"
                isGuide={false} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <CardLearn
                title="Advanced"
                description="Integrates latest updates from all major DEXes incl. 1INCH, Uniswap, Pancake etc."
                src="/images/learn/course-advanced.png"
                isGuide={false} />
            </div>
            <div className="col-md-12 col-lg-4">
              <CardLearn
                title="Professional"
                description="Integrates latest updates from all major DEXes incl. 1INCH, Uniswap, Pancake etc."
                src="/images/learn/course-profi.png"
                isGuide={false} />
            </div>
          </div>
        </div>
      </Page>
    </main>
  )
}

export default Home