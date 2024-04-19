'use client'

import Image from 'next/image'
import cn from 'classnames'
import { useState } from 'react'

export default function Header() {
  const [show, setShow] = useState(false)

  return (
    <nav className="Header-navbar navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image className="Header-logo" src="/header-logo.svg" alt="Logo" width={142} height={54} priority />
        </a>
        <button className="navbar-toggler" onClick={() => setShow(!show)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={cn('collapse navbar-collapse', { show })}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link small text-white active" aria-current="page" href="#">Academy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small text-white" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small text-white" href="#">Github</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small text-white" href="#">Gitlab</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
