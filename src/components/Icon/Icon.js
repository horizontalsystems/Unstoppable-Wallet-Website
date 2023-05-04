import React from 'react'

import { ReactComponent as Burger } from './burger.svg'
import { ReactComponent as Close } from './menu-close.svg'
import { ReactComponent as Check } from './check.svg'
import { ReactComponent as Checkmark } from './checkmark.svg'
import { ReactComponent as CloseThin } from './close.svg'
import { ReactComponent as GooglePlay } from './google-play.svg'
import { ReactComponent as AppStore } from './app-store.svg'
import { ReactComponent as FDroid } from './f-droid.svg'
import { ReactComponent as Download } from './download.svg'
import { ReactComponent as QRCode } from './qr-code.svg'
import { ReactComponent as Done } from './done.svg'
import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as ArrowRight } from './arrow-right.svg'
import { ReactComponent as NonCustodial } from './non-custodial.svg'
import { ReactComponent as Wallet } from './wallet.svg'
import { ReactComponent as Pie } from './pie.svg'
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
import { ReactComponent as Profile } from './profile.svg'
import { ReactComponent as Logout } from './logout.svg'
import { ReactComponent as Unlock } from './unlock.svg'

const iconComponent = name => {
  switch (name) {
    case 'menu':
      return <Burger />
    case 'menu-close':
      return <Close />
    case 'arrow-right':
      return <ArrowRight />

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
    case 'pie':
      return <Pie />
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

    //  Form
    case 'done':
      return <Done />
    case 'logo':
      return <Logo />

    case 'check':
      return <Check />
    case 'checkmark':
      return <Checkmark />
    case 'close':
      return <CloseThin />

    // Chain
    case 'ethereum':
      return <Ethereum />
    case 'profile':
      return <Profile />
    case 'logout':
      return <Logout />
    case 'unlock':
      return <Unlock />

    default:
      return null
  }
}

function Icon({ name }) {
  return iconComponent(name)
}

export default Icon
