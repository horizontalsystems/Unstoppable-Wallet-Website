import React from 'react'
import cn from 'classnames'

import Container from '../Container'

import './Page.scss'

function Page({ img, text, info, children, rtl }) {
  return (
    <Container>
      <div className={cn('Page', { 'Page-rtl': rtl })}>
        <div className={cn('Page-content', { 'Page-content--rtl': rtl })}>
          <div className={cn('Page-start', { 'Page-start--rtl': rtl })}>
            <img
              className="Page-img"
              src={`/images/pages/${img}.jpg`}
              alt={text}
            />
          </div>
          <div className="Page-end">
            <div className="Page-title">
              {text}
            </div>
            <div className="Page-info">
              {info}
            </div>
            <div className="Page-action">
              <div className="Features">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Page
