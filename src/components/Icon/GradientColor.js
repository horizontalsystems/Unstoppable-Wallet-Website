'use client'

import { useSpring, animated } from '@react-spring/web'

export function GradientColor({ running, color, fromZero }) {
  const number = fromZero ? 0 : 0.8
  let { opacity } = useSpring({
    opacity: running ? 1 : number
  })

  let fill
  if (color === 'grey') fill = '#63716F'
  if (color === 'green') fill = '#29CA56'
  if (color === 'yellow') fill = '#CABA29'
  if (color === 'blue') fill = '#087394'
  if (color === 'violet') fill = '#511AAA'

  if (!fill) {
    return null
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={275}
      height={374}
      className="w-100 h-100 position-absolute object-fit-cover"
    >
      <g filter="url(#a)">
        <animated.ellipse
          cx={139}
          cy={440.5}
          fill={fill}
          fillOpacity={opacity}
          rx={281.5}
          ry={175}
          transform="rotate(90 139 440.5)"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={670}
          height={883}
          x={-196}
          y={-1}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_18415_77227"
            stdDeviation={80}
          />
        </filter>
      </defs>
    </svg>
  )
}

export default GradientColor

