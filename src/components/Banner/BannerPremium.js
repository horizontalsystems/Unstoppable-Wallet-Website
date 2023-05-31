import { Link } from 'react-router-dom'
import Container from '../Container'
import ImageGradient from '../Icon/image-gradient.svg'
import Icon from '../Icon'

function BannerPremium() {
  return (
    <Container clipped={false}>
      <div className="Banner">
        <div className="Banner-start">
          <img className="Banner-img-gradient Banner-img-gradient-top" src={ImageGradient} alt="" />
          <img
            className="Banner-img"
            src="/images/banner/premium.png"
            alt="Unstoppable wallet"
            srcSet="/images/banner/premium@2x.png 2x"
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-end-content">
            <div className="Banner-title text-gradient">
              Premium On-Chain Analytics Data
            </div>
            <p className="my-2 py-2 mb-3 text-light-soft">
              Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances.
            </p>
            <div className="Wallet-actions">
              <div className="Banner-actions">
                <Link className="Button Button-yellow Button-circle Button-nowrap text-decoration-none" to="/analytics-pay">
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="mt-4 pt-md-4 pt-sm-0">
              <a href="#page-2" className="Banner-link">
                <Icon name="arrow-downward" /> <span className="ms-2">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BannerPremium
