import React from 'react'

const iconComponent = name => {
  const image = src => <img className="Icon" src={src} alt="" />

  switch (name) {
    case 'menu':
      return image('/images/icon/burger.svg')
    case 'menu-close':
      return image('/images/icon/menu-close.svg')
    case 'arrow-right':
      return image('/images/icon/arrow-right.svg')
    case 'arrow-downward':
      return image('/images/icon/arrow-down.svg')
    case 'arrow-down':
      return image('/images/icon/arrow-down.svg')
    case 'arrow-up':
      return image('/images/icon/arrow-up.svg')
    case 'caution':
      return image('/images/icon/caution.svg')

    //  Buttons
    case 'google-play':
      return image('/images/icon/google-play.svg')
    case 'google-play-yellow':
      return image('/images/icon/google-play-yellow.svg')
    case 'app-store':
      return image('/images/icon/app-store.svg')
    case 'app-store-yellow':
      return image('/images/icon/app-store-yellow.svg')
    case 'f-droid':
      return image('/images/icon/f-droid.svg')
    case 'download':
      return image('/images/icon/download.svg')
    case 'android':
      return image('/images/icon/android.svg')
    case 'qr-code':
      return image('/images/icon/qr-code.svg')

    //  Pages
    case 'non-custodial':
      return image('/images/icon/non-custodial.svg')
    case 'wallet':
      return image('/images/icon/wallet.svg')
    case 'uw':
      return image('/images/icon/uw.svg')
    case 'wallet-connect':
      return image('/images/icon/wallet-connect.svg')
    case 'blocks':
      return image('/images/icon/blocks.svg')
    case 'chart':
      return image('/images/icon/chart.svg')
    case 'swap':
      return image('/images/icon/swap.svg')
    case 'ring':
      return image('/images/icon/ring.svg')
    case 'stop':
      return image('/images/icon/stop.svg')
    case 'user':
      return image('/images/icon/user.svg')
    case 'incognito':
      return image('/images/icon/incognito.svg')
    case 'circle':
      return image('/images/icon/circle.svg')
    case 'globe':
      return image('/images/icon/globe.svg')
    case 'github':
      return image('/images/icon/github.svg')
    case 'gitlab':
      return image('/images/icon/gitlab.svg')
    case 'logo':
      return image('/images/icon/logo.svg')

    case 'check':
      return image('/images/icon/check.svg')
    case 'checkmark':
      return image('/images/icon/checkmark.svg')
    case 'dots':
      return image('/images/icon/dots.svg')

    // Chain
    case 'ethereum':
      return image('/images/icon/ethereum.svg')
    case 'bsc':
      return image('/images/icon/bsc.svg')
    case 'logout':
      return image('/images/icon/logout.svg')
    case 'unlock':
      return image('/images/icon/unlock.svg')
    case 'locked':
      return image('/images/icon/locked.svg')

    default:
      return null
  }
}

export function Icon({ name }) {
  return iconComponent(name)
}

export default Icon
