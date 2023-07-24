import React from 'react'
import { Tooltip } from 'react-tooltip'
import Icon from '../Icon'
import Button from '../Button'

import './GetWalletActions.scss'

function GetWallet() {
  return (
    <div className="Wallet-actions">
      <div className="Banner-actions">
        <Tooltip
          id="registerTip"
          data-tooltip-place="top"
          variant="light"
          className="QqCodeTooltip"
          content={<img src="/images/qrcode-get-wallet.svg" alt="" />}
        />
        <Button
          className="Button-circle Button-nowrap"
          text="Google Play"
          icon="google-play"
          link="https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet" yellow newTab />
        <Button
          className="Button-circle Button-nowrap"
          text="App Store"
          icon="app-store"
          link="https://itunes.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1&mt=8" yellow newTab />
        <div className="sm-hidden" role="button" data-tooltip-id="registerTip">
          <Icon name="qr-code" />
        </div>
      </div>
      <div className="Banner-links">
        <Button
          className="Button-circle Button-download"
          text="F-Droid"
          icon="f-droid"
          link="https://f-droid.org/en/packages/io.horizontalsystems.bankwallet/" newTab />
        <Button
          className="Button-circle Button-download"
          text="APK file"
          icon="android"
          link="https://github.com/horizontalsystems/unstoppable-wallet-android/releases" newTab />
        <Button
          className="Button-circle Button-download"
          text="Github"
          icon="github"
          link="https://github.com/horizontalsystems" newTab />
        <Button
          className="Button-circle Button-download"
          text="Gitlab"
          icon="gitlab"
          link="https://gitlab.com/horizontal_systems" newTab />
      </div>
    </div>
  )
}

export default GetWallet
