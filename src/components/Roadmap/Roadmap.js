import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Slider from 'react-slick'
import Markdown from '../Markdown/Markdown'
import Container from '../Container'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Roadmap.scss'

import { ReactComponent as Circle } from './circle.svg'

const releases = [
  { version: '0.17', date: 'Nov 23, 2020' },
  { version: '0.18', date: 'Dec 9, 2020' },
  { version: '0.19', date: 'Feb 17, 2021' },
  { version: '0.20', date: 'Apr 22, 2021' },
  { version: '0.21', date: 'May 26, 2021' },
  { version: '0.22', date: 'Aug 16, 2021' },
  { version: '0.23', date: 'Dec 14, 2021' },
  { version: '0.24', date: 'Mar 11, 2022' },
  { version: '0.25', date: 'Jun 8, 2022' },
  { version: '0.26', date: 'Aug 18, 2022' },
  { version: '0.27', date: 'Oct 05, 2022' },
  { version: '0.28', date: 'Nov 2, 2022' },
]

export default function Roadmap() {
  const [active, setActive] = useState(releases.length - 1)

  const sliderStep = useRef()
  const sliderInfo = useRef()
  const sliderSelect = index => {
    setActive(index)
    sliderStep.current.slickGoTo(index)
    sliderInfo.current.slickGoTo(index)
  }

  useEffect(() => {
    sliderSelect(releases.length - 1)
  }, [])

  const stepSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true
  }

  const contentSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  return (
    <div className="Roadmap Section-space-top Section-space-bottom">
      <div className="Page-header-text text-center pb-5 text-gradient">
        Roadmap
      </div>

      <Slider {...stepSettings} ref={sliderStep} className="Roadmap-slide">
        <RoadmapItem isStart />
        {releases.map((release, index) =>
          <RoadmapItem
            key={index}
            isActive={index === active}
            date={release.date}
            version={release.version}
            onClick={() => sliderSelect(index)}
          />
        )}
        <RoadmapItem isEnd />
      </Slider>
      <Slider {...contentSettings} ref={sliderInfo}>
        {releases.map((release, index) =>
          <Container key={index} className="mt-4 Roadmap-content-container">
            <RoadmapDetails version={release.version} />
          </Container>
        )}
      </Slider>
    </div>
  )
}

export function RoadmapItem({ isActive, date, version, onClick, isStart, isEnd }) {
  if (isStart || isEnd) {
    return (
      <div className="Roadmap-step">
        <div className={cn('Roadmap-progress', { 'Roadmap-progress-end': isEnd })} />
      </div>
    )
  }

  const width = isActive ? '24' : '16'
  const height = isActive ? '24' : '16'

  return (
    <div className="Roadmap-step" onClick={onClick}>
      <div className="Roadmap-progress" />
      <div className={cn('Roadmap-circle', { 'Roadmap-circle-active': isActive })}>
        <div className="text-grey small">{date}</div>
        <Circle width={width} height={height} role="button" />
        <div className="text-steel-light">Version {version}</div>
      </div>
    </div>
  )
}

function RoadmapDetails({ version }) {
  return (
    <div className="card card-rounded border-0 bg-steel-10 p-4">
      <div className="card-body Roadmap-highlights scroll">
        <Markdown file={require(`../../releases/${version}.md`)} />
      </div>
      <div className="card-footer pt-3">
        <div className="border-top mt-2 pt-2">
          <a href={`https://github.com/horizontalsystems/unstoppable-wallet-android/releases/tag/${version}.0`}
             target="_blank"
             rel="noopener noreferrer"
             className="text-warning small">Android</a>
          &nbsp;&nbsp;
          <a href={`https://github.com/horizontalsystems/unstoppable-wallet-ios/releases/tag/${version}`}
             target="_blank"
             rel="noopener noreferrer"
             className="text-warning small">iOS</a>
        </div>
      </div>
    </div>
  )
}
