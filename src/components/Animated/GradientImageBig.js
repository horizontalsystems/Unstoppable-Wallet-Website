'use client'

import { animated, useSpring } from '@react-spring/web'

export function GradientImageBig({ running, color, fromZero }) {
  const number = fromZero ? 0 : 0.8
  const spring = useSpring({
    opacity: running ? 1 : number,
    transform: running ? 'scale(2) translateY(-20px)' : `scale(${fromZero ? 1 : 1.6}) translateY(0px)`,
    transformOrigin: 'top center',
  })

  return (
    <div className="w-100 h-100 position-absolute d-flex justify-content-center">
      <animated.img className="h-100" src={`/images/gradients/ellipse-${color}.png`} alt="" style={spring} />
    </div>
  )
}

export default GradientImageBig

