import { createElement } from 'react'
import cn from 'classnames'

import './Container.scss'

function Container({ children, className, fluid, clipped = true }) {
  return createElement('div', {
    className: cn(className, {
      'Container-clipped': clipped,
      'Container-fluid': fluid,
      'Container': !fluid
    }),
    children
  })
}

export default Container
