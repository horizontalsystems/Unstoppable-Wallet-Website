import { createElement } from 'react'
import cn from 'classnames'

import './YellowOffice.scss'

function YellowOffice({ children, className }) {
  return createElement('div', { className: cn('Yellow-background', className), children })
}

export default YellowOffice