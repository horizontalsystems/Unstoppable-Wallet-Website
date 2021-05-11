import React from 'react'
import Container from '../Container'

function Quote() {
  return (
    <Container>
      <div className="py-5 text-center d-flex justify-content-center">
        <div className="w-75">
          <p className="py-5">
            “Unstoppable is the first multi-coin wallet that supports Bitcoin, Ethereum, and fully shielded Zcash, as well as other coins, and it has
            a
            strong, user-centric architecture in which the users own their own keys and their own privacy."
          </p>
          <p className="text-grey">
            Zooko Wilcox-O'Hearn
          </p>
          <small className="text-grey">
            CEO of the Electric Coin Company (ECC), a for-profit company leading the development of Zcash
          </small>
        </div>
      </div>
    </Container>
  )
}

export default Quote
