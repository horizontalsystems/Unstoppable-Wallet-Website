'use client'

import { useSpring, animated } from '@react-spring/web'

export function GradientGrey({ running }) {

  let { opacity } = useSpring({
    opacity: running ? 1 : 0.8
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1170}
      height={387}
      className="w-100 h-100 position-absolute object-fit-cover"
    >
      <g filter="url(#a)">
        <animated.ellipse
          cx={585}
          cy={387}
          fill="#63716F"
          fillOpacity={opacity}
          rx={585}
          ry={187}
        />
      </g>
      <defs>
        <filter
          id="a"
          width={1570}
          height={774}
          x={-200}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_18415_77194"
            stdDeviation={100}
          />
        </filter>
      </defs>
    </svg>
  )
}

export default GradientGrey
