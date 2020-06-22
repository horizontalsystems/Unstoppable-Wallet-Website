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
        <Page img="knowledge" text="Become informed and discover promising cryptocurrencies at early stages" rtl dark>
          <Feature
            icon="globe" title="Learn"
            info="Understand the ins and outs of storing and using cryptocurrency safely."
            rtl />
          <Feature
            icon="guide" title="Discover"
            info="Learn about rising cryptocurrencies and projects in simple terms."
            rtl />
          <Feature
            icon="graphic" title="Monitor"
            info="Get insights on when is a good to buy, hold or sell different assets."
            rtl />
        </Page>
      </div>
      <div id="page-3" className="Page-black">
        <Page img="independence" text="Keep crypto assets safe, unconfiscatable and accessible at all times">
          <Feature
            icon="non-costodial" title="Control"
            info="Exercise full and exclusive control over your cryptocurrencies." />
          <Feature
            icon="open-source" title="Access"
            info="Transact from anywhere at anytime without relying on any servers." />
          <Feature
            icon="decentralized" title="Migrate"
            info="Access your assets from any standard compliant crypto wallet." />
        </Page>
      </div>
      <div id="page-4" className="Page-dark">
        <Page img="incognito" text="Stay incognito and out of radar while growing your wealth" rtl>
          <Feature
            icon="anonym" title="Dataless"
            info="No accounts, emails, phone numbers or any other data collected."
            rtl />
          <Feature
            icon="tor" title="Anonymous"
            info="Anonymize internet and location while browsing the wallet app."
            rtl />
          <Feature
            icon="sort" title="Hidden"
            info="Make cryptocurrency transactions harder to trace and link."
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
