import React from 'react'

import Container from '../Container'
import GetWalletActions from '../GetWallet/GetWalletActions'
import Icon from '../Icon'

import './Wc.scss'

function Wc() {
  const urlParams = new URLSearchParams(window.location.search)
  const uri = urlParams.get('uri')
  const url = `unstoppable.money://wc?uri=${encodeURIComponent(uri)}`

  return (
    <Container>
      <div className="Wc">

        <div className="mt-5 d-flex flex-column justify-content-center">
          <div className="w-100">
            <div className="mb-5 text-center">
              <Icon name="uw" />
            </div>

            <div className="fs-3 text-center">
              Redirecting to Unstoppable Wallet
            </div>

            <a href={url} className="Button Button-yellow Button-circle my-5 border-0 w-100 justify-content-center text-decoration-none">
              Open Wallet
            </a>
          </div>

          <div className="mt-2">
            <div className="fs-3 text-center mb-4">
              Don’t have the app?
            </div>

            <GetWalletActions btnSteal   />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Wc
