import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'

import './Header.scss'

function Header() {
  return (
    <header className="Header">
      <Container>
        <div className="navbar">
          <Link to="/">
            <img className="logo"
                 alt="Horizontal Systems"
                 src="/images/logo.png"
                 srcSet="/images/logo@2x.png 2x, /images/logo@3x.png 3x" />
          </Link>

          <div className="nav">
            <div className="nav-item"><Icon name="apple" /></div>
            <div className="nav-item"><Icon name="google-play" /></div>
            <div className="nav-item"><Icon name="github-icon" /></div>
            <div className="nav-item"><Icon name="android" /></div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
