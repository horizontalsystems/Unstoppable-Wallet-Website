'use client'

import { useEffect, useMemo, useState } from 'react'
import cn from 'classnames'
import Markdown from '@/components/Markdown/Markdown'
import releases from './releases.json'

import './Roadmap.css'

function Roadmap() {
  const [releaseNotes, setReleaseNotes] = useState({})
  const [visibleStartIndex, setVisibleStartIndex] = useState(Math.max(releases.length - 4, 0))
  const [current, setCurrent] = useState(releases[releases.length - 1].version)

  useEffect(() => {
    fetch(`/releases?version=${current}`)
      .then(resp => resp.json())
      .then(data => {
        setReleaseNotes({ ...releaseNotes, [current]: data.release })
      })
      .catch(err => {
        console.log(err)
      })
  }, [current])

  const visibleReleases = useMemo(() => releases.slice(visibleStartIndex, visibleStartIndex + 4), [visibleStartIndex])
  const currentIndex = useMemo(() => releases.findIndex(item => item.version === current), [current])
  const currentRelease = releases[currentIndex]

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrent(releases[newIndex].version)

      if (newIndex < visibleStartIndex) {
        setVisibleStartIndex(Math.max(visibleStartIndex - 1, 0))
      }
    }
  }

  const handleNext = () => {
    if (currentIndex < releases.length - 1) {
      const newIndex = currentIndex + 1
      setCurrent(releases[newIndex].version)

      if (newIndex >= visibleStartIndex + 4) {
        setVisibleStartIndex(Math.min(visibleStartIndex + 1, releases.length - 4))
      }
    }
  }

  return (
    <div className="Roadmap">
      <div className="d-flex justify-content-center row">
        <div className="col-sm-12 col-md-10">
          <div className="d-flex justify-content-around align-items-center py-5">
            <div className="flex-grow-1 d-flex justify-content-center">
              <div className={cn('stepper-controls', currentIndex > 0 ? 'bg-warning' : 'bg-steel-20')}>
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={handlePrev}>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M12.5303 16.7803C12.8232 16.4874 12.8232 16.0126 12.5303 15.7197L6.81066 10L12.5303 4.28033C12.8232 3.98744 12.8232 3.51256 12.5303 3.21967C12.2374 2.92678 11.7626 2.92678 11.4697 3.21967L5.21967 9.46967C4.92678 9.76256 4.92678 10.2374 5.21967 10.5303L11.4697 16.7803C11.7626 17.0732 12.2374 17.0732 12.5303 16.7803Z"
                        fill={currentIndex > 0 ? '#000' : '#808085'} />
                </svg>
              </div>
            </div>
            <div className="stepper-wrapper flex-grow-1">
              {visibleReleases.map((item, i) => (
                <div className={cn('stepper-item', { active: item.version === current })} onClick={() => setCurrent(item.version)} key={i}>
                  <div className="step-counter">{item.version}</div>
                </div>
              ))}
            </div>
            <div className="flex-grow-1 d-flex justify-content-center">
              <div className={cn('stepper-controls', currentIndex === releases.length - 1 ? 'bg-steel-20' : 'bg-warning')}>
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={handleNext}>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.46967 16.7803C7.17678 16.4874 7.17678 16.0126 7.46967 15.7197L13.1893 10L7.46967 4.28033C7.17678 3.98744 7.17678 3.51256 7.46967 3.21967C7.76256 2.92678 8.23744 2.92678 8.53033 3.21967L14.7803 9.46967C15.0732 9.76256 15.0732 10.2374 14.7803 10.5303L8.53033 16.7803C8.23744 17.0732 7.76256 17.0732 7.46967 16.7803Z"
                        fill={currentIndex === releases.length - 1 ? '#808085' : '#000'} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-big rounded-32 border-0 overflow-hidden">
        <div className="w-100 h-100 position-absolute d-flex justify-content-center">
          <img
            className="h-100"
            src="/images/gradients/ellipse-grey-1x.png" alt=""
            style={{ transformOrigin: 'top center', transform: 'scale(2)' }} />
        </div>
        <Markdown text={releaseNotes[current]} />
        <div className="card-footer d-flex justify-content-center border-0 px-5 pt-4 pb-3 z-1 bg-dark">
          <div className="d-flex justify-content-between col-md-9 col-12">
            <div className="text-grey">
              {currentRelease?.date}
            </div>
            <div className="">
              <a href={`https://github.com/horizontalsystems/unstoppable-wallet-ios/releases/tag/${current}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-warning me-3">iOS</a>
              <a href={`https://github.com/horizontalsystems/unstoppable-wallet-android/releases/tag/${current}.0`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-warning me-3">Android</a>
              <a href="https://f-droid.org/en/packages/io.horizontalsystems.bankwallet/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-warning">F-Droid</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
