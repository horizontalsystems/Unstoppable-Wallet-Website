import React from 'react'
import Feature from '../Feature'
import Container from '../Container'

import './PageHighlight.scss'

function PageHighlight() {
  return (
    <Container>
      <div className="PageHighlight Features">
        <Feature
          icon="circle"
          title="Unchain Assets"
          info="Don't lock yourself in and don't let others do that to you."
          isCard={false} />

        <Feature
          icon="globe"
          title="Go Borderless"
          info="Bypass conditional barriers and access markets globally."
          isCard={false} />

        <Feature
          icon="incognito"
          title="Stay Private"
          info="Do not leak your private and financial data to the world."
          isCard={false} />
      </div>
    </Container>
  )
}

export default PageHighlight
