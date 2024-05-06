'use client'

import { useSpring, animated } from '@react-spring/web'

function Analytics({ running }) {
  const config = {
    tension: 120,
    friction: 14
  }

  const anim1 = useSpring({
    transform: running ? 'translate3d(30%,0,0)' : 'translate3d(70%,0,0)',
    opacity: running ? 1 : 0,
    config
  })

  const anim2 = useSpring({
    transform: running ? 'translate3d(-30%,0,0)' : 'translate3d(-40%,0,0)',
    config
  })

  return (
    <div className="d-flex align-items-start mt-sm-5 mt-md-0">
      <animated.img className="coin-analytics-img" style={anim1} src="/images/analytics/1.png" alt="" width={196} />
      <animated.img className="coin-analytics-img" style={anim2} src="/images/analytics/2.png" alt="" width={196} />
    </div>
  )
}

export default Analytics
