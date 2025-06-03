'use client'

import React from 'react'
import cn from 'classnames'
import FaqContent from '@/components/Faq/FaqContent'
import faq from '../../faq.json'

class Faq extends React.Component {
  state = {
    items: {}
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { items } = this.state
    const setItem = state => this.setState({
      items: state
    })

    const mapItem = ({ en }, id, groupId) => {
      const key = `${groupId}-${id}`
      const isActive = items[key]

      return (
        <li key={id} className={cn('Faq-item', { 'Faq-active': isActive })}>
          <div className="Faq-head" onClick={() => setItem({ ...items, [key]: isActive ? null : true })}>
            {en.title}
            <img className="Faq-item-icon" src={isActive ? '/icons/icon-down.svg' : '/icons/icon-up.svg'} width="14" alt="" />
          </div>
          {isActive ? (
            <div className="Faq-content">
              <div className="divider" />
              <FaqContent file={en.markdown} />
            </div>
          ) : null}
        </li>
      )
    }

    return (
      <div>
        <div className="Faq-title">
          FAQ
        </div>
        <ul className="Faq-items">
          {faq.map(({ section, items }, groupId) => [
            <li key={groupId} className="Faq-item-title">
              {section['en']}
            </li>,
            items.map((item, itemId) => mapItem(item, itemId, groupId))
          ])}
        </ul>
      </div>
    )
  }
}

export default Faq
