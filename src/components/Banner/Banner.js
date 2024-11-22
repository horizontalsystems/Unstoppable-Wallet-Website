import Container from '../Container'
import GetWalletActions from '../GetWallet/GetWalletActions'
import Icon from '../Icon'

import './Banner.scss'

function Banner() {
  return (
    <Container clipped={false}>
      <div className="Banner">
        <img className="Banner-img-gradient Banner-img-gradient-top" src="/images/banner/gradient-main.svg" alt="" />
        <div className="Banner-start">
          <img
            className="Banner-img"
            src="/images/banner/wallet.png"
            alt="Unstoppable wallet"
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-end-content">
            <div className="Banner-title text-gradient">
              Be Unstoppable
            </div>
            <div className="Banner-title-slogan my-2 py-2 mb-3">
              Unchain Assets | Go Borderless | Stay Private
            </div>
            <GetWalletActions />
            {/*<div className="mt-5 pt-md-5 pt-sm-0">*/}
            {/*  <Link to="/premium" className="Banner-link">*/}
            {/*    <Icon name="arrow-right" /> <span className="ms-2">Get premium features</span>*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
