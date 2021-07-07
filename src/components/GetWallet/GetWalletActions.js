import React from 'react'
import ReactTooltip from 'react-tooltip'
import Icon from '../Icon'
import Button from '../Button'
import AndroidQrCode from './qrcode-get-wallet.svg'

import './GetWalletActions.scss'

function GetWallet() {
  return (
    <div className="Banner-actions">
      <ReactTooltip id="registerTip" place="top" effect="solid" type="light" className="QqCodeTooltip">
        <img src={AndroidQrCode} alt="" />
      </ReactTooltip>
      <Button
        className="Button-circle"
        text="Google Play"
        icon="google-play"
        link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" yellow newTab />
      <Button
        className="Button-circle"
        text="App Store"
        icon="app-store"
        link="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8" yellow newTab />
      <div className="sm-hidden" role="button" data-for="registerTip" data-tip>
        <Icon name="qr-code" />
      </div>
      <Button
        className="Button-circle Button-download"
        text="Get it on F-Droid"
        icon="f-droid"
        link="https://f-droid.org/en/packages/io.horizontalsystems.bankwallet/" newTab />
      <Button
        className="Button-circle Button-download"
        text="Download APK file"
        icon="download"
        link="https://github.com/horizontalsystems/unstoppable-wallet-android/releases" newTab />
    </div>
  )
}

export default GetWallet
