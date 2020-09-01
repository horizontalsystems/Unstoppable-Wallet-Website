import React from 'react'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import SubscribeForm from '../Contact/SubscribeForm'
import { ReactComponent as Logo } from './HSlogo.svg'

import './Footer.scss'

class Footer extends React.Component {

  render() {
    return (
      <header className="Footer">
        <Container>
          <div className="Footer-top">
            <div className="Footer-nav">
              <a className="Footer-nav-item" href="/">Home</a>
              <a className="Footer-nav-item" href="https://horizontalsystems.io">About Us</a>
              <a className="Footer-nav-item" href="https://t.me/UnstoppableWallet">Tech Support</a>
              <a className="Footer-nav-item" href="https://github.com/horizontalsystems">Wallet Code</a>
              <a className="Footer-nav-item" href="https://t.me/unstoppable_development">For Developers</a>
              <a className="Footer-nav-item" href="https://litrex.academy">Academy</a>
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
            <a href="https://horizontalsystems.io">
              <Logo className="Logo" />

              <div className="Logo-icon">
                <Icon name="logo" fill="#05C46B" viewBox="0 0 40 40" size="40" />
              </div>
            </a>

            <span>@ 2020 HorizontalSystems</span>
          </div>
        </Container>
      </header>
    )
  }
}

export default Footer
