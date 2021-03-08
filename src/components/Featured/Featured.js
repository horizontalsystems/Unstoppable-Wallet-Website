import React from 'react'

import Container from '../Container'
import zcash from './zcash.svg'
import walletConnect from './wallet-connect.svg'
import bitcoin from './bitcoin.svg'
import walletScrutiny from './wallet-scrutiny.svg'
import ethereum from './ethereum.svg'

import './Featured.scss'

function Featured() {
  return (
    <Container>
      <div className="Featured">
        <div className="Featured-text">Featured In</div>
        <div className="Featured-list">
          <a target="_blank" href="https://electriccoin.co/blog/zcash-is-unstoppable-privacy-focused-wallet-first-to-integrate-ecc-wallet-sdks/" rel="noopener noreferrer">
            <img className="Featured-item" src={zcash} alt="ZCash" />
          </a>
          <a target="_blank" href="https://bitcoin.org/en/wallets/mobile/android/unstoppable/" rel="noopener noreferrer">
            <img className="Featured-item" src={bitcoin} alt="Bitcoin" />
          </a>
          <a target="_blank" href="https://walletconnect.org/wallets" rel="noopener noreferrer">
            <img className="Featured-item" src={walletConnect} alt="Wallet Connect" />
          </a>
          <a target="_blank" href="https://ethereum.org/en/wallets/find-wallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={ethereum} alt="Ethereum" />
          </a>
          <a target="_blank" href="https://walletscrutiny.com/android/io.horizontalsystems.bankwallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={walletScrutiny} alt="Wallet Scrutiny" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Featured
