import React from 'react'
import { ReactComponent as Star } from './star.svg'

import './Card.scss'

function Card({ title, info }) {
  return (
    <div className="Card">
      <div className="Card-title">
        <Star className="Card-star-icon" /> {title}
      </div>
      <div className="Card-info Card-info--grey">{info}</div>
    </div>
  )
}

export default Card
