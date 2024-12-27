'use client'

import { animated, useSpring } from '@react-spring/web'

function DuressMode({ running }) {
  const config = {
    tension: 120,
    friction: 14
  }

  const anim1 = useSpring({
    transform: running ? 'translate3d(50%,20px,0) scale(1.1)' : 'translate3d(50%,20px,0) scale(1)',
    opacity: running ? 0 : 1,
    config
  })

  const anim2 = useSpring({
    transform: running ? 'translate3d(-50%,20px,0) scale(1.1)' : 'translate3d(-50%,20px,0) scale(1)',
    opacity: running ? 1 : 0,
    config
  })

  return (
    <div className="d-flex align-items-end mt-sm-5 mt-md-0">
      <animated.img className="asasd-img" style={anim1} src="/images/duress/1.png" alt="" width={196} />
      <animated.img className="asasd-img" style={anim2} src="/images/duress/2.png" alt="" width={196} />
    </div>
  )
}

export default DuressMode
