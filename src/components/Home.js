'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero/Hero'
import Page from '@/components/Page/Page'
import PageHeader from '@/components/Page/PageHeader'
import CardBig from '@/components/Card/CardBig'
import CardPartner from '@/components/Card/CardPartner'
import CardMedium from '@/components/Card/CardMedium'
import CardOverlay from '@/components/Card/CardOverlay'
import Card from '@/components/Card/Card'
import Roadmap from '@/components/Roadmap/Roadmap'
import Videos from '@/components/Video/Videos'
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

function Home() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
  }, [])

  return (
    <main>
      <Hero />

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
            title="Our Partners"
            description="Our partners highlight Unstoppable Wallet’s innovation, privacy, and user-first design:"
            column
          />
          <div className="row py-5 g-3">
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/bitcoin.png"
                logoUser="/images/partners/bitcoin-user.png"
                username="Martti Malmi"
                usernameInfo="Bitcoin.org Founder"
                text="Unstoppable Wallet is a breakthrough in decentralized finance, giving users full control over Bitcoin and other assets."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/ethereum.png"
                logoUser="/images/partners/ethereum-user.png"
                username="Vitalik Buterin"
                usernameInfo="CEO of the Ethereum"
                text="A wallet that prioritizes privacy and freedom, with excellent Ethereum and multi-asset support."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/scrutiny.png"
                logoUser="/images/partners/scrutiny-user.png"
                username="Leo Wandersleb"
                usernameInfo="Wallet Reviewer, Founder"
                text="A secure and transparent wallet that delivers excellent multi-asset support and user independence."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/zcash.png"
                logoUser="/images/partners/zcash-user.png"
                username="Zooko Wilcox-O'Hearn"
                usernameInfo="CEO of the ECC"
                text="Unstoppable is the first multi-coin wallet that supports Bitcoin, Ethereum, and fully shielded Zcash, as well as other coins, and it has a strong, user-centric architecture in which the users own their own keys and their own privacy."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/blockchair.png"
                logoUser="/images/partners/blockchair-user.png"
                username="Edige Davletgaliyev"
                usernameInfo="Cofounder of the Blockchair"
                text="We have always been looking for solutions that allow people to manage their assets safely and conveniently. A great tool for both professionals and beginners!"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/blum.png"
                logoUser="/images/partners/blum-user.png"
                username="Gleb Kostarev"
                usernameInfo="CEO & Cofounder of the Blum"
                text="It’s rare to find a product that combines ease of use with top-notch security like Unstoppable Wallet. This is a wallet I would recommend to anyone who values privacy and reliability."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/ivfun.png"
                logoUser="/images/partners/ivfun-user.png"
                username="Ruslan Khairullin"
                usernameInfo="CEO of the IvFun"
                text="Unstoppable Wallet is a breakthrough in decentralized finance, giving users full control over Bitcoin and other assets."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/immunfi.png"
                logoUser="/images/partners/immunfi-user.png"
                username="Nikita Starshash"
                usernameInfo="Cofounder of the StarsHash"
                text="We have always been looking for solutions that allow people to manage their assets safely and conveniently. A great tool for both professionals and beginners!"
              />
            </div>
          </div>
        </div>
      </Page>

      <Page dark>
        <div className="container">
          <PageHeader
            title="Smart Insights"
            description="Short videos to guide you through Unstoppable Wallet, crypto industry insights, and security tips."
            column
          />
          <div className="row py-5 g-3">
            <Videos />
          </div>
        </div>
      </Page>

      <Page darkest>
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
