import { Component } from 'react'
import { Link } from 'react-router-dom'
import throttle from 'lodash.throttle'
import cn from 'classnames'

import Container from '../Container'
import HeaderLogo from './HeaderLogo.svg'
import WalletButton from '../Premium/WalletButton'
import Icon from '../Icon'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'

import './Header.scss'

class Header extends Component {
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
        <Link className="nav-item nav-item-yellow" to="/premium">Premium</Link>
        <a className="nav-item" target="_blank" rel="noopener noreferrer" href="https://litrex.academy">Academy</a>
        <Link className="nav-item" to="/faq">FAQ</Link>
        <a className="nav-item" target="_blank" rel="noopener noreferrer" href="https://horizontalsystems.io/">About</a>
        <WalletButton />
      </div>
    )

    return (
      <header className={cn('Header', { 'Header-sticky': sticky })}>
        <Container clipped={false}>
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
