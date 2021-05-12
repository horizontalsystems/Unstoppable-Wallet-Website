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
            Intuitive and functional interface
          </div>
          <div className="Section-info">
            One of the key ideas driving the engineering and creative process for Unstoppable is to make this technology accessible and
            easy. <br /><br />
            Unstoppable being built using native iOS and Android programming languages which in turn deliver highly responsive interface and wider
            selection of features.
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
          <div className="text-center pb-3 display-5">Open Source</div>
          <p className="text-center py-3 mb-5 text-grey">
            Use a wallet with a fully open code that meets stated specifications.
          </p>
          <Slider slidesToScroll={3} slidesToShow={3}>
            <CardApproved
              by="Bitcoin"
              title="Approved By Bitcoin.org"
              info="Our wallet has been reviewed bitcoin.org and they recommend it to new and experienced users as a transparent and fully controlled wallet" />
            <CardApproved
              by="Certik"
              title="Audited By Certik"
              info="The CertiK team looked at the authoritative roles, commits, proofs, and the withdrawal functionalities.No vulnerabilities, either major or minor, were found in any of the areas." />
            <CardApproved
              by="WalletScrutiny"
              title="Approved By Wallet Scrutiny"
              info="The aim of this project is to improve the security of Bitcoin wallets by examining the application code for possible back-doors and other vulnerabilities." />
          </Slider>
        </div>
      </Container>
    </div>
  )
}

export default Wallet
