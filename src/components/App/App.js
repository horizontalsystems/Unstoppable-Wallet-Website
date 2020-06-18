import React from 'react'

import Home from '../Home'
import Page from '../Page'
import Feature from '../Feature'

import './App.scss'

function App() {
  return (
    <div className="App">
      <div id="page-1" className="Page-black">
        <Home />
      </div>
      <div id="page-2" className="Page-dark">
        <Page img="knowledge" text="Become informed and discover growing blockchain projects in early stages" rtl dark>
          <Feature
            icon="globe" title="Crypto News"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text."
            rtl />
          <Feature
            icon="guide" title="Crypto Guides"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text."
            rtl />
          <Feature
            icon="graphic" title="Crypto Analytics"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text."
            rtl />
        </Page>
      </div>
      <div id="page-3" className="Page-black">
        <Page img="independence" text="Keep crypto assets safe, unconfiscatable and accessible at all times">
          <Feature
            icon="decentralized" title="Crypto News"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text." />
          <Feature
            icon="non-costodial" title="Non Costodial"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text." />
          <Feature
            icon="open-source" title="Free & Open Source"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text." />
        </Page>
      </div>
      <div id="page-4" className="Page-dark">
        <Page img="incognito" text="Stay incognito and out of radar while growing your wealth" rtl>
          <Feature
            icon="tor" title="TOR  integration"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text."
            rtl />
          <Feature
            icon="anonym" title="No Accounts"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text."
            rtl />
          <Feature
            icon="sort" title="Input, Output sorting"
            info="Contrary to popular belief, Lorem Ipsum is not simply random text."
            rtl />
        </Page>
      </div>
    </div>
  )
}

export default App
