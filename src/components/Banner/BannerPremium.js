import { Link } from 'react-router-dom'
import Container from '../Container'
import ImageGradient from './gradient-premium.svg'
import Icon from '../Icon'

function BannerPremium() {
  return (
    <Container clipped={false}>
      <div className="Banner">
        <img className="Banner-img-gradient Banner-img-gradient-top" src={ImageGradient} alt="" />
        <div className="Banner-start">
          <img
            width={410}
            className="Banner-img"
            src="/images/banner/premium.png"
            alt="Unstoppable wallet"
          />
        </div>
        <div className="Banner-end">
          <div className="Banner-end-content">
            <div className="Banner-title text-gradient">
              Maximize Returns with Crypto Analytics
            </div>
            <p className="my-2 py-2 mb-3 text-light-soft">
              Unlock the Power of Exclusive Cryptocurrency Analytics: Make Informed Decisions, Avoid Scams, and Stay Ahead of the Pack for Maximum
              Returns!
            </p>
            <div className="Wallet-actions mt-4">
              <div className="Banner-actions">
                <Link className="Button Button-yellow Button-circle Button-nowrap text-decoration-none" to="/premium-pay">
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
