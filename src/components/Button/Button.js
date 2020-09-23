import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import './Button.scss'

function Button({ className, text, yellow, icon, link, newTab }) {
  const onClick = () => {
    if (newTab) {
      window.open(link, '_blank')
    } else {
      window.location.href = link
    }
  }

  return (
    <div className={cn('Button', { 'Button-yellow': yellow }, className)} onClick={onClick}>
      <Icon name={icon} />
      <div className="Button-text">
        {text}
      </div>
    </div>
  )
}

export default Button
