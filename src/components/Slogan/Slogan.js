import React from 'react'
import Container from '../Container/Container'
import YellowOffice from '../YellowOffice/YellowOffice'

import './Slogan.scss'

function Slogan() {
  return (
    <YellowOffice className="Slogan-background">
      <Container>
        <div className="Slogan-wrap">
          <div className="Slogan">
            <div className="slogan-image">
              <img alt=""
                   className="slogan-girl"
                   src="/images/slogan/unstoppable-girl.png"
                   srcSet="
                     /images/slogan/unstoppable-girl@2x.png 2x,
                     /images/slogan/unstoppable-girl@3x.png 3x" />
            </div>
            <div className="slogan-info">
              <div className="slogan-title">
                Be Free <br />
                Be Unstoppable
              </div>
              <div className="slogan-bottom">
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
          </div>
        </div>
      </Container>
    </YellowOffice>
  )
}

export default Slogan
