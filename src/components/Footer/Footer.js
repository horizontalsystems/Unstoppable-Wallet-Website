import React from 'react'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import { ReactComponent as Logo } from './HSlogo.svg'

import './Footer.scss'

function Footer() {
  return (
    <Container>
      <div className="Divider" />
      <div className="Footer-bottom">
        <a href="https://horizontalsystems.io" target="_blank" rel="noopener noreferrer">
          <Logo className="Logo" />

          <div className="Logo-icon">
            <Icon name="logo" fill="#05C46B" viewBox="0 0 40 40" size="40" />
          </div>
        </a>

        <span>@ 2022 HorizontalSystems</span>
      </div>
    </Container>
  )
}

export default Footer
