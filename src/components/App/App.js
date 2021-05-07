import React from 'react'

import Home from '../Home'
import Page from '../Page'
import Feature from '../Feature'
import Wallet from '../Wallet'
import Footer from '../Footer/Footer'
import Join from '../Join/Join'

import './App.scss'

function App() {
  return (
    <div className="App">
      <div id="page-1" className="Page-black">
        <Home />
      </div>
      <div id="page-2" className="Page-dark">
        <Page img="hand"
              text="Unchain Assets"
              info="In contrast to assets stored with traditional financial institutions, no entity can put assets on hold or prevent you from transacting when using Unstoppable."
              rtl dark>

          <Feature
            icon="non-custodial"
            title="Non Custodial"
            info="Have exclusive control over funds without relying on a custodian entity." />
          <Feature
            icon="wallet"
            title="Multi Wallet"
            info="Safely manage multiple wallets capable of storing any token in a single app." />
          <Feature
            icon="pie" title="Portfolio Tracker"
            info={
              <>
                Analyze and monitor portfolio performance over time. <a href="/" className="text-nowrap text-decoration-none">Coming Soon</a>
              </>
            } />
        </Page>
      </div>
      <div id="page-3" className="Page-black">
        <Page img="independence"
              text="Go Borderless"
              info="Bypass the traditional finance layer entirely and enter the boundless world of Decentralized Finances (DeFi) with unmatched opportunities.">

          <Feature
            icon="swap"
            title="DeFi Enabled"
            info="Swap assets and put assets to work in income-generating opportunities." />

          <Feature
            icon="chart"
            title="Market Analytics"
            info="Discover crypto markets with institutional-grade analytics features." />

          <Feature
            icon="ring"
            title="Action Alerts"
            info="Be among the first to react to price-impacting market events." />

        </Page>
      </div>
      <div id="page-4" className="Page-dark">
        <Page img="face"
              text="Stay Private"
              info="Use an instrument that takes extra privacy measures making it much harder for anyone to know who you are and what are you up to."
              rtl>

          <Feature
            icon="stop"
            title="No data"
            info="There are no servers keeping user accounts or any kind of identifiers." />

          <Feature
            icon="user"
            title="No KYC"
            info="There are no identity checks that may potentially expose sensitive data to the outer world." />

          <Feature
            icon="incognito"
            title="Privacy settings"
            info="Keep the context of your connectivity private even from your internet provider." />

        </Page>
      </div>
      <div id="page-5" className="Page-black">
        <Wallet />
      </div>
      <div id="page-6" className="Page-dark">
        <Join />
      </div>
      <div id="page-7" className="Page-dark">
        <Footer />
      </div>
    </div>
  )
}

export default App
