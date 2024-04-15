'use client'

import { animated, useSpring } from '@react-spring/web'

export function MultiWallet({ running }) {
  const config = {
    tension: 120,
    friction: 14,
  }

  const anim1 = useSpring({
    transform: running ? 'translateX(-30px)' : 'translateX(30px)',
    config
  })

  const anim2 = useSpring({
    transform: running ? 'translateX(30px)' : 'translateX(-30px)',
    config
  })

  return (
    <>
      <animated.img className="Multiwallet-img z-2" style={anim1} src="/images/multi-wallet/1.png" alt="" />
      <img className="Multiwallet-img z-1" src="/images/multi-wallet/2.png" alt="" />
      <animated.img className="Multiwallet-img z-0" style={anim2} src="/images/multi-wallet/3.png" alt="" />
    </>
  )
}

export default MultiWallet
