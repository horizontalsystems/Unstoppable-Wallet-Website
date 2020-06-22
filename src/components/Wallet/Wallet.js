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
            The most widely used <br /> cryptocurrencies
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
              title="For Who This wallet?"
              info="Lorem Ipsum available, but the majority have suffered alteration There are many variations of passages of Lorem Ipsum available, There are many variations of passages of Lorem Ipsum available, but the majority" />
            <Card
              number="2"
              title="Why you account can’t be blocked?"
              info="Lorem Ipsum available, but the majority have suffered alteration There are many variations of passages of Lorem Ipsum available, There are many variations of passages of Lorem Ipsum available, but the majority" />
            <Card
              number="3"
              title="Why you money can’t be stolen?"
              info="Lorem Ipsum available, but the majority have suffered alteration There are many variations of passages of Lorem Ipsum available, There are many variations of passages of Lorem Ipsum available, but the majority" />
          </Slider>
        </div>
        <div className="Section-head Section-head-reverse">
          <div className="Section-text Section-text-right">
            The wallet has a simple <br /> design and is easy to use
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
