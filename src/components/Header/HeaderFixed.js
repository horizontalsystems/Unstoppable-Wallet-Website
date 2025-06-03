'use client'

import { useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'

function HeaderFixed() {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image className="Header-logo" src="/header-logo.svg" alt="Logo" width={142} height={54} priority />
        </Link>

        <button className="navbar-toggler" onClick={() => setShow(!show)}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className={cn('collapse navbar-collapse', { show })} id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="https://litrex.academy" target="_blank" className="nav-link small text-white active" aria-current="page">Academy</a>
            </li>
            <li className="nav-item">
              <a href="https://horizontalsystems.io" target="_blank" className="nav-link small text-white">About</a>
            </li>
            <li className="nav-item">
              <Link href="/faq" className="nav-link small text-white">FAQ</Link>
            </li>
            <li className="nav-item">
              <a href="https://github.com/horizontalsystems" target="_blank" className="nav-link small text-white">Github</a>
            </li>
            <li className="nav-item">
              <a href="https://t.me/unstoppable_announcements" target="_blank" className="nav-link small text-white">Gitlab</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderFixed
