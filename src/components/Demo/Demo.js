import React, { useState } from 'react'
import cn from 'classnames'
import Container from '../Container'
import YoutubeEmbed from '../Video/YoutubeEmbed'
import './Demo.scss'

import t1 from './bitcoin-wallet.svg'
import t2 from './multi-wallet.svg'
import t3 from './for-investors.svg'
import t4 from './defi-wallet.svg'
import t5 from './nft-wallet.svg'

function Demo() {
  const [active, setActive] = useState('t1')
  const isActive = name => active === name ? 'active' : null
  const setState = val => () => setActive(val)

  return (
    <Container>
      <div className="Demo Section-space-top Section-space-bottom">
        <div className="text-center pb-5 display-5 text-gradient fw-normal">
          Demos
        </div>

        <div className="Demo-container mt-5 pt-5">
          <div className="Demo-content">
            <TabContent item="t1" isActive={isActive}>
              <YoutubeEmbed embedId="-qjzSUdeId0" />
            </TabContent>

            <TabContent item="t2" isActive={isActive}>
              <h3>Multi Wallet</h3>
            </TabContent>

            <TabContent item="t3" isActive={isActive}>
              <h3>Wallet For Investors</h3>
            </TabContent>

            <TabContent item="t4" isActive={isActive}>
              <h3>DeFi Wallet</h3>
            </TabContent>

            <TabContent item="t5" isActive={isActive}>
              <h3>NFT Wallet</h3>
            </TabContent>
          </div>
          <div className="Demo-tabs">
            <div className="tablink-header">Demo Playlist</div>
            <Tab item="t1" icon={t1} name="Bitcoin Wallet" isActive={isActive} setActive={setState} />
            <Tab item="t2" icon={t2} name="Multi Wallet" isActive={isActive} setActive={setState} />
            <Tab item="t3" icon={t3} name="Wallet For Investors" isActive={isActive} setActive={setState} />
            <Tab item="t4" icon={t4} name="DeFi Wallet" isActive={isActive} setActive={setState} />
            <Tab item="t5" icon={t5} name="NFT Wallet" isActive={isActive} setActive={setState} />
          </div>
        </div>
      </div>
    </Container>
  )
}


const Tab = ({ name, item, icon, isActive, setActive }) => (
  <div className={cn('tablink', isActive(item))} onClick={setActive(item)}>
    <img src={icon} alt={name} />
    <span className="ms-3">{name}</span>
  </div>
)

const TabContent = ({ item, isActive, children }) => (
  <div className={cn('tabcontent', isActive(item))}>
    {children}
  </div>
)

export default Demo
