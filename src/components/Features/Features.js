import React from 'react'
import Container from '../Container/Container'
import './Features.scss'

function Features() {
  return (
    <Container>
      <div className="Features">
        <div className="feature">
          <div className="feature-icon">
            <img src="/images/featured/control/Union.png" alt="Gives Full Control" width="120"
                 srcSet="
                  /images/featured/control/Union@2x.png 2x,
                  /images/featured/control/Union@3x.png 3x" />
          </div>
          <div className="features-steps">
            <div className="features-title">Gives Full Control</div>
            <ul className="features-list-items">
              <li>Supports Major Blockchains</li>
              <li>Simple Payment Verification</li>
              <li>Serverless Architecture</li>
            </ul>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src="/images/featured/secure/Union.png" alt="Completely Private" width="120"
                 srcSet="
                  /images/featured/secure/Union@2x.png 2x,
                  /images/featured/secure/Union@3x.png 3x" />
          </div>
          <div className="features-steps">
            <div className="features-title">Completely Private</div>
            <ul className="features-list-items">
              <li>Works in P2P manner</li>
              <li>No AML, No KYC</li>
              <li>Fully Decentralized</li>
            </ul>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src="/images/featured/private/Union.png" alt="Can’t Be Censored" width="120"
                 srcSet="
                  /images/featured/private/Union@2x.png 2x,
                  /images/featured/private/Union@3x.png 3x" />
          </div>
          <div className="features-steps">
            <div className="features-title">Can’t Be Censored</div>
            <ul className="features-list-items">
              <li>Non-Custodial</li>
              <li>Censorship resistant</li>
              <li>Open Source Project</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Features
