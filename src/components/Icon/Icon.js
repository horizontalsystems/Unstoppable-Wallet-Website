import React from 'react'
import { ReactComponent as Burger } from './burger.svg'
import { ReactComponent as Close } from './close.svg'

const iconComponent = name => {
  switch (name) {
    case 'menu':
      return <Burger />
    case 'menu-close':
      return <Close />
    default:
      return null
  }
}

function Icon({ name }) {
  return iconComponent(name)
}

export default Icon
