'use client'

import { cloneElement, useState } from 'react'
import cn from 'classnames'

function CardOverlay({ title, description, children, centerize = false }) {
  const [run, setRun] = useState(false)

  const onMouseEnter = () => setRun(true)
  const onMouseLeave = () => setRun(false)
  const className = cn('card card-regular rounded-24 overflow-hidden bg-steel-10', {
    'align-items-end': !centerize,
    'align-items-center': centerize,
  })

  return (
    <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
