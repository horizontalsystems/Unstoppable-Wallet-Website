import React from 'react'

import Container from '../Container'
import Slider from '../Slider'
import Icon from '../Icon'
import Card from '../Card'
import CardNumber from '../Card/CardNumber'
import GetWallet from '../GetWallet'
import Featured from '../Featured'

import './Wallet.scss'

function Wallet() {
  return (
    <div className="Wallet">
      <Container clipped={false}>
        <div className="Section-head">
          <div className="Section-icon">
            <Icon name="wallet" />
          </div>
          <div className="Section-text">
            One wallet for all your digital assets
          </div>
          <div className="Section-info">
            Store and manage over 60 cryptocurrencies and hundreds of crypto tokens on all major blockchains.
          </div>
        </div>
      </Container>
      <Container className="Section-image">
        <img
          className="Wallet-screen"
          src="/images/wallet/coins.jpg"
          srcSet="/images/wallet/coins@2x.jpg 2x"
          alt=""
        />
      </Container>
      <Container>
        <div className="Section-image-info">
          <div className="Section-info">
            Unstoppable is more than just another multi-currency wallet. It’s one of the few wallets out there that adheres to standards and
            implements the latest advancements for Bitcoin and Ethereum.
          </div>
          <div className="Section-products">
            <Card title="Bitcoin Wallet" info={<>
              - Fully SPV enabled <br />
              - HD wallet <br />
              - Segregated witness <br />
              - Custom transaction fees <br />
              - BIP44 / BIP49 / BIP84 / BIP69 <br />
              - Lock BTCs from spending for x days
            </>} />
            <Card title="Ethereum Wallet" info={
              <>
                - Supports any ERC20 token <br />
                - DeFi support <br />
                - WalletConnnect protocol <br />
                - Custom transaction fees
              </>
            } />
            <Card title="Crypto Academy" info={
              <>
                - EOS blockchain + tokens <br />
                - Binance Chain + BEP2 <br />
                - Dash blockchain <br />
                - Litecoin blockchain <br />
                - Bitcoin Cash blockchain <br />
                - ZCash blockchain
              </>
            } />
          </div>
        </div>
      </Container>
      <Container>
        <div className="Section-head">
          <div className="Section-icon">
            <Icon name="phone" />
          </div>
          <div className="Section-text">
            Intuitive and functional interface
          </div>
          <div className="Section-info">
            Manage your assets in a responsive and user-friendly interface. Unstoppable engineered using native iOS and Android programming languages
            and therefore able to provide better performance, smoother interface and overall wider selection of features.
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
      <Container>
        <div className="Wallet-purpose">
          <Slider slidesToScroll={3} slidesToShow={3}>
            <CardNumber
              number="1"
              title="Who is it for?"
              info="For those who hold financial independence, wealth privacy and open access to markets in high regard." />
            <CardNumber
              number="2"
              title="What is it for?"
              info="For seamless investing in cryptocurrency and blockchain projects, making them understandable and accessible." />
            <CardNumber
              number="3"
              title="Why this wallet?"
              info="It enables anyone to privately access financial services without risk of confiscation or fear of being censored." />
          </Slider>
        </div>
      </Container>
      <div className="Wallet-download">
        <GetWallet />
      </div>
      <div className="Featured-in">
        <Featured />
      </div>
    </div>
  )
}

export default Wallet
