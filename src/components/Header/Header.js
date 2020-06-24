import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container'
import HeaderLogo from './HeaderLogo.svg'
import Icon from '../Icon'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'

import './Header.scss'

class Header extends React.Component {
  dropdown = false
  static defaultProps = {
    navigate: true
  }

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
  }

  onClickMenu = () => {
    this.onToggleMenu()
    this.dropdownNav.style.display = 'none'

    if (!this.props.navigate) {
      window.location.href = '/'
    }
  }

  render() {
    const navigation = (
      <div className="nav">
        <a className="nav-item" href="https://t.me/unstoppable_development" onClick={this.onClickMenu}>Support</a>
        <a className="nav-item" href="https://github.com/horizontalsystems">About us</a>
        <a className="nav-item" href="https://github.com/horizontalsystems">Github</a>
      </div>
    )

    return (
      <header className="Header">
        <Container>
          <div className="navbar">
            <Link to="/">
              <img className="Header-logo" src={HeaderLogo} alt="Unstoppable Cryptocurrency Wallet" />
            </Link>

            {navigation}

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
