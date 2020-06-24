import React from 'react'

import Container from '../Container'
import Slider from '../Slider'
import Icon from '../Icon'
import Card from '../Card'

import './Wallet.scss'
import GetWallet from '../GetWallet'

function Wallet() {
  return (
    <div className="Wallet">
      <Container clipped={false}>
        <div className="Section-head">
          <div className="Section-icon">
            <Icon name="rect" />
          </div>
          <div className="Section-text">
            One wallet for all <br /> major cryptocurrencies
          </div>
        </div>
      </Container>
      <Container className="Section-image">
        <img
          className="Wallet-screen"
          src={`/images/wallet/coins.png`}
          srcSet={`/images/wallet/coins@2x.png 2x, /images/wallet/coins@3x.png 3x`}
          alt=""
        />
      </Container>
      <Container>
        <div className="Wallet-purpose">
          <Slider slidesToScroll={3} slidesToShow={3}>
            <Card
              number="1"
              title="Who Is It For?"
              info="The Unstoppable wallet is built for those looking to invest in cryptocurrencies and blockchain based projects on ongoing basis in a private manner." />
            <Card
              number="2"
              title="Is It Safe?"
              info="It's a non-custodial wallet where only user has control over funds. It doesn't collect any data. It keeps user independent by not locking wallet to a specific wallet app." />
            <Card
              number="3"
              title="Why Built it?"
              info="We built it for ourselves as the available solutions were not up to par. If you believe in crypto and planning to invest you will enjoy this wallet. It's years ahead!" />
          </Slider>
        </div>
        <div className="Section-head Section-head-reverse">
          <div className="Section-text Section-text-right">
            Intuitive and powerful
          </div>
          <div className="Section-icon Section-icon-start">
            <Icon name="rect" />
          </div>
        </div>
      </Container>
      <Container className="Section-image Section-image-big">
        <img
          className="Wallet-screen"
          src={`/images/wallet/screens.png`}
          srcSet={`/images/wallet/screens@2x.png 2x, /images/wallet/screens@3x.png 3x`}
          alt=""
        />
      </Container>
      <div className="Wallet-download">
        <GetWallet  />
      </div>
    </div>
  )
}

export default Wallet
