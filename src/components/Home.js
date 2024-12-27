'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Hero from '@/components/Hero/Hero'
import Page from '@/components/Page/Page'
import PageHeader from '@/components/Page/PageHeader'
import Engineered from '@/components/Engineered'
import CardBig from '@/components/Card/CardBig'
import CardLearn from '@/components/Card/CardLearn'
import CardMedium from '@/components/Card/CardMedium'
import CardOverlay from '@/components/Card/CardOverlay'
import Card from '@/components/Card/Card'
import Roadmap from '@/components/Roadmap/Roadmap'
import MultiWallet from '@/components/Animated/MultiWallet'
import Chains from '@/components/Animated/Chains'
import IconSwitcher from '@/components/Animated/IconSwitcher'
import Backup from '@/components/Animated/Backup'
import SpamDetect from '@/components/Animated/SpamDetect'
import OpenSource from '@/components/Animated/OpenSource'
import NonCustodial from '@/components/Animated/NonCustodial'
import MultiWalletMarket from '@/components/Animated/MultiWalletMarket'
import Analytics from '@/components/Animated/Analytics'
import Dexes from '@/components/Animated/Dexes'
import WalletConnect from '@/components/Animated/WalletConnect'
import GradientImage from '@/components/Animated/GradientImage'
import GradientImageBottomRight from '@/components/Animated/GradientImageBottomRight'
import GradientImageDuress from '@/components/Animated/GradientImageDuress'
import DuressMode from '@/components/Animated/DuressMode'
import Tickers from '@/components/Tickers'

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
            title="Ownership"
            description="Self-custody is great, but existing tools are complex and not accessible to most."
            column
          />

          <CardBig
            title="The Easy Way"
            description="Discover an easy way to manage multiple crypto portfolios within a single tool while staying ultra secure."
            isDesktop={isDesktop}
          >
            <MultiWallet />
          </CardBig>
        </div>
      </Page>

      <Page darkest>
        <div className="container">
          <PageHeader
            title="Easy"
            description="Ownership Made Easy"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <CardOverlay
                title="Universal"
                description="Supports 99% of all crypto assets. One app for all coins."
                gradient={<GradientImageBottomRight color="purple-1x" />}
                isDesktop={isDesktop}
              >
                <Chains />
              </CardOverlay>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Intuitive"
                description="Built for ease of use without compromise on decentralization and security."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="migration" />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Practical"
                description="Easy to migrate, backup and restore. Built for real-world use cases."
                gradient={<GradientImage color="blue" />}
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
            description="Ownership Made Secure"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3 order-md-2 order-lg-1">
              <Card
                title="Anti-Tempering"
                description="Industry leading safety measures against device loss or malware."
                gradient={<GradientImage color="green" fromZero />}
                isDesktop={isDesktop}
                isBlack
              >
                <SpamDetect />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6 order-md-1 order-lg-2">
              <CardOverlay
                title="Duress Mode"
                description="A specialized mode designed to keep selected wallets safe under coercion."
                gradient={<GradientImageDuress color="red-1x" color2="green-1x" />}
                isDesktop={isDesktop}
                isBlack>
                <DuressMode />
              </CardOverlay>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 order-md-3 order-lg-3">
              <Card
                title="Anti-Tracking"
                description="Advanced privacy features against a dozen of potential attack vectors."
                gradient={<GradientImage color="yellow" />}
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
            description="Ownership Made Reliable"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Open Source"
                description="Publicly open and audited code. Transparent production process."
                gradient={<GradientImage color="green" fromZero />}
                isDesktop={isDesktop}
              >
                <OpenSource />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Non-Custodial"
                description="Built from the ground up to guarantee self-custody and unconditional access."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
              >
                <NonCustodial />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6">
              <CardMedium
                className="card-bg-violet"
                title="Verified"
                description="The security of the wallet has been tested, and the open nature of the code has been verified."
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
            title="Growth"
            description="While crypto is going mainstream, it lacks professional-grade investment tools."
            column

          />
          <CardBig
            title="The Professional Way"
            description="Grow asset portfolio and explore markets with professional analytics and research tools."
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
            description="Analytics Done Professionally"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Market Trends"
                description="Explore top performers, market liquidity, ETF inflows, best performing sectors and more."
                gradient={<GradientImage color="purple" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="market-ranks" />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Filters & Signals"
                description="Research assets based on lots of parameters i.e. market data, onchain activity, price performance and technical analysis signals."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="market-tools" />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6">
              <CardOverlay
                className="card-bg-grey"
                title="Ranks & Analytics"
                description="Explore token analytics and token rank lists based on onchain activity and market liquidity parameters."
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
            description="Interact with any DeFi service"
          />

          <div className="row py-5 g-3">
            <div className="col-md-6">
              <CardOverlay
                title="DEXes"
                description="Integrates latest updates from all major DEXes incl. 1INCH, Uniswap, Pancake etc."
                gradient={<GradientImageBottomRight color="yellow-1x" />}
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
            title="Analytics"
            description="Get a set of the best tools for researching"
          />

          <div className="py-5 g-3">
            <Tickers />
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
            <a href="https://litrex.academy/"
               className="text-warning text-decoration-none d-flex align-items-center"
               rel="noopener noreferrer"
               target="_blank"
            >
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

      <Page black>
        <div className="container">
          <PageHeader
            title="Proof of Work"
            description="Master the fundamentals and gain insights into various crypto projects through straightforward explanations"
            column
          />

          <Roadmap isDesktop={isDesktop} />
        </div>
      </Page>
    </main>
  )
}

export default Home
