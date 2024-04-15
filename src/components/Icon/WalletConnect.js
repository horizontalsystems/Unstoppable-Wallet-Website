'use client'

import { useSpring, animated } from '@react-spring/web'

function WalletConnect({ running }) {
  const config = {
    tension: 120,
    friction: 14,
  }

  const anim1 = useSpring({
    transform: running ? 'scale(0.9)' : 'scale(1)',
    transformOrigin: 'center center',
    config
  })

  const animStart = useSpring({
    transform: running ? 'translateX(5px)' : 'translateX(0px)',
    opacity: running ? 1 : 0,
    config
  })

  const { x, width, opacity } = useSpring({
    x: running ? 72 : 162,
    width: running ? 90 : 5,
    opacity: running ? 1 : 0,
    config
  })

  const animRect2 = useSpring({
    width: running ? 90 : 5,
    opacity: running ? 1 : 0,
    config
  })

  const animEnd = useSpring({
    transform: running ? 'translateX(-5px)' : 'translateX(0px)',
    // transformOrigin: 'center right',
    opacity: running ? 1 : 0,
    config
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={436} height={100} fill="none">
      <animated.g style={animStart}>
        <path
          fill="#808085"
          fillRule="evenodd"
          d="M56.665 28.747v41.084a7.083 7.083 0 0 1-7.083 7.083H18.415a7.083 7.083 0 0 1-7.083-7.083V28.747a7.083 7.083 0 0 1 7.083-7.083h31.167a7.083 7.083 0 0 1 7.083 7.083Zm-38.25-1.416c-.782 0-1.416.634-1.416 1.416v41.084c0 .782.634 1.416 1.416 1.416h31.167c.782 0 1.417-.634 1.417-1.416V28.747c0-.782-.635-1.416-1.417-1.416H18.415Z"
          clipRule="evenodd"
        />
        <path
          fill="#808085"
          d="M22.665 38.664a2.833 2.833 0 0 1 2.834-2.833h17a2.833 2.833 0 0 1 0 5.666h-17a2.833 2.833 0 0 1-2.834-2.833ZM22.665 49.997a2.833 2.833 0 0 1 2.834-2.833h17a2.833 2.833 0 1 1 0 5.667h-17a2.833 2.833 0 0 1-2.834-2.834ZM22.665 61.33a2.833 2.833 0 0 1 2.834-2.833h17a2.833 2.833 0 1 1 0 5.667h-17a2.833 2.833 0 0 1-2.834-2.833Z"
        />
      </animated.g>
      <animated.path
        style={anim1}
        fill="#808085"
        d="M194.56 35.953c12.946-12.646 33.932-12.646 46.895 0l1.557 1.52a1.58 1.58 0 0 1 0 2.288l-5.326 5.212a.84.84 0 0 1-1.172 0l-2.144-2.088c-9.027-8.82-23.682-8.82-32.709 0l-2.295 2.238a.84.84 0 0 1-1.172 0l-5.343-5.212a1.581 1.581 0 0 1 0-2.288l1.709-1.67Zm57.915 10.757 4.74 4.627a1.581 1.581 0 0 1 0 2.288l-21.388 20.897a1.68 1.68 0 0 1-2.344 0L218.292 59.69a.437.437 0 0 0-.586 0l-15.174 14.833a1.682 1.682 0 0 1-2.345 0l-21.404-20.88a1.581 1.581 0 0 1 0-2.288l4.74-4.627a1.68 1.68 0 0 1 2.344 0l15.191 14.833c.167.15.419.15.586 0l15.174-14.833a1.682 1.682 0 0 1 2.345 0l15.191 14.833c.167.15.418.15.586 0l15.19-14.833c.637-.652 1.692-.652 2.345-.017Z"
      />
      <animated.path
        style={animEnd}
        fill="#808085"
        fillRule="evenodd"
        d="M430.335 67a8.5 8.5 0 0 1-8.5 8.5h-39.667a8.5 8.5 0 0 1-8.5-8.5V33a8.5 8.5 0 0 1 8.5-8.5h31.167a5.667 5.667 0 0 1 5.666 5.667v5.666h2.834a8.5 8.5 0 0 1 8.5 8.5V67Zm-48.167-31.167h31.167v-5.666h-31.167a2.833 2.833 0 1 0 0 5.666Zm0 5.667h39.667a2.834 2.834 0 0 1 2.833 2.833v2.834h-4.25a8.5 8.5 0 0 0 0 17h4.25V67a2.834 2.834 0 0 1-2.833 2.833h-39.667A2.833 2.833 0 0 1 379.335 67V41.016c.886.314 1.84.484 2.833.484Zm42.5 17v-5.667h-4.25a2.833 2.833 0 1 0 0 5.667h4.25Z"
        clipRule="evenodd"
      />
      <animated.rect style={{ opacity }} width={width} height={5} x={x} y={45} fill="#fff" rx={2.5} />
      <animated.rect style={animRect2} width={5} height={5} x={274} y={45} fill="#fff" rx={2.5} />
    </svg>
  );
}

export default WalletConnect

