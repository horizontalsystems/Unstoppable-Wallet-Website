import React from 'react'

import Container from '../Container'
import zcash from './zcash.svg'
import dash from './dash.svg'
import defiPulse from './defi-pulse.svg'
import walletConnect from './wallet-connect.svg'
import cryptoWisser from './crypto-wisser.svg'
import walletScrutiny from './wallet-scrutiny.svg'
import muo from './muo.svg'

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
          <a target="_blank" href="https://docs.dash.org/en/stable/wallets/third-party.html#unstoppable" rel="noopener noreferrer">
            <img className="Featured-item" src={dash} alt="Dash" />
          </a>
          <a target="_blank" href="https://defipulse.com/defi-list" rel="noopener noreferrer">
            <img className="Featured-item" src={defiPulse} alt="Defi Pulse" />
          </a>
          <a target="_blank" href="https://walletconnect.org/wallets" rel="noopener noreferrer">
            <img className="Featured-item" src={walletConnect} alt="Wallet Connect" />
          </a>
          <a target="_blank" href="https://www.cryptowisser.com/wallet/unstoppable-wallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={cryptoWisser} alt="Crypto Wisser" />
          </a>
          <a target="_blank" href="https://walletscrutiny.com/android/io.horizontalsystems.bankwallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={walletScrutiny} alt="Wallet Scrutiny" />
          </a>
          <a target="_blank" href="https://www.makeuseof.com/tag/unstoppable-decentralized-crypto-wallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={muo} alt="MakeUseOf" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Featured
