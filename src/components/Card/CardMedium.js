'use client'

import { cloneElement, useState } from 'react'
import cn from 'classnames'

function CardMedium({ className, title, description, isBlack, gradient, isDesktop, children }) {
  const [run, setRun] = useState(false)

  const onMouseEnter = () => setRun(true)
  const onMouseLeave = () => setRun(false)

  const classNames = cn('card card-regular border-0 rounded-24 overflow-hidden', className, {
    'bg-steel-20': isBlack,
    'bg-steel-10': !isBlack
  })

  return (
    <div className={classNames} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {gradient ? cloneElement(gradient, { running: isDesktop && run }) : null}

      <div className="row">
        <div className="col-12 col-md-8 col-lg-7">
          <div className="p-4 m-md-2">
            <div className="fs-4 fw-normal text-steel-light mb-2">{title}</div>
            <div className="small text-grey lh-sm">{description}</div>
          </div>
        </div>
      </div>

      <div className="d-flex h-100 justify-content-center align-items-center">
        {cloneElement(children, { running: isDesktop && run })}
      </div>
    </div>
  )
}

export default CardMedium

