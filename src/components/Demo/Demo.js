import React, { useState } from 'react'
import cn from 'classnames'
import Container from '../Container'
import YoutubeEmbed from '../Video/YoutubeEmbed'
import './Demo.scss'

import BitcoinWallet from './bitcoin-wallet.svg'
import MultiWallet from './multi-wallet.svg'
import NftWallet from './nft-wallet.svg'
import ForInvestors from './for-investors.svg'
import WatchAddress from './watch-address.svg'
import AdvancedSearch from './search.svg'
import Analytics from './analytics.svg'

function Demo() {
  const [active, setActive] = useState({ id: 'multiWallet', autoplay: false })
  const isActive = name => active.id === name ? 'active' : null
  const setState = id => () => setActive({ id, autoplay: true })

  const map = {
    bitcoinWallet: '9gT11AgG_s0',
    multiWallet: '5Z2CzFVjksA',
    nftWallet: 'ZjNFheebl2U',
    watchAddress: 'ii4j-Iv7eyY',
    forInvestors: 'xa2cvT6FagA',
    advancedSearch: 'XIdIsKv16gU',
    analytics: 'c7tDslRVFgA'
  }

  return (
    <Container>
      <div className="Demo Section-space-top Section-space-bottom">
        <div className="Page-header-text text-center pb-5 text-gradient">
          Demos
        </div>

        <div className="Demo-container mt-5 pt-5">
          <div className="Demo-content">
            <TabContent key={active.id} isActive={isActive}>
              <YoutubeEmbed embedId={map[active.id]} autoplay={active.autoplay} />
            </TabContent>
          </div>
          <div className="Demo-tabs">
            <div className="tablink-header">Use Cases</div>
            <Tab item="multiWallet" imgImg={MultiWallet} name="Multi Wallet" isActive={isActive} setActive={setState} />
            <Tab item="nftWallet" imgImg={NftWallet} name="NFT Wallet" isActive={isActive} setActive={setState} />
            <Tab item="bitcoinWallet" imgImg={BitcoinWallet} name="Bitcoin Wallet" isActive={isActive} setActive={setState} />
            <Tab item="watchAddress" imgImg={WatchAddress} name="Monitoring Wallet" isActive={isActive} setActive={setState} />
            <Tab item="forInvestors" imgImg={ForInvestors} name="Investor Wallet" isActive={isActive} setActive={setState} />
            <Tab item="advancedSearch" imgImg={AdvancedSearch} name="Advanced Market Search" isActive={isActive} setActive={setState} />
            <Tab item="analytics" imgImg={Analytics} name="Advanced Token Analytics" isActive={isActive} setActive={setState} />
          </div>
        </div>
      </div>
    </Container>
  )
}


const Tab = ({ name, item, imgImg, isDisabled, isActive = () => false, setActive = () => false }) => (
  <div className={cn('tablink', isActive(item), { disabled: isDisabled })} onClick={setActive(item)}>
    <img src={imgImg} width="24" height="24" alt="" />
    <span className="ms-3">{name}</span>
  </div>
)

const TabContent = ({ children }) => (
  <div className="tabcontent">
    {children}
  </div>
)

export default Demo
