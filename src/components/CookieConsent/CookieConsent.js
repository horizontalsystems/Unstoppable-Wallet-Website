import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

import Container from '../Container'
import closeImage from './close.svg'

import './CookieConsent.scss'

function CookieConsent() {
  const [cookies, setCookie] = useCookies(['consent']);
  const [value, setValue] = useState(0);

  const onChange = () => {
    setCookie('consent', 1, { path: '/' });
    setValue(value + 1)
  }

  if (cookies.consent) {
    return null
  }

  return (
    <div className="CookieConsent">
      <Container className="CookieConsent-Container">
        <div className="CookieConsent-content">
          <div className="CookieConsent-text">
            We use cookies to ensure you get the best experience on our website.
            Please read our privacy policy to find out <Link to="/privacy">more.</Link>
          </div>
          <div className="CookieConsent-action">
            <div className="CookieConsent-accept" onClick={onChange}>
              Accept
            </div>
            <div className="CookieConsent-close">
              <img src={closeImage} alt="Close" onClick={onChange} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CookieConsent
