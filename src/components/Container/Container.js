import { createElement } from 'react'
import './Container.scss'

function Container({ children }) {
  return createElement('div', { className: 'Container', children })
}

export default Container
