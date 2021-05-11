import React from 'react'
import cn from 'classnames'
import Icon from '../Icon'

import './Feature.scss'

function Feature({ icon, title, info, rtl, onMouseEnter, isActive, isCard = true }) {
  const className = {
    'Feature-rtl': rtl,
    'Feature-card': isCard,
    'Feature-active': isActive
  }

  return (
    <div className={cn('Feature', className)} onMouseEnter={onMouseEnter}>
      <div className="Feature-icon">
        <Icon name={icon} />
      </div>
      <div className="Feature-title">
        {title}
      </div>
      <div className="Feature-info">
        {info}
      </div>
    </div>
  )
}

export default Feature
