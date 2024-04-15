'use client'

import { cloneElement, useState } from 'react'

function CardBig({ title, description, children }) {
  const [run, setRun] = useState(false)

  const onMouseEnter = () => setRun(true)
  const onMouseLeave = () => setRun(false)

  return (
    <div className="card card-big rounded-24 bg-steel-10 overflow-hidden" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="p-4 m-md-2">
            <div className="fs-4 fw-normal text-steel-light mb-2">{title}</div>
            <div className="small text-grey lh-sm">{description}</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-end">
        {cloneElement(children, { running: run })}
      </div>
    </div>
  )
}

export default CardBig

