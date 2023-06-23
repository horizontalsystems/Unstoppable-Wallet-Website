import React from 'react'
import Check from './check.svg'

function Approved({ title, info, image }) {
  return (
    <div className="card card-rounded border-0 bg-steel-10">
      <div className="card-body d-flex flex-column justify-content-around">
        <div>
          <img src={Check} width="24" height="24" alt="" />
          <div className="text-steel-light border-top pt-3 mt-2 text-center">
            {title}
          </div>
          <div className="text-grey pt-3 mt-2 text-center">
            {info}
          </div>
        </div>
        <div className="d-flex justify-content-center text-center mt-5 mb-4">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Approved
