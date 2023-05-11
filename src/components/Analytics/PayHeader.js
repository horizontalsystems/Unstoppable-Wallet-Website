import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect as reduxConnect } from 'react-redux'
import throttle from 'lodash.throttle'
import cn from 'classnames'

import Container from '../Container'
import HeaderLogo from '../Header/HeaderLogo.svg'
import Pairing from '../Modal/Pairing'
import Icon from '../Icon'
import { ReactComponent as Logo } from '../Footer/HSlogo.svg'
import { truncate } from '../../core/utils'
import { connect, disconnect } from '../../redux/wallet-connect-slice'

import '../Header/Header.scss'

class PayHeader extends Component {
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
  }

  render() {
    const { address, parings, isConnected, dispatch, setModal } = this.props
    const { sticky, showDropdown } = this.state

    const onConnect = () => {
      if (parings.length) {
        return setModal(<Pairing />)
      }

      dispatch(connect())
    }

    const toggleDropdown = showDropdown => this.setState({ showDropdown })
    const profile = () => (
      <div className="Button Button-dark Button-circle nav-btn-item">
        <Link to="/analytics-profile" className="text-white">
          {truncate(address, 12)}
        </Link>
        <Link to="/analytics-profile" className="ms-3">
          <Icon name="profile" />
        </Link>
        <div className="ms-2" onClick={() => dispatch(disconnect())}>
          <Icon name="logout" />
        </div>
      </div>
    )

    const guest = (
      <div className="Button Button-yellow Button-circle nav-btn-item" onClick={onConnect}>
        Connect Wallet
      </div>
    )

    const navigation = (
      <div className="nav">
        <div className="Button Button-dark Button-circle nav-btn-item">
          <div className="dropdown" onClick={() => toggleDropdown(!showDropdown)}>
            <div className="dropdown-toggle text-capitalize text-white border-0 pe-0" data-bs-toggle="dropdown">
              <Icon name="ethereum" />
            </div>
            <ul className={cn('dropdown-menu dropdown-menu-end', { show: showDropdown })}>
              <li><a className="dropdown-item" href="/">Ethereum</a></li>
              {/*<li><a className="dropdown-item" href="/">BSC</a></li>*/}
            </ul>
          </div>
        </div>
        {isConnected ? profile() : guest}
      </div>
    )

    return (
      <header className={cn('Header', { 'Header-sticky': sticky })} onClick={() => showDropdown ? toggleDropdown(false) : null}>
        <Container clipped={false}>
          <div className="navbar">
            <Link to="/">
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

const mapStateToProps = ({ wc }) => {
  let address
  if (wc.session) {
    address = wc.session.address
  }

  return {
    address,
    parings: wc.parings,
    isConnected: wc.connecting === 'connected'
  }
}

export default reduxConnect(mapStateToProps)(PayHeader)
