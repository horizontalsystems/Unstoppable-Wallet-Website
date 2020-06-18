import React from 'react'
import cn from 'classnames'

import Container from '../Container'

import './Page.scss'

function Page({ img, text, children, rtl }) {

  return (
    <Container>
      <div className={cn('Page', { 'Page-rtl': rtl })}>
        <div className={cn('Page-content', { 'Page-content--rtl': rtl })}>
          <div className={cn('Page-start', { 'Page-start--rtl': rtl })}>
            <img
              className="Page-img"
              src={`/images/pages/${img}.png`}
              srcSet={`/images/pages/${img}@2x.png 2x, /images/pages/${img}@3x.png 3x`}
              alt={text}
            />
          </div>
          <div className="Page-end">
            <div className="Page-text">
              {text}
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
