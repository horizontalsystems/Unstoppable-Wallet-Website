import React from 'react'
import { ReactComponent as Check } from './check.svg'
import Bitcoin from './bitcoin.svg'
import Certik from './certik.svg'
import WalletScrutiny from './wallet-scrutiny.svg'
import Immunefi from './immunefi.svg'

import './Card.scss'

function CardApproved({ title, info, by }) {
  let image
  if (by === 'Bitcoin') {
    image = Bitcoin
  } else if (by === 'Certik') {
    image = Certik
  } else if (by === 'Immunefi') {
    image = Immunefi
  } else {
    image = WalletScrutiny
  }

  return (
    <div className="card card-rounded border-0 bg-steel-10">
      <div className="card-body d-flex flex-column justify-content-around">
        <div>
          <Check />
          <div className="text-steel-light border-top pt-3 mt-2 text-center">
            {title}
          </div>
          <div className="text-grey pt-3 mt-2 text-center">
            {info}
          </div>
        </div>
        <div className="d-flex justify-content-center text-center mt-5 mb-4">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardApproved
