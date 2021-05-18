import React from 'react'

import Container from '../Container'
import Slider from '../Slider'
import Icon from '../Icon'
import CardApproved from '../Card/CardApproved'

import './Wallet.scss'

function Wallet() {
  return (
    <div className="Wallet">
      <Container>
        <div className="Section-head">
          <div className="Section-icon">
            <Icon name="phone" />
          </div>
          <div className="Section-text">
            Intuitive and Extensive
          </div>
          <div className="Section-info">
            One of the key ideas driving the engineering and creative process for Unstoppable is to make decentralized financial layer accessible,
            easy and enjoyable. <br /><br />
            To deliver unmatched performance and wider selection of features Unstoppable is being built using native iOS and Android technologies.
            It's both hard and expensive process but an inherently satisfying one.
          </div>
        </div>
      </Container>
      <Container className="Section-image-big">
        <img
          className="Wallet-screen"
          src={`/images/wallet/screens.png`}
          srcSet={`/images/wallet/screens@2x.png 2x, /images/wallet/screens@3x.png 3x`}
          alt=""
        />
      </Container>
      <Container>
        <div className="Section-space-top">
          <div className="text-center pb-3 display-5">Open Source</div>
          <p className="text-center py-3 mb-5 text-grey">
            Use a wallet with a fully open code that meets stated specifications.
          </p>
          <Slider slidesToScroll={3} slidesToShow={3}>
            <CardApproved
              by="Bitcoin"
              title="Approved By Bitcoin.org"
              info={
                <>
                  Unstoppable has been listed by <a href="https://bitcoin.org/en/wallets/mobile/ios/unstoppable/" target="_blank" rel="noopener noreferrer" className="color-link">Bitcoin.org</a>, one of the leading informational resources for Bitcoin,
                  and recommended for both new and experienced users alike.
                </>
              } />
            <CardApproved
              by="Certik"
              title="Audited By Certik"
              info={
                <>
                  Unstoppable was audited by <a href="https://www.certik.org/projects/unstoppable.money" target="_blank" rel="noopener noreferrer" className="color-link">Certik.org</a> where both iOS and Android versions of the app were checked for
                  potential backdoors and vulnerabilities. No major or minor issues were found.
                </>
              } />
            <CardApproved
              by="WalletScrutiny"
              title="Approved By Wallet Scrutiny"
              info={
                <>
                  The <a href="https://walletscrutiny.com/android/io.horizontalsystems.bankwallet/" target="_blank" rel="noopener noreferrer" className="color-link">WalletScrutiny.com</a> verifies that cryptocurrency wallets are indeed using the same publicly open
                  code they claim to. Unstoppable is verifiably open source wallet.
                </>
              } />
          </Slider>
        </div>
      </Container>
    </div>
  )
}

export default Wallet
