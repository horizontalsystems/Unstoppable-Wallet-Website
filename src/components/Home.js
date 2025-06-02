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
import Donate from '@/components/Donate/Donate'

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
                gradient={<GradientImageBottomRight color="purple-1x" />}
                isDesktop={isDesktop}
              >
                <Chains />
              </CardOverlay>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Easy Migration"
                description="Migrate to/from other wallets. Any seed length or language."
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
            title="Reliable"
            description="Ensure safe and secure management of your digital assets"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Open Source"
                description="Use an open source wallet to manage your cryptocurrencies securely and transparently."
                gradient={<GradientImage color="green" fromZero />}
                isDesktop={isDesktop}
              >
                <OpenSource />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Non-Custodial"
                description="Trully self-custodial wallet that gives users unconditional control."
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
                description="The security and transparency of the wallet has been tested and approved by reputable sources."
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="verified" width={509} height={96} />
              </CardMedium>
            </div>
          </div>
        </div>
      </Page>


      <Page darkest>
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
                title="Private Tools"
                description="Built for strong privacy. No data collected."
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
                description="Interact with any DeFi service via WalletConnect V1 and V2."
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
            title="Easy Analytics"
            description="We aggregate data from blockchains and cryptocurrency exchanges to offer the most comprehensive analytics"
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

      <Page black>
        <div className="container">
          <PageHeader
            title="Analytics"
            description="Get a set of the best tools for researching"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Market Ranks"
                description="Effortlessly analyze market dynamics through category-leading asset tracking with analytics."
                gradient={<GradientImage color="purple" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="market-ranks" />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Market Tools"
                description="Effortlessly explore and analyze market trends with powerful tools for efficient insights."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="market-tools" />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6">
              <CardOverlay
                className="card-bg-grey"
                title="Coin Analytics"
                description="Extensive exchange data. On-chain token data. Token rank lists based on data."
                isDesktop={isDesktop}
              >
                <Analytics />
              </CardOverlay>
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

      <Page black>
        <div className="container">
          <PageHeader
            title="Master the Wallet"
            description="Explore short, easy-to-follow tutorials that guide you through using all the features of Unstoppable Wallet."
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
            description="Take a look at the milestones we’ve completed and the progress that defines Unstoppable Wallet."
            column
          />

          <Roadmap isDesktop={isDesktop} />
        </div>
      </Page>

      <Page black>
        <div className="container">
          <PageHeader
            title="Support the Project!"
            description="Together, with your support, we can make this app even better!"
            column
          />

          <Donate />
        </div>
      </Page>
    </main>
  )
}

export default Home
