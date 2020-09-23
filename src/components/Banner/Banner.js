import React from 'react'

import Container from '../Container'
import List from '../List'
import Button from '../Button'

import './Banner.scss'

function Banner() {
  return (
    <Container clipped={false}>
      <div className="Banner">
        <div className="Banner-start">
          <img
            className="Banner-img"
            src="/images/banner/wallet.png"
            alt="Unstoppable wallet"
            srcSet="/images/banner/wallet@2x.png 2x, /images/banner/wallet@3x.png 3x"
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-title">
            Best Crypto Wallet for Your Assets
          </div>
          <div className="Banner-info">
            Store and Trade crypto at any time, from anywhere. Have full control over assets. Remain anonymous.
          </div>
          <div className="Banner-action">
            <List>
              <Button
                className="Button-circle"
                text="Google Play" icon="google-play"
                link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" yellow />
              <Button
                className="Button-circle"
                text="App Store" icon="app-store"
                link="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8" yellow />
              <Button
                className="Button-circle"
                text="Download APK" icon="download"
                link="https://github.com/horizontalsystems/bank-wallet-android/releases" />
            </List>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
