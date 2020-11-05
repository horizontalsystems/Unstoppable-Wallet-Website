import React from 'react'

import { ReactComponent as Number1 } from './number-1.svg'
import { ReactComponent as Number2 } from './number-2.svg'
import { ReactComponent as Number3 } from './number-3.svg'

import './CardNumber.scss'

function icon(number) {
  switch (number) {
    case '2':
      return <Number2 className="Card-number-icon" />
    case '3':
      return <Number3 className="Card-number-icon" />
    default:
      return <Number1 className="Card-number-icon" />
  }
}

function CardNumber({ number, title, info }) {
  return (
    <div className="Card Card-number">
      {icon(number)}
      <div className="Card-number-title">{title}</div>
      <div className="Card-number-info Card-info--grey">{info}</div>
    </div>
  )
}

export default CardNumber
