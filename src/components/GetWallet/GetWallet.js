import React from 'react'

import Container from '../Container'
import List from '../List'
import Button from '../Button'
import u from './u.svg'

import './GetWallet.scss'

function GetWallet() {
  return (
    <Container>
      <div className="GetWallet">
        <div className="GetWallet-start">
          <img className="GetWallet-img" src={u} alt="" />
        </div>
        <div className="GetWallet-end">
          <div className="GetWallet-text">
            Get the Unstoppable Wallet app now!
          </div>
          <div className="GetWallet-action">
            <List>
              <Button text="Google Play" icon="google-play" yellow />
              <Button text="App Store" icon="app-store" yellow />
              <Button text="Download APK file" icon="download" />
            </List>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default GetWallet
