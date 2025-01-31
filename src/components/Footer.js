import React from 'react'
import Image from 'next/image'
import SubscribeForm from '@/components/Form/SubscribeForm'

export function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-sm-12 col-md-2 mb-3">
          <img src="/images/hs.png" alt="" width="126" />
        </div>

        <div className="col-sm-12 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">About us</a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">FAQ</a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">Courses</a>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">Contact us:</a>
            </li>
            <li className="nav-item mb-4">
              <a href="#" className="nav-link p-0 text-body-secondary">hsdao@protonmail.ch</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">Folow us:</a>
            </li>
            <li className="nav-item mb-3">
              <div className="d-flex gap-4 justify-content-start">
                <div className="">
                  <Image src="/icons/twitter.svg" alt="" width="24" height="24" />
                </div>
                <div className="">
                  <Image src="/icons/reddit.svg" alt="" width="24" height="24" />
                </div>
                <div className="">
                  <Image src="/icons/telegram.svg" alt="" width="24" height="24" />
                </div>
                <div className="">
                  <Image src="/icons/github.svg" alt="" width="24" height="24" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <SubscribeForm formCode="m3g0e6" formId="1561498" />
        </div>
      </div>

      <div className="pt-4 mt-4 border-top">
        <p>@ 2024 HorizontalSystems</p>
      </div>
    </footer>
  )
}

export default Footer
