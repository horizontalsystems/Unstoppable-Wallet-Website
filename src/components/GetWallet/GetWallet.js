import React from 'react'

import Container from '../Container'
import List from '../List'
import Button from '../Button'
import u from './u.svg'

import './GetWallet.scss'

function GetWallet() {
  return (
    <Container>
      <div className="GetWallet">
        <div className="GetWallet-start">
          <img className="GetWallet-img" src={u} alt="" />
        </div>
        <div className="GetWallet-end">
          <div className="GetWallet-text">
            Download Unstoppable!
          </div>
          <div className="GetWallet-action">
            <List>
              <Button
                text="Google Play" icon="google-play"
                link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" yellow />
              <Button
                text="App Store" icon="app-store"
                link="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8" yellow />
              <Button
                text="Download APK" icon="download"
                link="https://github.com/horizontalsystems/bank-wallet-android/releases" />
            </List>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default GetWallet
