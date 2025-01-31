import React from 'react'
import cn from 'classnames'

export const VideoTab = ({ name, item, isDisabled, isActive = () => false, setActive = () => false }) => (
  <div className={cn('tablink', isActive(item), { disabled: isDisabled })} onClick={setActive(item)}>
    <span>{name}</span>
  </div>
)
