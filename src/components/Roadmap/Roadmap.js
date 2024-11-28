import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Slider from 'react-slick'
import Markdown from '../Markdown/Markdown'
import Container from '../Container'
import { ReactComponent as Circle } from './circle.svg'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Roadmap.scss'

const releases = [
  { version: '0.1', date: 'Dec 24, 2018' },
  { version: '0.2', date: 'Feb 15, 2019' },
  { version: '0.4', date: 'Apr 17, 2019' },
  { version: '0.5', date: 'May 14, 2019' },
  { version: '0.6', date: 'Jun 19, 2019' },
  { version: '0.7', date: 'Aug 21, 2019' },
  { version: '0.8', date: 'Sep 17, 2019' },
  { version: '0.9', date: 'Oct 7, 2019' },
  { version: '0.10', date: 'Nov 20, 2019' },
  { version: '0.11', date: 'Jan 31, 2020' },
  { version: '0.12', date: 'Mar 4, 2020' },
  { version: '0.13', date: 'Apr 30, 2020' },
  { version: '0.14', date: 'May 28, 2020' },
  { version: '0.15', date: 'Jul 10, 2020' },
  { version: '0.16', date: 'Sep 22, 2020' },
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
  { version: '0.29', date: 'Jan 3, 2023' },
  { version: '0.30', date: 'Feb 7, 2023' },
  { version: '0.31', date: 'Apr 4, 2023' },
  { version: '0.32', date: 'Apr 25, 2023' },
  { version: '0.33', date: 'Jun 27, 2023' },
  { version: '0.34', date: 'Aug 30, 2023' },
  { version: '0.35', date: 'Sep 25, 2023' },
  { version: '0.36', date: 'Oct 26, 2023' },
  { version: '0.37', date: 'Jan 8, 2024' },
  { version: '0.38', date: 'Apr 18, 2024' },
  { version: '0.39', date: 'Jun 26, 2024' },
  { version: '0.40', date: 'Oct 4, 2024' },
  { version: '0.41', date: 'Nov 27, 2024' },

]

export default function Roadmap() {
  const [active, setActive] = useState(releases.length - 1)

  const sliderStep = useRef()
  const sliderInfo = useRef()
  const sliderSelect = (index, isInit) => {
    setActive(index)
    if (!isInit) {
      sliderStep.current.slickGoTo(index)
      sliderInfo.current.slickGoTo(index)
    }
  }

  useEffect(() => {
    sliderSelect(releases.length - 1, true)
  }, [])

  const stepSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    currentSlide: active
  }

  const contentSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    currentSlide: active
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
