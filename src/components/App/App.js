import React from 'react'

import Home from '../Home'
import Page from '../Page'
import Feature from '../Feature'
import Wallet from '../Wallet'
import Footer from '../Footer/Footer'

import './App.scss'

function App() {
  return (
    <div className="App">
      <div id="page-1" className="Page-black">
        <Home />
      </div>
      <div id="page-2" className="Page-dark">
        <Page img="knowledge" text="Become informed and master cryptocurrencies" rtl dark>
          <Feature
            icon="guide" title="Academy"
            info="Access guides covering cryptocurrency essentials and coin reviews."
            rtl />
          <Feature
            icon="globe" title="Monitoring"
            info="Follow crypto news, top 100 rankings, daily top winners and more."
            rtl />
          <Feature
            icon="graphic" title="Indicators"
            info="Setup alerts for asset price changes and price trend reversals."
            rtl />
        </Page>
      </div>
      <div id="page-3" className="Page-black">
        <Page img="independence" text="Keep assets safe, unconfiscatable and accessible">
          <Feature
            icon="non-costodial" title="Non-Custodial"
            info="Full control over cryptocurrencies. The wallet is open source and can't cheat." />
          <Feature
            icon="open-source" title="Decentralized"
            info="The wallet app doesn't depend on a centrally-managed servers to function." />
          <Feature
            icon="decentralized" title="Standard"
            info="Migrate wallets created in Unstoppable to external wallets and vice versa." />
        </Page>
      </div>
      <div id="page-4" className="Page-dark">
        <Page img="incognito" text="Stay incognito while growing your wealth" rtl>
          <Feature
            icon="anonym" title="No Accounts"
            info="No accounts, emails, phone numbers or any other data collected."
            rtl />
          <Feature
            icon="tor" title="TOR Network"
            info="Anonymizes internet and location while browsing the wallet app."
            rtl />
          <Feature
            icon="sort" title="Randomizer"
            info="Enhanced privacy features to make transactions harder to trace."
            rtl />
        </Page>
      </div>
      <div id="page-5" className="Page-black">
        <Wallet />
      </div>
      <div id="page-6" className="Page-black">
        <Footer />
      </div>
    </div>
  )
}

export default App
