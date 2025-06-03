import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SubscribeForm from '@/components/Form/SubscribeForm'

export function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-sm-12 col-md-2 mb-3">
          <a href="https://horizontalsystems.io" target="_blank">
            <img src="/images/hs.png" alt="" width="126" />
          </a>
        </div>

        <div className="col-sm-12 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <Link href="/" className="nav-link p-0 text-body-secondary">Home</Link>
            </li>
            <li className="nav-item mb-3">
              <a href="https://horizontalsystems.io" target="_blank" className="nav-link p-0 text-body-secondary">About us</a>
            </li>
            <li className="nav-item mb-3">
              <Link href="/faq" className="nav-link p-0 text-body-secondary">FAQ</Link>
            </li>
            <li className="nav-item mb-3">
              <a href="https://litrex.academy" target="_blank" className="nav-link p-0 text-body-secondary">Academy</a>
            </li>
            <li className="nav-item mb-3">
              <Link href="/tos" className="nav-link p-0 text-body-secondary">Terms of Service</Link>
            </li>
            <li className="nav-item mb-3">
              <Link href="/privacy-policy" className="nav-link p-0 text-body-secondary">Privacy of Policy</Link>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <div className="nav-link p-0 text-body-secondary">Contact us:</div>
            </li>
            <li className="nav-item mb-4">
              <a href="mailto:hello@horizontalsystems.io" className="nav-link p-0 text-body-secondary">hello@horizontalsystems.io</a>
            </li>
            <li className="nav-item mb-2">
              <div className="nav-link p-0 text-body-secondary">Folow us:</div>
            </li>
            <li className="nav-item mb-3">
              <div className="d-flex gap-4 justify-content-start">
                <a href="https://x.com/unstoppablebyhs" target="_blank">
                  <Image src="/icons/twitter.svg" alt="" width="24" height="24" />
                </a>
                <a href="https://t.me/unstoppable_announcements" target="_blank">
                  <Image src="/icons/telegram.svg" alt="" width="24" height="24" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <SubscribeForm formCode="m3g0e6" formId="1561498" />
        </div>
      </div>

      <div className="pt-4 mt-4 border-top">
        <p className="text-grey">@ 2025 HorizontalSystems</p>
      </div>
    </footer>
  )
}

export default Footer
