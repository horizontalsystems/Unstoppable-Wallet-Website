'use client'

import { useSpring, animated } from '@react-spring/web'

export function GradientViolet({ running, color = 'violet', fixed }) {
  const props = {}

  if (fixed) {
    props.opacity = 0.5
  } else {
    props.opacity = running ? 1 : 0.5
  }

  let { opacity } = useSpring(props)

  let fill
  if (color === 'grey') fill = '#63716F'
  if (color === 'green') fill = '#29CA56'
  if (color === 'yellow') fill = '#CABA29'
  if (color === 'blue') fill = '#055B77'
  if (color === 'violet') fill = '#511AAA'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={572}
      height={374}
      fill="none"
      className="w-100 h-100 position-absolute object-fit-cover"
    >
      <g filter="url(#a)">
        <animated.ellipse
          cx={354.5}
          cy={406}
          fill={fill}
          fillOpacity={opacity}
          rx={307}
          ry={260.5}
          transform="rotate(90 354.5 406)"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={841}
          height={934}
          x={-66}
          y={-61}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_18415_77111"
            stdDeviation={80}
          />
        </filter>
      </defs>
    </svg>
  )
}

export default GradientViolet

