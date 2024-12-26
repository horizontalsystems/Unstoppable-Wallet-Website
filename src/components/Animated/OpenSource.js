'use client'

import { useSpring, animated } from '@react-spring/web'

function OpenSource({ running }) {
  const config = {
    tension: 120,
    friction: 14,
  }

  const anim1 = useSpring({
    transform: running ? 'translateY(25px)' : 'translateY(0px)',
    config
  })

  const anim2 = useSpring({
    transform: running ? 'translateY(-30px)' : 'translateY(0px)',
    opacity: running ? 1 : 0,
    config
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="110"
      fill="none"
      className="mt-4"
    >
      <animated.path
        style={anim1}
        d="M2.832 29.497a2.833 2.833 0 0 1 2.833-2.833h22.031c.757 0 1.483.303 2.015.841l5.47 5.534h27.151a2.833 2.833 0 1 1 0 5.667H33.999a2.833 2.833 0 0 1-2.015-.842l-5.47-5.533H8.498v13.458h53.833a2.833 2.833 0 0 1 2.833 2.833v23.375a8.5 8.5 0 0 1-8.5 8.5H11.332a8.5 8.5 0 0 1-8.5-8.5v-42.5Zm5.667 21.959v20.541a2.833 2.833 0 0 0 2.833 2.834h45.333a2.833 2.833 0 0 0 2.834-2.834V51.456h-51Z"
        fill="#FFFFFF"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <animated.path
        style={anim2}
        d="m51 47 8 8-8 8M17 47l-8 8 8 8m21-16-8 16"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  );
}

export default OpenSource

