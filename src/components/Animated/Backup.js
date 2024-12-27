'use client'

import { useSpring, animated } from '@react-spring/web'

function Backup({ running }) {
  const config = {
    tension: 120,
    friction: 14,
  }

  const anim1 = useSpring({
    transform: running ? 'translateY(70px)' : 'translateY(0px)',
    opacity: running ? 1 : 0,
    config
  })

  const anim2 = useSpring({
    transform: running ? 'translateY(40px)' : 'translateY(-10px)',
    opacity: running ? 0 : 1,
    config
  })

  const anim3 = useSpring({
    transform: running ? 'translateY(0px)' : 'translateY(-10px)',
    config
  })

  return (
    <div className="d-flex flex-column">
      <svg width={80} height="150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translateY(-40%)'}}>
        <animated.path
          style={anim1}
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M27.645 10.907A21.252 21.252 0 0 1 46.138.164c11.706 0 21.217 9.443 21.25 21.125 7.206 3.016 12.277 10.118 12.277 18.413 0 11.034-8.973 19.962-20.022 19.962a2.833 2.833 0 0 1 0-5.667c7.938 0 14.356-6.41 14.356-14.295 0-6.495-4.354-11.993-10.332-13.727a2.833 2.833 0 0 1-2.029-3.013c.055-.529.083-1.067.083-1.612 0-8.562-6.968-15.52-15.583-15.52a15.588 15.588 0 0 0-14.593 10.06 2.833 2.833 0 0 1-4.403 1.225 6.97 6.97 0 0 0-4.332-1.496c-3.87 0-6.99 3.123-6.99 6.954 0 .387.032.764.092 1.13a2.833 2.833 0 0 1-1.605 3.03C9.391 29.01 6 33.966 6 39.701c0 7.886 6.417 14.295 14.355 14.295a2.833 2.833 0 1 1 0 5.667C9.306 59.664.332 50.736.332 39.702c0-7.318 3.949-13.707 9.822-17.18.028-6.957 5.693-12.57 12.656-12.57 1.71 0 3.344.34 4.835.955Z"
          clipRule="evenodd"
        />
        <animated.path
          style={anim3}
          fill="#FFFFFF"
          d="M22.8299 112.997C21.7234 114.103 21.7234 115.897 22.8299 117.003C23.9363 118.11 25.7303 118.11 26.8368 117.003L36.1667 107.674L36.1671 140.168C36.1671 141.732 37.4356 143.001 39.0004 143.001C40.5652 143.001 41.8338 141.732 41.8338 140.168L41.8333 107.674L51.1632 117.003C52.2697 118.11 54.0637 118.11 55.1701 117.003C56.2766 115.897 56.2766 114.103 55.1701 112.997L41.0035 98.8299C40.4721 98.2985 39.7514 98 39 98C38.2486 98 37.5279 98.2985 36.9965 98.8299L22.8299 112.997Z"
        />
        <animated.path
          style={anim2}
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M14.5 130.167C12.9352 130.167 11.6667 131.435 11.6667 133V151.669C11.6667 153.234 12.9352 154.503 14.5 154.503H65.5C67.0648 154.503 68.3333 153.234 68.3333 151.669V133C68.3333 131.435 67.0648 130.167 65.5 130.167H59.8333C58.2685 130.167 57 128.898 57 127.333C57 125.769 58.2685 124.5 59.8333 124.5H65.5C70.1944 124.5 74 128.306 74 133V151.669C74 156.364 70.1944 160.169 65.5 160.169H14.5C9.80558 160.169 6 156.364 6 151.669L6 133C6 128.306 9.80558 124.5 14.5 124.5H20.1667C21.7315 124.5 23 125.769 23 127.333C23 128.898 21.7315 130.167 20.1667 130.167H14.5Z"
          clipRule="evenodd"
        />
      </svg>
      <div className="position-absolute bottom-0 mb-4 pb-1">
        {running ? 'To Storage' : 'From App'}
      </div>
    </div>
  )
}

export default Backup