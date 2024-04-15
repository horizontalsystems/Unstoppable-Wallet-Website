'use client'

import { useSpring, animated } from '@react-spring/web'

function NonCustodial({ running }) {
  const config = {
    tension: 120,
    friction: 14,
  }

  const anim = useSpring({
    transform: running ? 'scale(1.2)' : 'scale(1)',
    transformOrigin: 'center center',
    config
  })

  const animHor1 = useSpring({
    transform: running ? 'translateX(120px)' : 'translateX(0px)',
    width: running ? 20 : 68,
    opacity: running ? 0 : 1,
    config
  })

  const animHor2 = useSpring({
    transform: running ? 'translateX(-60px)' : 'translateX(0px)',
    width: running ? 20 : 68,
    opacity: running ? 0 : 1,
    config
  })

  const animVer1 = useSpring({
    transform: running ? 'translateY(-60px)' : 'translateY(0px)',
    height: running ? 20 : 68,
    opacity: running ? 0 : 1,
    config
  })

  const animVer2 = useSpring({
    transform: running ? 'translateY(120px)' : 'translateY(0px)',
    height: running ? 20 : 68,
    opacity: running ? 0 : 1,
    config
  })

  return (
    <svg width="198" height="198" fill="none" xmlns="http://www.w3.org/2000/svg">
      <animated.path
        style={anim}
        d="M122.615 74.9866C123.527 75.9062 123.527 77.3971 122.615 78.3167L118.644 82.3206L123.843 87.5625C124.756 88.4821 124.756 89.9731 123.843 90.8927L115.279 99.5264C114.367 100.446 112.888 100.446 111.976 99.5264L106.776 94.2845L100.244 100.87C102.013 103.327 103.056 106.35 103.056 109.619C103.056 117.855 96.4325 124.532 88.2622 124.532C80.092 124.532 73.4688 117.855 73.4688 109.619C73.4688 101.382 80.092 94.705 88.2622 94.705C91.5044 94.705 94.5029 95.7564 96.9407 97.5395L119.312 74.9866C120.224 74.067 121.703 74.067 122.615 74.9866ZM110.08 90.9543L113.628 94.5312L118.888 89.2276L115.34 85.6507L110.08 90.9543ZM88.2622 99.4145C82.6721 99.4145 78.1404 103.983 78.1404 109.619C78.1404 115.254 82.6721 119.823 88.2622 119.823C93.8524 119.823 98.3841 115.254 98.3841 109.619C98.3841 103.983 93.8524 99.4145 88.2622 99.4145Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#808085"
      />
      <animated.rect style={animHor1} x="65" y="58" width="68" height="5" rx="2.5" fill="#808085" />
      <animated.rect style={animVer1} x="135" y="65" width="5" height="68" rx="2.5" fill="#808085" />
      <animated.rect style={animHor2} x="65" y="135" width="68" height="5" rx="2.5" fill="#808085" />
      <animated.rect style={animVer2} x="58" y="65" width="5" height="68" rx="2.5" fill="#808085" />
    </svg>

  );
}

export default NonCustodial

