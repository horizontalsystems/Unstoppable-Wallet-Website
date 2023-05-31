import React from 'react'
import cn from 'classnames'

import Container from '../Container'

import './PagePremium.scss'

function PagePremium({ text, info, imgBig, imgSmall, rtl }) {
  const imageBig = (
    <div className="col-sm-12 col-md-6" key="big">
      <img className="Page-footer-img" src={`/images/pages/premium/${imgBig}`} alt="" />
    </div>
  )
  const imageSmall = (
    <div className="col-sm-12 col-md-4" key="small">
      <img className="Page-footer-img" src={`/images/pages/premium/${imgSmall}`} alt="" />
    </div>
  )

  return (
    <Container clipped={false}>
      <div className="Page-Premium Section-space-top Section-space-bottom">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10">
            <div className={cn('Page-Premium-content', { 'Page-Premium-content--rtl': rtl })}>
              <div className="Page-Premium-start">
              </div>
              <div className={cn('Page-Premium-end', { 'text-end': rtl })}>
                <div className="Page-Premium-title Page-Premium-header-text text-gradient">
                  {text}
                </div>
                <div className="Page-Premium-info Page-Premium-info-text pb-0">
                  {info}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {rtl ? [imageBig, imageSmall] : [imageSmall, imageBig]}
        </div>
      </div>
    </Container>
  )
}

export default PagePremium
