import React from 'react'

import Container from '../Container'

import './Wallet.scss'

function Wallet() {
  return (
    <>
      <Container>
        <div className="Section-head">
          <div className="Section-text">
            Intuitive and Extensive
          </div>
          <div className="Section-info Section-70">
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
          src="/images/wallet/screens.png"
          srcSet="/images/wallet/screens@2x.png 2x"
          alt=""
        />
      </Container>
    </>
  )
}

export default Wallet
