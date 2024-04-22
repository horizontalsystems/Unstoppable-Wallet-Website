'use client'

import cn from 'classnames'
import { cloneElement, useState } from 'react'

function CardOverlay({ className, title, description, children, isBlack, gradient, centerize = false }) {
  const [run, setRun] = useState(false)

  const onMouseEnter = () => setRun(true)
  const onMouseLeave = () => setRun(false)
  const classNames = cn('card card-regular border-0 rounded-24 overflow-hidden', className, {
    'align-items-end': !centerize,
    'align-items-center': centerize,
    'bg-steel-20': isBlack,
    'bg-steel-10': !isBlack
  })

  return (
    <div className={classNames} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {gradient ? cloneElement(gradient, { running: run }) : null}

      <div className="card-img-overlay p-4 m-md-2 z-1">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="fs-4 fw-normal text-steel-light mb-2">{title}</div>
            <div className="small text-grey lh-sm">{description}</div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        {cloneElement(children, { running: run })}
      </div>
    </div>
  )
}

export default CardOverlay
