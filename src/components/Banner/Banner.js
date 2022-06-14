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
            srcSet="/images/banner/wallet@2x.png 2x"
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-end-content">
            <div className="Banner-title">
              Be Unstoppable
            </div>
            <div className="Banner-title-slogan my-2 py-2 mb-3">
              Unchain Assets | Go Borderless | Stay Private
            </div>
            <GetWalletActions />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
