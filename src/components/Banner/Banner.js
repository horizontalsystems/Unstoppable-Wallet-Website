import React from 'react'

import Container from '../Container'
import GetWalletActions from '../GetWallet/GetWalletActions'
import ImageGradient from '../Icon/image-gradient.svg'

import './Banner.scss'

function Banner() {
  return (
    <Container clipped={false}>
      <div className="Banner">
        <div className="Banner-start">
          <img className="Banner-img-gradient Banner-img-gradient-top" src={ImageGradient} alt="" />
          <img
            className="Banner-img"
            src="/images/banner/wallet.png"
            alt="Unstoppable wallet"
            srcSet="/images/banner/wallet@2x.png 2x, /images/banner/wallet@3x.png 3x"
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-end-content">
            <div className="Banner-title sm-hidden">
              Be <br /> Unstoppable
            </div>
            <div className="Banner-title md-hidden">
              Be Unstoppable
            </div>
            <GetWalletActions />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
