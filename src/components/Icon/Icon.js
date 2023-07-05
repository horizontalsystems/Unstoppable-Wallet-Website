import React from 'react'

import { ReactComponent as Burger } from './burger.svg'
import { ReactComponent as Close } from './menu-close.svg'
import { ReactComponent as Check } from './check.svg'
import { ReactComponent as Checkmark } from './checkmark.svg'
import { ReactComponent as Dots } from './dots.svg'
import { ReactComponent as GooglePlay } from './google-play.svg'
import { ReactComponent as AppStore } from './app-store.svg'
import { ReactComponent as FDroid } from './f-droid.svg'
import { ReactComponent as Download } from './download.svg'
import { ReactComponent as QRCode } from './qr-code.svg'
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as ArrowRight } from './arrow-right.svg'
import { ReactComponent as ArrowDown } from './arrow-down.svg'
import { ReactComponent as ArrowDownward } from './arrow-down.svg'
import { ReactComponent as ArrowUp } from './arrow-up.svg'
import { ReactComponent as NonCustodial } from './non-custodial.svg'
import { ReactComponent as Wallet } from './wallet.svg'
import { ReactComponent as WalletConnect } from './wallet-connect.svg'
import { ReactComponent as UW } from './uw.svg'
import { ReactComponent as Blocks } from './blocks.svg'
import { ReactComponent as Swap } from './swap.svg'
import { ReactComponent as Chart } from './chart.svg'
import { ReactComponent as Ring } from './ring.svg'
import { ReactComponent as Stop } from './stop.svg'
import { ReactComponent as User } from './user.svg'
import { ReactComponent as Incognito } from './incognito.svg'
import { ReactComponent as Circle } from './circle.svg'
import { ReactComponent as Globe } from './globe.svg'
import { ReactComponent as Github } from './github.svg'
import { ReactComponent as Gitlab } from './gitlab.svg'
import { ReactComponent as Android } from './android.svg'
import { ReactComponent as Ethereum } from './ethereum.svg'
import { ReactComponent as Bsc } from './bsc.svg'
import { ReactComponent as Logout } from './logout.svg'
import { ReactComponent as Unlock } from './unlock.svg'
import { ReactComponent as Locked } from './locked.svg'

const iconComponent = name => {
  switch (name) {
    case 'menu':
      return <Burger />
    case 'menu-close':
      return <Close />
    case 'arrow-right':
      return <ArrowRight />
    case 'arrow-downward':
      return <ArrowDownward />
    case 'arrow-down':
      return <ArrowDown />
    case 'arrow-up':
      return <ArrowUp />

    //  Buttons
    case 'google-play':
      return <GooglePlay />
    case 'app-store':
      return <AppStore />
    case 'f-droid':
      return <FDroid />
    case 'download':
      return <Download />
    case 'android':
      return <Android />
    case 'qr-code':
      return <QRCode />

    //  Pages
    case 'non-custodial':
      return <NonCustodial />
    case 'wallet':
      return <Wallet />
    case 'uw':
      return <UW />
    case 'wallet-connect':
      return <WalletConnect />
    case 'blocks':
      return <Blocks />
    case 'chart':
      return <Chart />
    case 'swap':
      return <Swap />
    case 'ring':
      return <Ring />
    case 'stop':
      return <Stop />
    case 'user':
      return <User />
    case 'incognito':
      return <Incognito />
    case 'circle':
      return <Circle />
    case 'globe':
      return <Globe />
    case 'github':
      return <Github />
    case 'gitlab':
      return <Gitlab />
    case 'logo':
      return <Logo />

    case 'check':
      return <Check />
    case 'checkmark':
      return <Checkmark />
    case 'dots':
      return <Dots />

    // Chain
    case 'ethereum':
      return <Ethereum />
    case 'bsc':
      return <Bsc />
    case 'logout':
      return <Logout />
    case 'unlock':
      return <Unlock />
    case 'locked':
      return <Locked />

    default:
      return null
  }
}

export function Icon({ name }) {
  return iconComponent(name)
}

export default Icon
