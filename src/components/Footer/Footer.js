import React from 'react'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import './Footer.scss'

function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <div className="footer-block">
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Contact</div>
            <div className="bottom-menu">
              <a href="mailto:hsdao@protonmail.ch"><Icon name="mail" /> hsdao@protonmail.ch</a>
            </div>
            <div className="bottom-menu">
              <a href="https://t.me/unstoppable_wallet"><Icon name="telegram" /> Live Chat</a>
            </div>
            <div className="bottom-menu">
              <a href="https://github.com/horizontalsystems"><Icon name="github" /> Github</a>
            </div>
          </div>
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Follow</div>
            <div className="bottom-menu">
              <a href="/"><Icon name="mail" /> Twitter</a>
            </div>
            <div className="bottom-menu">
              <a href="https://t.me/unstoppable_wallet"><Icon name="telegram" /> Telegram</a>
            </div>
            <div className="bottom-menu">
              <a href="https://www.youtube.com/channel/UCIL-VOiFRXDvrfUg0DlxFXA"><Icon name="youtube" /> Youtube</a>
            </div>
          </div>
          <div className="footer-menu">
            <div className="bottom-menu bottom-menu-title">Donate</div>
            <div className="bottom-menu">
              <a href="/"><Icon name="btc" /> Copy BTC address</a>
            </div>
            <div className="bottom-menu">
              <a href="/"><Icon name="eth" /> Copy ETH address</a>
            </div>
            <div className="bottom-menu">
              <a href="/"><Icon name="eos" /> Copy EOS address</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
