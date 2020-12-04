import React, { useState } from 'react'
import cn from 'classnames'

import Container from '../Container'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Markdown from '../Markdown/Markdown'
import { ReactComponent as IconUp } from './icon-up.svg'
import { ReactComponent as IconDown } from './icon-down.svg'

import faq from '../../faq_ios.json'

import './Faq.scss'

function Faq() {
  const [items, setItem] = useState({})

  const mapItem = ({ en }, id) => {
    const isActive = items[id]

    return (
      <li key={id} className={cn('Faq-item', { 'Faq-active': isActive })}>
        <div className="Faq-head" onClick={() => setItem({ ...items, [id]: isActive ? null : true })}>
          {en.title}
          {isActive
            ? <IconDown className="Faq-item-icon" />
            : <IconUp className="Faq-item-icon" />}
        </div>
        {isActive ? (
          <div className="Faq-content">
            <div className="divider" />
            <Markdown file={require(`../../${en.markdown}`)} />
          </div>
        ) : null}
      </li>
    )
  }

  return (
    <div>
      <Header/>
      <Container>
        <div className="Faq">
          <div className="Faq-title">
            FAQ
          </div>
          <ul className="Faq-items">
            {faq.map(mapItem)}
          </ul>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Faq
