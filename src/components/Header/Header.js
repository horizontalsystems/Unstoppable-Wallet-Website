'use client'

import { useEffect, useRef, useState } from 'react'
import { debounce } from 'next/dist/server/utils'
import Download from '@/components/Download'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import './Header.css'

export function Header() {
  const [show, setShow] = useState(false)
  const [prevScrollTop, setPrevScrollTop] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isInBottom, setIsInBottom] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const headerRef = useRef(null)
  const className = cn('Header navbar navbar-expand-md fixed-top', {
    'is-hidden': !isVisible,
    'is-in-bottom': isInBottom
  })

  useEffect(() => {
    const header = headerRef.current

    const onScroll = () => {
      const currScrollTop = document.documentElement.scrollTop
      const headerHeight = header.clientHeight

      setIsVisible(currScrollTop < headerHeight || currScrollTop <= prevScrollTop)
      setIsInBottom(currScrollTop > headerHeight)

      setPrevScrollTop(currScrollTop)
    }

    const handleScroll = debounce(onScroll, 100)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollTop])

  return (
    <nav className={className} ref={headerRef}>
      <div className="container">
        <Download isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Link className="navbar-brand" href="/">
          <Image className="Header-logo" src="/header-logo.svg" alt="Logo" width={142} height={54} priority />
        </Link>
        <button className="navbar-toggler" onClick={() => setShow(!show)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={cn('collapse navbar-collapse', { show })}>
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a href="https://horizontalsystems.io/" target="_blank" className="nav-link small text-white">About</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/horizontalsystems" target="_blank" className="nav-link small text-white">Github</a>
            </li>
            <li className="nav-item">
              <a href="https://gitlab.com/horizontal_systems" target="_blank" className="nav-link small text-white">Gitlab</a>
            </li>
            <li className="nav-item show-on-bottom">
              <div
                className="btn btn-warning d-flex align-items-center justify-content-center rounded-5 px-4 ms-2"
                onClick={() => setIsOpen(!isOpen)}>
                <Image src="/icons/download.png" alt="" width="16" height="16" />
                <span className="ms-2">Download</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
