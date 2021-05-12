import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Slider from 'react-slick'
import Container from '../Container'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Roadmap.scss'

import { ReactComponent as Circle } from './circle.svg'

const releases = [{
  version: '0.18',
  date: 'Dec 9, 2020',
  title: 'FAQ SECTION, SWAP IMPROVEMENTS, NEW ICONS, IMPROVED PRICE CHARTS, EXTERNAL KEYBOARDS',
  updates: [
    'UI / UX Improvements',
    'Swap Improvements',
    'FAQ section',
    'Price Charts',
    'Zcash improvements',
    'Improved Wallet Restore',
    'Support For External Keyboards',
    'Other'
  ]
}, {
  version: '0.19',
  date: 'Feb 17, 2021',
  title: 'ADDED MARKETS TAB, DISABLED EOS WALLET, TOKEN AUTO DISCOVERY, IMPROVED TX FEE LOGIC',
  updates: [
    'Markets Tab',
    'Defi Imporvements',
    'Ui / UX Improvements',
    'Eos Disabled',
    'Improved Tx Fees',
    'Unstoppable Domains',
    'Bugs & Security Fixes'
  ]
}, {
  version: '0.20',
  date: 'Apr 22, 2021',
  title: 'MARKETS TAB, BINANCE SMART CHAIN, PANCAKE DEX, WALLETCONNECT, SWAP SCREEN',
  updates: [
    'Markets Tab Improvements',
    'Binance Smart Chain',
    'PancakeSwap Integration',
    'WalletConnect Improvements'
  ]
}]

function Roadmap() {
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
    <Container fluid>
      <div className="pt-5">
        <div className="text-center pb-5 display-5">Roadmap</div>
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
          <div key={index} className="Roadmap-step-info">
            <RoadmapDetails title={release.title} items={release.updates} version={release.version} />
          </div>
        )}
      </Slider>
    </Container>
  )
}

export default Roadmap

function RoadmapItem({ isActive, date, version, onClick, isStart, isEnd }) {
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
      <div className="Roadmap-circle">
        <div className="text-grey small">{date}</div>
        <Circle width={width} height={height} role="button" />
        <div className="text-steel-light">Version {version}</div>
      </div>
    </div>
  )
}

function RoadmapDetails({ title, items, version }) {
  return (
    <div className="card card-rounded border-0 bg-steel-10 w-25">
      <div className="card-body">
        <div className="text-grey border-bottom pb-2">
          Highlights
        </div>
        <div className="pt-3">
          <div className="border-bottom pb-3 text-uppercase">{title}</div>
          <ul className="p-0 m-0 pt-3">
            {items.map((item, index) =>
              <li key={index} className="list-unstyled">{index + 1} {item}</li>)
            }
          </ul>
        </div>
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
