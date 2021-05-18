import React from 'react'
import ReactTooltip from 'react-tooltip'
import Icon from '../Icon'
import Button from '../Button'
import AndroidQrCode from './qrcode-get-wallet.svg'

import './GetWalletActions.scss'

function GetWallet() {
  return (
    <div className="Banner-actions">
      <ReactTooltip id="registerTip" place="top" effect="solid">
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
      <div role="button" data-for="registerTip" data-tip>
        <Icon name="qr-code" />
      </div>
      <Button
        className="Button-circle Button-no-padding"
        text="Get it on F-Droid"
        icon="f-droid"
        link="https://gitlab.com/fdroid/rfp/-/issues/1547" newTab />
      <Button
        className="Button-circle Button-no-padding"
        text="Download APK file"
        icon="download"
        link="https://github.com/horizontalsystems/bank-wallet-android/releases" newTab />
    </div>
  )
}

export default GetWallet
