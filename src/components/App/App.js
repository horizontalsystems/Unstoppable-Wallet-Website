import React, { useState } from 'react'

import Home from '../Home'
import Page from '../Page'
import Feature from '../Feature'
import Footer from '../Footer/Footer'
import Join from '../Join/Join'
import GetWallet from '../GetWallet'
import Quote from '../Quote/Quote'
import FeaturedIn from '../FeaturedIn'
import Roadmap from '../Roadmap/Roadmap'
import OpenSource from '../OpenSource/OpenSource'
import Demo from '../Demo'

import './App.scss'

function App() {
  const [feature, setFeature] = useState({
    hand: '',
    face: '',
    independence: ''
  })

  const onMouseEnter = (key, value) => {
    if (feature[key] !== value) {
      setFeature({ [key]: value })
    }
  }

  const onMouseLeave = (key) =>
    setFeature({ [key]: null })

  return (
    <div className="App">
      <div id="page-1" className="Page-black">
        <Home />
      </div>

      <div id="page-3" className="Page-dark">
        <Page img="bc-musta"
              onMouseLeave={() => onMouseLeave('hand')}
              featureImg={feature.hand}
              text="Unchain Assets"
              info="Make capital immune to inflation, confiscation, or censorship. Do not let any entity freeze your assets or prevent you from transacting."
              rtl dark>

          <Feature
            icon="non-custodial"
            onMouseEnter={() => onMouseEnter('hand', 'non-cost')}
            isActive={feature.hand === 'non-cost'}
            title="Non Custodial"
            info="Have exclusive control over funds without relying on a custodian entity." />

          <Feature
            icon="wallet"
            onMouseEnter={() => onMouseEnter('hand', 'wallet')}
            isActive={feature.hand === 'wallet'}
            title="Multi Wallet"
            info="Safely manage multiple wallets capable of storing any token in a single app." />

          <Feature
            icon="blocks"
            onMouseEnter={() => onMouseEnter('hand', 'portfolio')}
            isActive={feature.hand === 'portfolio'}
            title="Decentralized"
            info="Access and transact from anywhere at any time given there is internet." />
        </Page>
      </div>
      <div id="page-4" className="Page-black">
        <Page img="bc-yak"
              onMouseLeave={() => onMouseLeave('independence')}
              featureImg={feature.independence}
              text="Go Borderless"
              info="Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities.">

          <Feature
            icon="swap"
            onMouseEnter={() => onMouseEnter('independence', 'swap')}
            isActive={feature.independence === 'swap'}
            title="DeFi Enabled"
            info="Swap assets, stake assets and interact with any DeFi service via WalletConnect." />

          <Feature
            icon="chart"

            onMouseEnter={() => onMouseEnter('independence', 'market')}
            isActive={feature.independence === 'market'}
            title="Investor Oriented"
            info="Discover and navigate crypto markets with institutional-grade analytics." />

          <Feature
            icon="ring"
            onMouseEnter={() => onMouseEnter('independence', 'search')}
            isActive={feature.independence === 'search'}
            title="Action Alerts"
            info={
              <>
                Be among the first to react to price-impacting market events. Coming soon!
              </>
            } />

        </Page>
      </div>
      <div id="page-5" className="Page-dark">
        <Page img="bc-leo"
              onMouseLeave={() => onMouseLeave('face')}
              featureImg={feature.face}
              text="Stay Private"
              info="Use a tool that is built to work for you, has no means to track you and takes extra steps to ensure privacy from prying eyes."
              rtl>

          <Feature
            icon="user"
            onMouseEnter={() => onMouseEnter('face', 'no-data')}
            isActive={feature.face === 'no-data'}
            title="Genuinely Private"
            info="There are no servers keeping user accounts or any kind of identifiers." />

          <Feature
            icon="stop"
            onMouseEnter={() => onMouseEnter('face', 'no-kyc')}
            isActive={feature.face === 'no-kyc'}
            title="No Checks"
            info="The app doesn't involve any elements of traditional finance requiring identity checks." />

          <Feature
            icon="incognito"
            onMouseEnter={() => onMouseEnter('face', 'privacy')}
            isActive={feature.face === 'privacy'}
            title="TOR Enabled"
            info="Keep the context of your connection private even from your internet provider." />

        </Page>
      </div>

      <div className="Page-black">
        <OpenSource />
      </div>

      <div className="Page-black">
        <FeaturedIn />
      </div>

      <div className="Page-black">
        <Demo />
      </div>

      <div id="page-6" className="Page-black">
        <Quote />
      </div>

      <div className="Page-black">
        <div className="Wallet-download">
          <GetWallet />
        </div>
      </div>

      <div className="Page-dark">
        <Roadmap />
      </div>

      <div id="page-8" className="Page-dark">
        <Join />
      </div>

      <div id="page-9" className="Page-dark">
        <Footer />
      </div>
    </div>
  )
}

export default App
