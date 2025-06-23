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
            title="Easy Self-Custody"
            description="Self-Custody is great, but existing tools are complex. Unstoppable fixes that."
            column
          />

          <CardBig
            title="Multi-Wallet"
            description="For easy & convenient multi-wallet self-custody while staying ultra secure."
            isDesktop={isDesktop}
            isBlack
          >
            <MultiWallet />
          </CardBig>
        </div>
      </Page>

      <Page darkest>
        <div className="container">
          <PageHeader
            title="Intuitive & Extensive"
            description="Simplify crypto management"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <CardOverlay
                title="Multi-Chain"
                description="Intuitive wallet app to conveniently store and manage all crypto assets."
                gradient={<GradientImageBottomRight color="purple-1x" />}
                isDesktop={isDesktop}
              >
                <Chains />
              </CardOverlay>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Universal"
                description="Allows to migrate existing wallets to/from other wallet apps."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
              >
                <IconSwitcher icons="migration" />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Practical"
                description="Easy to manage, backup and restore multiple wwallets. Built for humans."
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
            title="Reliable & Transparent"
            description="Get reliable and verified security"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Open-Source"
                description="Unstoppable is a verifiably open source wallet which is recommended by highly respected sources."
                gradient={<GradientImage color="green" fromZero />}
                isDesktop={isDesktop}
                isBlack
              >
                <OpenSource />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Non-Custodial"
                description="Engineered in accordance with all security protocols to deliver secure self-custody."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
                isBlack
              >
                <NonCustodial />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6">
              <CardMedium
                className="card-bg-violet"
                title="Audited"
                description="The integrity and security of the app is continuously monitored by community and regularly audited by reputable sources."
                isDesktop={isDesktop}
                isBlack
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
            title="Secure & Private"
            description="Security for real-world threats"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3 order-md-2 order-lg-1">
              <Card
                title="Phishing Protection"
                description="Automated protection against sophisticated address poisoning attacks."
                gradient={<GradientImage color="green" fromZero />}
                isDesktop={isDesktop}
              >
                <SpamDetect />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6 order-md-1 order-lg-2">
              <CardOverlay
                title="Duress Mode"
                description="A smart security mode designed to guarantee safety under coercion."
                gradient={<GradientImageDuress color="red-1x" color2="green-1x" />}
                isDesktop={isDesktop}
              >
                <DuressMode />
              </CardOverlay>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 order-md-3 order-lg-3">
              <Card
                title="Privacy"
                description="Built for strong privacy on many layers. No user data collected."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
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
            description="Secure interaction with decentralized finance apps."
          />

          <div className="row py-5 g-3">
            <div className="col-md-6">
              <CardOverlay
                title="DEXes"
                description="Integrates decentralized exchanges to enable anonymous asset swaps across many blockchains."
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
                description="Interact with any DeFi service via WalletConnect protocol in a secure manner."
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
            description="Onchain and market analytics for over 5000 assets that offers the most comprehensive analytics on the market."
            column

          />
          <CardBig
            title="Market Data"
            description="Explore market trends, ETF flows and crypto sector insights."
            isDesktop={isDesktop}
          >
            <MultiWalletMarket />
          </CardBig>
        </div>
      </Page>

      <Page black>
        <div className="container">
          <PageHeader
            title="Token Analytics"
            description="Offchain and onchain token analytics"
          />

          <div className="row py-5 g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Market Overview"
                description="Explore and analyze performance trends over different sectors."
                gradient={<GradientImage color="purple" />}
                isDesktop={isDesktop}
                isBlack
              >
                <IconSwitcher icons="market-ranks" />
              </Card>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Card
                title="Trader's Tools"
                description="Effortlessly explore and analyze market trends with powerful tools for efficient insights."
                gradient={<GradientImage color="yellow" />}
                isDesktop={isDesktop}
                isBlack
              >
                <IconSwitcher icons="market-tools" />
              </Card>
            </div>
            <div className="col-md-12 col-lg-6">
              <CardOverlay
                className="card-bg-grey"
                title="Token Analytics"
                description="Extensive exchange data. On-chain token data. Token rank lists over various parameters."
                isDesktop={isDesktop}
                isBlack
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
            description="Highlighting our commitment to security, privacy, and user-oriented design."
            column
          />
          <div className="row py-5 g-3">
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
                logo="/images/partners/nym.png"
                logoUser="/images/partners/nym-user.png"
                text="The support of Unstoppable Money for privacy is now going to the next level, first with support of Shielded ZCash and now with the support of Nym, whose mixnet can protect the IP address and metadata of its users."
                username="Harry Halpin"
                usernameInfo="CEO and co-founder Nym Technologies"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/drpc.png"
                logoUser="/images/partners/drpc-user.png"
                text="We highly recommend Unstoppable Wallet to our users and partners, and our team uses it internally. At dRPC, we value privacy and reliability, and appreciate Unstoppable's commitment to open-source efforts."
                username="Constantine Zaitcev"
                usernameInfo="CEO at dRPCorg"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/bitcoin.png"
                text="Unstoppable Wallet is listed on Bitcoin.org, one of the most trusted and community- driven resources for Bitcoin education and wallet recommendations. Our presence on Bitcoin.org underscores our commitment to non-custodial security, privacy, and transparency."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/ethereum.png"
                text="Unstoppable Wallet is featured on Ethereum.org, the official website of the Ethereum ecosystem, as a secure and open-source wallet for managing Ethereum and ERC-20 tokens. This listing reflects our dedication to decentralized finance and self-custody."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/scrutiny.png"
                text="Unstoppable Wallet has passed WalletScrutiny's verification process, demonstrating that our app is open-source and verifiable. WalletScrutiny evaluates wallets to ensure they match their published source code, reinforcing trust and security in the crypto community."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/f-droid.png"
                text="Unstoppable Wallet is available on F-Droid, a well-known repository for open-source Android apps. Being listed on F-Droid highlights our commitment to privacy, transparency, and open-source principles, allowing users to install our app from a trusted, independent source."
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardPartner
                logo="/images/partners/immunfi.png"
                text="Security is a top priority for Unstoppable Wallet, which is why we are featured on Immunefi, a leading bug bounty platform for Web3 projects. Our listing on Immunefi helps us engage with security researchers to proactively identify and resolve vulnerabilities, ensuring a safer experience for our users."
              />
            </div>
          </div>
        </div>
      </Page>

      <Page black>
        <div className="container">
          <PageHeader
            title="Proof of Work"
            description="Take a look at the milestones we’ve completed and the progress that defines Unstoppable Wallet."
            column
          />

          <Roadmap isDesktop={isDesktop} />
        </div>
      </Page>

      <Page darkest>
        <div className="container">
          <PageHeader
            title="Support the Project!"
            description="We are here to deliver privacy and security that is both easy and beautiful. We are fully self funded without VC backing. Your support matters!"
            column
          />

          <Donate />
        </div>
      </Page>
    </main>
  )
}

export default Home
