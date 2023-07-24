import React from 'react'
import cn from 'classnames'
import Container from '../Container'

import './Page.scss'

function Page({ img, featureImg, text, info, children, rtl, onMouseLeave }) {

  let imgIcon
  switch (img) {
    case 'bc-yak':
      imgIcon = '/images/page/bc-yak.svg'
      break
    case 'bc-musta':
      imgIcon = '/images/page/bc-musta.svg'
      break
    case 'bc-leo':
    default: {
      imgIcon = '/images/page/bc-leo.svg'
    }
  }

  const image = featureImg
    ? <img key={featureImg} className="Page-img" src={`/images/pages/${featureImg}.png`} srcSet={`/images/pages/${featureImg}@2x.png 2x`} alt={text} />
    : <img className="Page-img" src={imgIcon} alt={text} />

  return (<Container clipped={false}>
    <div className={cn('Page', { 'Page-rtl': rtl })}>
      <div className={cn('Page-content', { 'Page-content--rtl': rtl })}>
        <div className="Page-start">
          {featureImg && <img
            className={cn('Banner-img-gradient', { 'Banner-img-gradient-right': rtl, 'Banner-img-gradient-left': !rtl })}
            src='/images/icon/image-gradient.svg'
            alt=""
          />}
          {image}
        </div>
        <div className="Page-end">
          <div className="Page-title Page-header-text text-gradient">
            {text}
          </div>
          <div className="Page-info Page-info-text">
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
  </Container>)
}

export default Page
