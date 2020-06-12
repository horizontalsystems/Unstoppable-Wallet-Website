import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container'
import HeaderLogo from './HeaderLogo.svg'
import Icon from '../Icon'

import './Header.scss'

class Header extends React.Component {
  dropdown = false

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
    this.dropdownNav.style.display = 'none'
    this.onToggleMenu()
  }

  render() {
    const navigation = (
      <div className="nav">
        <div className="nav-item" onClick={this.onClickMenu}>Support</div>
        <div className="nav-item" onClick={this.onClickMenu}>About</div>
        <div className="nav-item" onClick={this.onClickMenu}>Github</div>
      </div>
    )

    return (
      <header className="Header">
        <Container>
          <div className="navbar">
            <Link to="/">
              <img className="Header-logo" src={HeaderLogo} alt="Unstoppable Wallet" />
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
        </div>
      </header>
    )
  }
}

export default Header
