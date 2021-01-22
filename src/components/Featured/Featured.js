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
          <img className="Featured-item" src={zcash} alt="ZCash" />
          <img className="Featured-item" src={dash} alt="Dash" />
          <img className="Featured-item" src={defiPulse} alt="Defi Pulse" />
          <img className="Featured-item" src={walletConnect} alt="Wallet Connect" />
          <img className="Featured-item" src={cryptoWisser} alt="Crypto Wisser" />
          <img className="Featured-item" src={walletScrutiny} alt="Wallet Scrutiny" />
          <img className="Featured-item" src={muo} alt="MakeUseOf" />
        </div>
      </div>
    </Container>
  )
}

export default Featured
