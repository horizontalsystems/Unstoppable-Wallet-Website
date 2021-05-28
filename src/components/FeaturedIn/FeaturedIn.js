import React from 'react'

import Container from '../Container'
import zcash from './zcash.svg'
import dash from './dash.svg'
import walletConnect from './wallet-connect.svg'
import ethereum from './ethereum.svg'
import oneInch from './1inch.svg'
import defiPulse from './defi-pulse.svg'

import './Featured.scss'

function FeaturedIn() {
  return (
    <Container>
      <div className="Featured py-5">
        <div className="Featured-text">FeaturedIn In</div>
        <div className="Featured-list">
          <a target="_blank" href="https://ethereum.org/en/wallets/find-wallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={ethereum} alt="Ethereum" />
          </a>
          <a target="_blank" href="https://walletconnect.org/wallets" rel="noopener noreferrer">
            <img className="Featured-item" src={walletConnect} alt="Wallet Connect" />
          </a>
          <a target="_blank" href="https://1inch.io/" rel="noopener noreferrer">
            <img className="Featured-item" src={oneInch} alt="1 Inch Network" />
          </a>
          <a target="_blank" href="https://docs.dash.org/en/stable/wallets/third-party.html#unstoppable" rel="noopener noreferrer">
            <img className="Featured-item" src={dash} alt="Dash" />
          </a>
          <a target="_blank" href="https://electriccoin.co/blog/zcash-is-unstoppable-privacy-focused-wallet-first-to-integrate-ecc-wallet-sdks/" rel="noopener noreferrer">
            <img className="Featured-item" src={zcash} alt="ZCash" />
          </a>
          <a target="_blank" href="https://defipulse.com/defi-list/" rel="noopener noreferrer">
            <img className="Featured-item" src={defiPulse} alt="Defi Pulse" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedIn
