import React from 'react'

import { ReactComponent as Burger } from './burger.svg'
import { ReactComponent as Close } from './close.svg'
import { ReactComponent as GooglePlay } from './google-play.svg'
import { ReactComponent as AppStore } from './app-store.svg'
import { ReactComponent as Download } from './download.svg'

const iconComponent = name => {
  switch (name) {
    case 'menu':
      return <Burger />
    case 'menu-close':
      return <Close />
    case 'google-play':
      return <GooglePlay />
    case 'app-store':
      return <AppStore />
    case 'download':
      return <Download />
    default:
      return null
  }
}

function Icon({ name }) {
  return iconComponent(name)
}

export default Icon
