import React from 'react'

import Container from '../Container'
import GetWalletActions from './GetWalletActions'

import './GetWallet.scss'
import '../Wallet/Wallet.scss'

function GetWallet() {
  return (
    <Container>
      <div className="GetWallet">
        <div className="GetWallet-text text-gradient fw-normal">
          Get the Unstoppable Wallet!
        </div>
        <div className="GetWallet-action">
          <GetWalletActions />
        </div>
      </div>
    </Container>
  )
}

export default GetWallet
