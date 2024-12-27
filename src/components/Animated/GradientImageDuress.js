'use client'

import { animated, useSpring } from '@react-spring/web'

export function GradientImageDuress({ running, color, color2 }) {
  const anim1 = useSpring({
    opacity: running ? 0 : 1,
    transform: running ? 'scale(2) translate3d(40%, -20px, 0)' : 'scale(1.6) translate3d(40%, 0px, 0)',
    transformOrigin: 'top center',
  })

  const anim2 = useSpring({
    opacity: running ? 0.5 : 0,
    transform: running ? 'scale(2) translate3d(-15%, -20px, 0)' : 'scale(1.6) translate3d(-15%, 0px, 0)',
    transformOrigin: 'top center',
  })

  return (
    <div className="w-100 h-100 position-absolute d-flex justify-content-center">
      <animated.img className="h-100" src={`/images/gradients/ellipse-${color}.png`} alt="" style={anim1} />
      <animated.img className="h-100" src={`/images/gradients/ellipse-${color2}.png`} alt="" style={anim2} />
    </div>
  )
}

export default GradientImageDuress
