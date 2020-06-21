import React from 'react'

import { ReactComponent as Number1 } from './number-1.svg'
import { ReactComponent as Number2 } from './number-2.svg'
import { ReactComponent as Number3 } from './number-3.svg'

import './Card.scss'

function icon(number) {
  switch (number) {
    case '2':
      return <Number2 className="Card-number" />
    case '3':
      return <Number3 className="Card-number" />
    default:
      return <Number1 className="Card-number" />
  }
}

function Card({ number, title, info }) {
  return (
    <div className="Card Card-dark">
      {icon(number)}
      <div className="Card-title">{title}</div>
      <div className="Card-info Card-info--grey">{info}</div>
    </div>
  )
}

export default Card
