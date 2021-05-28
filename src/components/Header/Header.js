import React from 'react'
import { Link } from 'react-router-dom'
import throttle from 'lodash.throttle'
import cn from 'classnames'

import Container from '../Container'
import HeaderLogo from './HeaderLogo.svg'
import Icon from '../Icon'
import Button from '../Button'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'

import './Header.scss'

class Header extends React.Component {
  state = {}

  dropdown = false

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = throttle(() => {
    if (window.scrollY > 54) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false
      });
    }
  }, 100)

  onToggleMenu = () => {
    const close = this.menuClose
    const toggle = this.menuToggle
    const dropdownNav = this.dropdownNav

    if (this.dropdown) {
      dropdownNav.style.display = 'none'
      close.style.display = 'none'
      toggle.style.display = 'block'
    } else {
      dropdownNav.style.display = 'block'
      close.style.display = 'block'
      toggle.style.display = 'none'
    }

    this.dropdown = !this.dropdown
    // document.body.style.overflow = this.dropdown ? 'hidden' : 'inherit'
  }

  onClickHome = () => {
    if (window.location.pathname === '/') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { sticky } = this.state
    const navigation = (
      <div className="nav">
        <a target="_blank" rel="noopener noreferrer" className="nav-item" href="https://horizontalsystems.io/">
          About Us
        </a>
        <a target="_blank" rel="noopener noreferrer" className="nav-item" href="https://litrex.academy">
          Academy
        </a>
        <Link className="nav-item" to="/faq">FAQ</Link>
        {sticky && <Button
          className="Button-circle nav-btn-item ml-20"
          text="Google Play" icon="google-play"
          link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" yellow newTab />}
        {sticky && <Button
          className="Button-circle nav-btn-item"
          text="App Store" icon="app-store"
          link="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8" yellow newTab />}
      </div>
    )

    return (
      <header className={cn('Header', { 'Header-sticky': sticky })}>
        <Container>
          <div className="navbar">
            <Link to="/" onClick={this.onClickHome}>
              <img className="Header-logo" src={HeaderLogo} alt="Unstoppable Cryptocurrency Wallet" />
            </Link>

            <div className="hide-on-mobile">
              {navigation}
            </div>

            <div className="Menu-wrap" onClick={this.onToggleMenu}>
              <div className="Menu-close" ref={r => this.menuClose = r}>
                <Icon name="menu-close" />
              </div>
              <div className="Menu-toggle" ref={r => this.menuToggle = r}>
                <Icon name="menu" />
              </div>
            </div>
          </div>
        </Container>
        <div className="navbar-dropdown" ref={r => this.dropdownNav = r}>
          {navigation}
          <div className="nav-logo">
            <Logo className="Logo" />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
