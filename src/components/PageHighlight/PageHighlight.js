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
          info="Make capital immune against inflation, confiscation or censorship."
          isCard={false} />

        <Feature
          icon="globe"
          title="Go Borderless"
          info="Bypass barriers and access market opportunities unconditionally."
          isCard={false} />

        <Feature
          icon="incognito"
          title="Stay Private"
          info="Do not leak your private and financial data to the external world."
          isCard={false} />
      </div>
    </Container>
  )
}

export default PageHighlight
