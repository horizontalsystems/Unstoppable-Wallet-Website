'use client'

import { cloneElement, useState } from 'react'

function CardMedium({ title, description, children }) {
  const [run, setRun] = useState(false)

  const onMouseEnter = () => setRun(true)
  const onMouseLeave = () => setRun(false)

  return (
    <div className="card card-regular rounded-24 bg-steel-10" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="row">
        <div className="col-12 col-md-8 col-lg-7">
          <div className="p-4 m-md-2">
            <div className="fs-4 fw-normal text-steel-light mb-2">{title}</div>
            <div className="small text-grey lh-sm">{description}</div>
          </div>
        </div>
      </div>
      <div className="d-flex h-100 justify-content-center align-items-center">
        {cloneElement(children, { running: run })}
      </div>
    </div>
  )
}

export default CardMedium

