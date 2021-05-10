import React from 'react'
import cn from 'classnames'

import Container from '../Container'
import ImageGradient from '../Icon/image-gradient.svg'

import './Page.scss'

function Page({ img, featureImg, text, info, children, rtl, onMouseLeave }) {
  const image = featureImg || img

  return (
    <Container clipped={false}>
      <div className={cn('Page', { 'Page-rtl': rtl })}>
        <div className={cn('Page-content', { 'Page-content--rtl': rtl })}>
          <div className="Page-start">
            <img
              className={cn('Banner-img-gradient', { 'Banner-img-gradient-right': rtl, 'Banner-img-gradient-left': !rtl })}
              src={ImageGradient}
              alt=""
            />
            <img
              className="Page-img"
              src={`/images/pages/${image}.png`}
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
              <div className="Features" onMouseLeave={onMouseLeave}>
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
