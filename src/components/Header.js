'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import './Header.css'

export function Header() {
  const [show, setShow] = React.useState(false)

  return (
    <nav className="Header navbar navbar-expand-md fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image className="Header-logo" src="/header-logo.svg" alt="Logo" width={142} height={54} priority />
        </Link>
        <button className="navbar-toggler" onClick={() => setShow(!show)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={cn('collapse navbar-collapse', { show })}>
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
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

export default Header
