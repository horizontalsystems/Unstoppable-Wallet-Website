'use client'

import { animated, useSpring } from '@react-spring/web'

export function GradientImageBig({ running, color }) {
  const spring = useSpring({
    opacity: running ? 1 : 0.8,
    transform: running ? 'scale(2.5) translateY(-30px)' : `scale(2) translateY(0px)`,
    transformOrigin: 'top center',
  })

  return (
    <div className="w-100 h-100 position-absolute d-flex justify-content-center">
      <animated.img className="h-100" src={`/images/gradients/ellipse-${color}.png`} alt="" style={spring} />
    </div>
  )
}

export default GradientImageBig
