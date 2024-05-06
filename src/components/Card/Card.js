'use client'

import { useState, cloneElement } from 'react'
import cn from 'classnames'
import './Card.css'

function Card({ title, description, isBlack, children, gradient, isDesktop }) {
  const [run, setRun] = useState(false)

  const onMouseEnter = () => setRun(true)
  const onMouseLeave = () => setRun(false)

  const className = cn('card card-regular border-0 rounded-24 bg-steel-10 overflow-hidden position-relative', {
    'bg-steel-20': isBlack,
    'bg-steel-10': !isBlack
  })

  return (
    <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {gradient ? cloneElement(gradient, { running: isDesktop && run }) : null}

      <div className="p-4 m-md-2">
        <div className="fs-4 fw-normal text-steel-light mb-2">{title}</div>
        <div className="small text-grey lh-sm">{description}</div>
      </div>
      <div className="card-body d-flex justify-content-center position-relative">
        {cloneElement(children, { running: isDesktop && run })}
      </div>
    </div>
  )
}

export default Card
