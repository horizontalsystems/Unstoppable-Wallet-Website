import React from 'react'

import './Lits.scss'

function List({ children }) {
  return (
    <div className="List">
      {children}
    </div>
  )
}

export default List
