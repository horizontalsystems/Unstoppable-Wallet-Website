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
        <Page img="investments" text="Invest Wisely"
              info="Unstoppable integrates unmatched trading, monitoring and analytical instruments designed to give its user an upper hand"
              rtl dark>
          <Feature
            icon="exchange" title="Exchange"
            info="Trade crypto assets anonymously, without fraud risk or regulatory limitations."
            rtl />
          <Feature
            icon="graphic" title="Analyze"
            info="Access interactive charts and technical analysis indicators showing current price trends."
            rtl />
          <Feature
            icon="guide" title="Learn"
            info={<>
              Learn fundamentals and discover growing projects in our <a href="http://litrex.academy" target="_blank" rel="noopener noreferrer">cryptocurrency
              academy</a>, accessible from wallet app.
            </>}
            rtl />
        </Page>
      </div>
      <div id="page-3" className="Page-black">
        <Page img="independence"
              text="Be Independent"
              info="Unstoppable is built to ensure users are able to access funds at any time from anywhere">
          <Feature
            icon="non-costodial" title="Non-Custodial"
            info="Have exclusive control over assets. The funds are under your exclusive control and no other entity." />
          <Feature
            icon="decentralized" title="Cross Platform"
            info="Easily migrate wallets created in Unstoppable wallet app to other non-custodial wallets and vice versa." />
          <Feature
            icon="open-source" title="Open Source"
            info={
              <>
                Use a wallet with an open code that meets stated specifications.
                Unstoppable has passed open source <a href="https://walletscrutiny.com/android/io.horizontalsystems.bankwallet" target="_blank" rel="noopener noreferrer" className="color-yellow">verification</a>
              </>
            } />
        </Page>
      </div>
      <div id="page-4" className="Page-dark">
        <Page img="incognito"
              text="Stay Private"
              info="Use this wallet to remain incognito and be able to keep your information private" rtl>
          <Feature
            icon="anonym" title="No Accounts"
            info="There are no accounts, names, emails, or any other identity verification procedures i.e. KYC and AML checks."
            rtl />
          <Feature
            icon="tor" title="TOR Network"
            info="Mask your IP address and location while using the wallet app by routing your internet connection through untraceable servers."
            rtl />
          <Feature
            icon="sort" title="Bitcoin Privacy"
            info="Make use of additional privacy settings for natively public Bitcoin transactions by making your transactions harder to track."
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
