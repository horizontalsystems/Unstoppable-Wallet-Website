import React from 'react'
import Container from '../Container/Container'
import './Banner.scss'

function Banner() {
  return (
    <Container>
      <div className="Banner">
        <div className="banner-info">
          <div className="banner-title">
            Exclusive <br />
            control over <br />
            what’s yours
          </div>
          <div className="banner-desc">
            Unstoppable is Open Source Non-Custodial Fully Decentralized Wallet
          </div>
          <div className="banner-bottom">
            <a href="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8">
              <img alt="" width="144"
                   src="/images/download/AppStore.png"
                   srcSet="
                     /images/download/AppStore@2x.png 2x,
                     /images/download/AppStore@3x.png 3x" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet">
              <img alt="" width="144"
                   src="/images/download/PlayStore.png"
                   srcSet="
                     /images/download/PlayStore@2x.png 2x,
                     /images/download/PlayStore@3x.png 3x" />
            </a>
            <a href="https://github.com/horizontalsystems/bank-wallet-android/releases">
              <img alt="" width="144"
                   src="/images/download/ApkFile.png"
                   srcSet="
                     /images/download/ApkFile@2x.png 2x,
                     /images/download/ApkFile@3x.png 3x" />
            </a>
          </div>
        </div>
        <div className="banner-image">
          <img alt="Unstoppable astronaut"
               className="banner-astronaut"
               src="/images/banner/astronaut.png"
               srcSet="
                 /images/banner/astronaut@2x.png 2x,
                 /images/banner/astronaut@3x.png 3x" />
        </div>
      </div>
    </Container>
  )
}

export default Banner
