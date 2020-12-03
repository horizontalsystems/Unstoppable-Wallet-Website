import React, { useState } from 'react'
import marked from "marked";
import cn from 'classnames'

import Container from '../Container'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { ReactComponent as IconUp } from './icon-up.svg'
import { ReactComponent as IconDown } from './icon-down.svg'

import faq from '../../faq_ios.json'

import './Faq.scss'
import Markdown from '../Markdown/Markdown'

function Faq() {
  const [active, setActive] = useState(-1)

  const mapItem = ({ en }, i) => {
    const isActive = i === active

    return (
      <li key={i} className={cn('Faq-item', { 'Faq-active': isActive })} onClick={() => setActive(isActive ? -1 : i)}>
        <div className="Faq-head">
          {en.title}
          {isActive
            ? <IconDown className="Faq-item-icon" />
            : <IconUp className="Faq-item-icon" />}
        </div>
        <div className="Faq-content">
          <Markdown file={en.markdown} />
        </div>
      </li>
    )
  }

  return (
    <div>
      <div className="Home">
        <Header />
      </div>
      <Container className="Faq">
        <div className="Faq-title">
          FAQ
        </div>
        <ul className="Faq-items">
          {faq.map(mapItem)}
        </ul>
      </Container>
      <Footer />
    </div>
  )
}

export default Faq
