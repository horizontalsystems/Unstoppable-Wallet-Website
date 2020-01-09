import React from 'react'
import Container from '../Container/Container'
import YellowOffice from '../YellowOffice/YellowOffice'

import './Wallet.scss'

function Wallet() {
  return (
    <YellowOffice>
      <Container>
        <div className="Wallet">
          <div className="wallet-wrap">
            <div className="wallet-image">
              <img className="app-screens" alt="App Screens"
                   src="/images/wallet/screenshot.png"
                   srcSet="
                     /images/wallet/screenshot@2x.png 2x,
                     /images/wallet/screenshot@3x.png 3x" />
            </div>
            <div className="wallet-info">
              <div className="wallet-desc">
                The wallet being build by gifted engineers. Engineering process radically driven by libertarian
                principles.
              </div>
              <div className="wallet-link">
                <span>Horizontal Systems</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </YellowOffice>
  )
}

export default Wallet
