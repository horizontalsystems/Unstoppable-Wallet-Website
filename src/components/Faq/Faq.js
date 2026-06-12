'use client'

import React from 'react'
import cn from 'classnames'
import MarkdownFaq from '@/components/Markdown/MarkdownFaq'

class Faq extends React.Component {
  state = {
    items: {}
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { groups = [] } = this.props
    const { items } = this.state
    const setItem = state => this.setState({
      items: state
    })

    const mapItem = ({ title, html }, id, groupId) => {
      const key = `${groupId}-${id}`
      const isActive = items[key]

      return (
        <li key={id} className={cn('Faq-item', { 'Faq-active': isActive })}>
          <h3 className="Faq-head fw-normal mb-0" onClick={() => setItem({ ...items, [key]: isActive ? null : true })}>
            {title}
            <img className="Faq-item-icon" src={isActive ? '/icons/icon-down.svg' : '/icons/icon-up.svg'} width="14" alt="" />
          </h3>
          <div className="Faq-content" style={{ display: isActive ? 'block' : 'none' }}>
            <div className="divider" />
            <MarkdownFaq text={html} />
          </div>
        </li>
      )
    }

    return (
      <div>
        <h1 className="Faq-title mb-0">
          FAQ
        </h1>
        <ul className="Faq-items">
          {groups.map(({ section, items }, groupId) => [
            <li key={`section-${groupId}`}>
              <h2 className="Faq-item-title">{section}</h2>
            </li>,
            items.map((item, itemId) => mapItem(item, itemId, groupId))
          ])}
        </ul>
      </div>
    )
  }
}

export default Faq
