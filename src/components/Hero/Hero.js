'use client'

import { useState } from 'react'
import Image from 'next/image'
import Download from '@/components/Download'

import './Hero.css'

function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? 'hidden' : 'scroll'
  // }, [isOpen])

  return (
    <div className="bg-hero bg-black">
      <Download isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="container d-flex flex-column">
        <div className="row g-5 align-items-center" style={{ flexGrow: 3 }}>
          <div className="col-lg-6">
            <h1 className="display-2 fw-medium text-steel-light">Master Cryptocurrency The Easy Way</h1>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img className="hero-image" src="/images/banner/wallet-2.png" alt="" />
          </div>
        </div>

        <div className="row g-4 d-flex align-items-center" style={{ flexGrow: 1 }}>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center justify-content-sm-start">
            <button className="btn btn-warning btn-hero d-flex align-items-center justify-content-center rounded-5 px-5"
                    onClick={() => setIsOpen(!isOpen)}>
              <Image src="/icons/download.png" alt="" width="16" height="16" />
              <span className="ms-2">Download</span>
            </button>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="text-grey ps-md-4 ps-sm-2 ps-2 pb-2 small">
              Approved and Audited By:
            </div>
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item mb-2">
                <Image src="/images/banner/bitcoin.svg" alt="" width="100" height="27" />
              </li>
              <li className="nav-item mb-2">
                <Image src="/images/banner/certik.svg" alt="" width="100" height="27" />
              </li>
              <li className="nav-item mb-2">
                <Image src="/images/banner/wallet-scrutiny.svg" alt="" width="100" height="27" />
              </li>
              <li className="nav-item mb-2">
                <Image src="/images/banner/immunfi.svg" alt="" width="100" height="27" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
