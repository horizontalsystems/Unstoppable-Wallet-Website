'use client'

import { animated, useSpring } from '@react-spring/web'

export function GradientImageBottomRight({ running, color, fromZero }) {
  const number = fromZero ? 0 : 0.8
  const spring = useSpring({
    opacity: running ? 1 : number,
    transform: running ? 'scale(2) translate3d(10%,-20px,0)' : `scale(${fromZero ? 1 : 1.6}) translate3d(10%,0px,0)`,
    transformOrigin: 'top center',
  })

  return (
    <div className="w-100 h-100 position-absolute d-flex justify-content-center">
      <animated.img className="h-100" src={`/images/gradients/ellipse-${color}.png`} alt="" style={spring} />
    </div>
  )
}

export default GradientImageBottomRight
