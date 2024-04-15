'use client'

import { useSpring, animated } from '@react-spring/web'

function SpamDetect({ running }) {
  const config = {
    tension: 120,
    friction: 14,
  }

  const anim1 = useSpring({
    transform: running ? 'translateY(30px)' : 'translateY(0px)',
    config
  })

  const anim2 = useSpring({
    transform: running ? 'translateY(-30px)' : 'translateY(0px)',
    config
  })

  const anim3 = useSpring({
    transform: running ? 'scale(0.4)' : 'scale(1)',
    opacity: running ? 0 : 1,
    config
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={162}
      height={172}
      fill="none"
    >
      <animated.path
        style={anim1}
        d="M10.832 8.664a6.5 6.5 0 0 0-6.5 6.5v21.667a6.5 6.5 0 0 0 6.5 6.5h30.333a6.5 6.5 0 0 0 6.5-6.5V15.164a6.5 6.5 0 0 0-6.5-6.5H10.832Zm-2.167 6.5c0-1.197.97-2.167 2.167-2.167h30.333c1.197 0 2.167.97 2.167 2.167v.282l-17.333 8.157-17.334-8.157v-.282Zm0 5.071v16.596c0 1.196.97 2.166 2.167 2.166h30.333c1.197 0 2.167-.97 2.167-2.166V20.235l-16.41 7.723a2.167 2.167 0 0 1-1.846 0l-16.41-7.723ZM73 23a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6H73Zm49 0a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6h-20Zm-20 3a3 3 0 0 1 3-3h5a3 3 0 1 1 0 6h-5a3 3 0 0 1-3-3Zm52-3a3 3 0 1 0 0 6h5a3 3 0 1 0 0-6h-5Z"
        fill="#E1E1E5"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <animated.path
        style={{ ...anim3, transformOrigin: 'center center' }}
        d="M16.282 66.809a2.167 2.167 0 0 0-3.144 1.097L7.166 83.833h-.667a2.167 2.167 0 0 0 0 4.334h39a2.167 2.167 0 0 0 0-4.334h-.664l-5.973-15.927a2.167 2.167 0 0 0-3.143-1.097L26 72.639l-9.718-5.83Zm23.925 17.024-4.489-11.97-8.603 5.162a2.166 2.166 0 0 1-2.23 0l-8.603-5.162-4.488 11.97h28.413Zm.958 8.667a2.167 2.167 0 1 1 4.334 0V94.716c0 5.967-4.862 10.784-10.834 10.784A10.84 10.84 0 0 1 26 101.188a10.84 10.84 0 0 1-8.667 4.312c-5.971 0-10.833-4.817-10.833-10.785V92.5a2.167 2.167 0 0 1 4.333 0h30.333Zm-23.833 8.667a6.497 6.497 0 0 1-6.141-4.334h12.282a6.498 6.498 0 0 1-6.141 4.334Zm11.192-4.334a6.498 6.498 0 0 0 6.141 4.334c2.85 0 5.26-1.816 6.142-4.334H28.524ZM73 83a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6H73Zm49 0a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6h-20Zm-20 3a3 3 0 0 1 3-3h5a3 3 0 1 1 0 6h-5a3 3 0 0 1-3-3Zm52-3a3 3 0 1 0 0 6h5a3 3 0 1 0 0-6h-5Z"
        fill="#FF3D43"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <animated.path
        style={anim2}
        d="M10.832 128.664a6.5 6.5 0 0 0-6.5 6.5v21.667a6.5 6.5 0 0 0 6.5 6.5h30.333a6.5 6.5 0 0 0 6.5-6.5v-21.667a6.5 6.5 0 0 0-6.5-6.5H10.832Zm-2.167 6.5c0-1.197.97-2.167 2.167-2.167h30.333c1.197 0 2.167.97 2.167 2.167v.282l-17.333 8.157-17.334-8.157v-.282Zm0 5.071v16.596c0 1.196.97 2.166 2.167 2.166h30.333c1.197 0 2.167-.97 2.167-2.166v-16.596l-16.41 7.723a2.166 2.166 0 0 1-1.846 0l-16.41-7.723ZM73 143a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6H73Zm49 0a3 3 0 1 0 0 6h20a3 3 0 1 0 0-6h-20Zm-20 3a3 3 0 0 1 3-3h5a3 3 0 1 1 0 6h-5a3 3 0 0 1-3-3Zm52-3a3 3 0 1 0 0 6h5a3 3 0 1 0 0-6h-5Z"
        fill="#E1E1E5"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default SpamDetect
