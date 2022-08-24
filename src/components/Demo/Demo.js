import React, { useState } from 'react'
import cn from 'classnames'
import Container from '../Container'
import YoutubeEmbed from '../Video/YoutubeEmbed'
import './Demo.scss'

import { ReactComponent as BitcoinWallet } from './bitcoin-wallet.svg'
import { ReactComponent as MultiWallet } from './multi-wallet.svg'
import { ReactComponent as NftWallet } from './nft-wallet.svg'
import { ReactComponent as ForInvestors } from './for-investors.svg'
import { ReactComponent as WatchAddress } from './watch-address.svg'
import { ReactComponent as DefiWallet } from './defi-wallet.svg'

function Demo() {
  const [active, setActive] = useState('bitcoinWallet')
  const isActive = name => active === name ? 'active' : null
  const setState = val => () => setActive(val)

  const map = {
    bitcoinWallet: '9gT11AgG_s0',
    multiWallet: '5Z2CzFVjksA',
    nftWallet: 'ZjNFheebl2U',
    watchAddress: 'ii4j-Iv7eyY',
    forInvestors: null,
    defiWallet: null,
  }

  return (
    <Container>
      <div className="Demo Section-space-top Section-space-bottom">
        <div className="Page-header-text text-center pb-5 text-gradient">
          Demos
        </div>

        <div className="Demo-container mt-5 pt-5">
          <div className="Demo-content">
            <TabContent key={active} isActive={isActive}>
              <YoutubeEmbed embedId={map[active]} />
            </TabContent>
          </div>
          <div className="Demo-tabs">
            <div className="tablink-header">Demo Playlist</div>
            <Tab item="bitcoinWallet" Icon={BitcoinWallet} name="Bitcoin Wallet" isActive={isActive} setActive={setState} />
            <Tab item="multiWallet" Icon={MultiWallet} name="Multi Wallet" isActive={isActive} setActive={setState} />
            <Tab item="nftWallet" Icon={NftWallet} name="NFT Wallet" isActive={isActive} setActive={setState} />
            <Tab item="watchAddress" Icon={WatchAddress} name="Watch Address Feature" isActive={isActive} setActive={setState} />
            <Tab item="forInvestors" Icon={ForInvestors} name="Wallet For Investors" isDisabled={true} />
            <Tab item="defiWallet" Icon={DefiWallet} name="DeFi Wallet" isDisabled={true} />
          </div>
        </div>
      </div>
    </Container>
  )
}


const Tab = ({ name, item, Icon, isDisabled, isActive = () => false, setActive = () => false }) => (
  <div className={cn('tablink', isActive(item), { disabled: isDisabled })} onClick={setActive(item)}>
    <Icon />
    <span className="ms-3">{name}</span>
  </div>
)

const TabContent = ({ children }) => (
  <div className="tabcontent">
    {children}
  </div>
)

export default Demo
