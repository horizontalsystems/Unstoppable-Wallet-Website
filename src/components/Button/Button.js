import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import './Button.scss'

function Button({ text, yellow, icon }) {
  return (
    <div className={cn('Button', { 'Button-yellow': yellow })}>
      <Icon name={icon} />
      <div className="Button-text">
        {text}
      </div>
    </div>
  )
}

export default Button
