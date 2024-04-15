'use client'

import { animated, useSpring } from '@react-spring/web'

export function MultiWalletMarket({ running }) {
  const config = {
    tension: 120,
    friction: 14
  }

  const anim1 = useSpring({
    transform: running ? 'translate3d(-30px,0,0) scale(1.05)' : 'translate3d(30px,0,0) scale(1)',
    config
  })

  const anim2 = useSpring({
    transform: running ? 'scale(1.04)' : 'scale(1)',
    config
  })

  const anim3 = useSpring({
    transform: running ? 'translate3d(30px,0,0) scale(1.05)' : 'translate3d(-30px,0,0) scale(1)',
    config
  })

  return (
    <>
      <animated.img style={anim1} className="Multiwallet-img z-1" src="/images/multi-wallet-market/1.png" alt="" />
      <animated.img style={anim2} className="Multiwallet-img-bg z-2" src="/images/multi-wallet-market/2.png" alt="" />
      <animated.img style={anim3} className="Multiwallet-img z-1" src="/images/multi-wallet-market/3.png" alt="" />
    </>
  )
}

export default MultiWalletMarket
