import React from 'react'

import Container from '../Container'
import GetWalletActions from './GetWalletActions'

import './GetWallet.scss'

function GetWallet() {
  return (
    <Container>
      <div className="GetWallet">
        <div className="GetWallet-text">
          Be Unstoppable!
        </div>
        <div className="GetWallet-action">
          <GetWalletActions />
        </div>
      </div>
    </Container>
  )
}

export default GetWallet
