import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import './Button.scss'

function Button({ text, yellow, icon, link }) {
  const onClick = () => {
    window.location.href = link
  }

  return (
    <div className={cn('Button', { 'Button-yellow': yellow })} onClick={onClick}>
      <Icon name={icon} />
      <div className="Button-text">
        {text}
      </div>
    </div>
  )
}

export default Button
