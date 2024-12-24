'use client'

import { useEffect, useMemo, useState } from 'react'
import cn from 'classnames'
import GradientGrey from '@/components/Icon/GradientGrey'
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
              <div className={cn('stepper-controls', currentIndex > 0 ? 'bg-warning' : 'bg-dark')}>
                <img src="/icons/arrow-prev.svg" alt="" width="20" height="20" onClick={handlePrev} />
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
              <div className={cn('stepper-controls', currentIndex === releases.length - 1 ? 'bg-dark' : 'bg-warning')}>
                <img src="/icons/arrow-next.svg" alt="" width="20" height="20" onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-big rounded-32 border-0 overflow-hidden">
        <GradientGrey running={false} />
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
