'use client'

import { useSpring, animated } from '@react-spring/web'

function Dexes({ running }) {
  const config = {
    tension: 120,
    friction: 14
  }

  const anim1 = useSpring({
    transform: running ? 'translateX(-50px) scale(1.05)' : 'translateX(-50px) scale(1)',
    config
  })

  return (
    <div className="d-flex w-100">
      <animated.img style={anim1} src="/images/dexes/1.png" alt="" width={250} />
    </div>
  )
}

export default Dexes
