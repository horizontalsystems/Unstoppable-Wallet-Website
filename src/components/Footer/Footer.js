import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import SubscribeForm from '../Contact/SubscribeForm'

import './Footer.scss'

class Footer extends React.Component {

  render() {
    return (
      <header className="Footer">
        <Container>
          <div className="Footer-top">
            <div className="Footer-nav">
              <div className="Footer-nav-item" onClick={() => {}}>Email: hsdao@protonmail.ch</div>
              <div className="Footer-nav-item" onClick={() => {}}>Telegram: t.me/UnstoppableWallet</div>


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
            <Link to="https://horizontalsystems.io/">
              <img
                className="Logo"
                alt="Horizontal Systems"
                src="/images/logo-hs.png"
                srcSet="/images/logo-hs@2x.png 2x, /images/logo-hs@3x.png 3x"
              />

              <div className="Logo-icon">
                <Icon name="logo" fill="#05C46B" viewBox="0 0 40 40" size="40" />
              </div>
            </Link>

            <a href="mailto:hsdao@protonmail.ch">hsdao@protonmail.ch</a>
          </div>
        </Container>
      </header>
    )
  }
}

export default Footer
