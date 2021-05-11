import React from 'react'

import Container from '../Container'
import zcash from './zcash.svg'
import walletConnect from './wallet-connect.svg'
import ethereum from './ethereum.svg'
import oneInch from './1inch.svg'
import defiPulse from './defi-pulse.svg'

import './Featured.scss'

function Featured() {
  return (
    <Container>
      <div className="Featured">
        <div className="Featured-text">Featured In</div>
        <div className="Featured-list">
          <a target="_blank" href="https://ethereum.org/en/wallets/find-wallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={ethereum} alt="Ethereum" />
          </a>
          <a target="_blank" href="https://walletconnect.org/wallets" rel="noopener noreferrer">
            <img className="Featured-item" src={walletConnect} alt="Wallet Connect" />
          </a>
          <a target="_blank" href="https://app.1inch.io/" rel="noopener noreferrer">
            <img className="Featured-item" src={oneInch} alt="1 Inch Network" />
          </a>
          <a target="_blank" href="https://electriccoin.co/blog/zcash-is-unstoppable-privacy-focused-wallet-first-to-integrate-ecc-wallet-sdks/" rel="noopener noreferrer">
            <img className="Featured-item" src={zcash} alt="ZCash" />
          </a>
          <a target="_blank" href="https://defipulse.com/" rel="noopener noreferrer">
            <img className="Featured-item" src={defiPulse} alt="Defi Pulse" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Featured
