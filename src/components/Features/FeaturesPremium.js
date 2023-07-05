import React from 'react'
import Container from '../Container'

import './FeaturesList.scss'

function FeaturesPremium() {
  const card = (text, index) => (
    <div className="col-12 col-md-6" key={index}>
      <div className="Features-list-card">
        <div className="Features-premium-text py-2 text-grey">
          {text}
        </div>
      </div>
    </div>
  )

  const items = [
    ['Maximize your returns and make informed decisions with unparalleled insights derived from indexing and processing vast amounts of blockchain data.'],
    ['Accessing this level of data is a technical feat that sets us apart from the majority of companies in the space. We have the expertise and capability to extract valuable insights, giving you an edge that few can replicate.'],
    ['Our real-time data analysis, comprehensive market insights, and trend identification provide you with a distinct advantage. Stay steps ahead of the competition and confidently seize lucrative opportunities that others may miss.'],
    ['Discover the exclusive features, benefits, and subscription packages that will enhance your investment journey.']
  ]

  return (
    <Container>
      <div className="Premium-space-top Section-space-bottom">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10">
            <div className="Page-title Page-header-text text-gradient text-center">
              Why Go Premium?
            </div>
            <div className="Features-list mt-4">
              <div className="row">
                {items.map((item, index) => card(item[0], index))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FeaturesPremium
