'use client'

import { animated, useSpring } from '@react-spring/web'

export function GradientImage({ running, color, fromZero }) {
  const spring = useSpring({
    opacity: running ? 1 : fromZero ? 0 : 0.8,
    transform: running ? 'scale(1.8)' : `scale(${fromZero ? 1 : 1.6})`,
    transformOrigin: 'top center'
  })

  return (
    <div className="w-100 h-100 position-absolute">
      <animated.img className="w-100" src={`/images/gradients/ellipse-${color}.png`} alt="" style={spring} />
    </div>
  )
}

export default GradientImage

