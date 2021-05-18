import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import SubscribeForm from '../Contact/SubscribeForm'
import { ReactComponent as Logo } from './HSlogo.svg'

import './Footer.scss'

class Footer extends React.Component {
  onClickHome = () => {
    if (window.location.pathname === '/') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <header className="Footer">
        <Container>
          <div className="Footer-top">
            <div className="Footer-nav">
              <Link to="/" className="Footer-nav-item" onClick={this.onClickHome}>Home</Link>
              <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="https://horizontalsystems.io">About Us</a>
              <Link to="/faq" className="Footer-nav-item">FAQ</Link>
              <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="https://litrex.academy">Litrex Academy</a>

              <div className="Footer-nav-contact-us">Contact us:</div>
              <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="mailto:hsdao@protonmail.com">hsdao@protonmail.com</a>
            </div>
            <div className="Footer-subscribe">
              <SubscribeForm formCode="m3g0e6" formId="1561498" />
              <div className="Footer-subscribe-info">
                Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.
              </div>
            </div>
          </div>

          <hr className="Divider" />

          <div className="Footer-bottom">
            <a href="https://horizontalsystems.io" target="_blank" rel="noopener noreferrer">
              <Logo className="Logo" />

              <div className="Logo-icon">
                <Icon name="logo" fill="#05C46B" viewBox="0 0 40 40" size="40" />
              </div>
            </a>

            <span>@ 2019 HorizontalSystems</span>
          </div>
        </Container>
      </header>
    )
  }
}

export default Footer
