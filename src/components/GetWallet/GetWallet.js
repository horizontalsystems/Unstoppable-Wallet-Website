import React from 'react'

import Container from '../Container'
import List from '../List'
import Button from '../Button'

import './GetWallet.scss'

function GetWallet() {
  return (
    <Container>
      <div className="GetWallet">
        <div className="GetWallet-text">
          Get the Unstoppable Wallet!
        </div>
        <div className="GetWallet-action">
          <List>
            <Button
              className="Button-circle"
              text="Google Play"
              icon="google-play"
              link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" yellow newTab />
            <Button
              className="Button-circle"
              text="App Store"
              icon="app-store"
              link="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8" yellow newTab />
            <Button
              className="Button-circle"
              text="Download APK"
              icon="download"
              link="https://github.com/horizontalsystems/bank-wallet-android/releases" newTab />
          </List>
        </div>
      </div>
    </Container>
  )
}

export default GetWallet
