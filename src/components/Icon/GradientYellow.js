'use client'

import { useSpring, animated } from '@react-spring/web'

function GradientYellow({ running }) {
  let { opacity } = useSpring({
    opacity: running ? 1 : 0.7
  })

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
          fill="#CABA29"
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

export default GradientYellow

