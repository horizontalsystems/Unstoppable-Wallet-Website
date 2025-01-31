'use client'

import { useState } from 'react'
import YoutubeEmbed from '@/components/Video/YoutubeEmbed'
import { VideoTab } from '@/components/Video/VideoTab'

import './Videos.scss'

function Videos() {
  const [active, setActive] = useState({ id: 'multiWallet', autoplay: false })
  const isActive = name => active.id === name ? 'active' : null
  const setState = id => () => setActive({ id, autoplay: true })

  const map = {
    bitcoinWallet: '9gT11AgG_s0',
    multiWallet: '5Z2CzFVjksA',
    nftWallet: 'ZjNFheebl2U',
    watchAddress: 'ii4j-Iv7eyY',
    forInvestors: 'xa2cvT6FagA',
    advancedSearch: 'XIdIsKv16gU',
    analytics: 'c7tDslRVFgA'
  }

  return (
    <div className="Videos-container">
      <div className="Videos-content">
        <div className="tabcontent">
          <YoutubeEmbed embedId={map[active.id]} autoplay={active.autoplay} />
        </div>
      </div>
      <div className="Videos-tabs">
        <div className="tablink-header">Insights</div>
        <VideoTab item="multiWallet" name="Multi Wallet" isActive={isActive} setActive={setState} />
        <VideoTab item="nftWallet" name="NFT Wallet" isActive={isActive} setActive={setState} />
        <VideoTab item="bitcoinWallet" name="Bitcoin Wallet" isActive={isActive} setActive={setState} />
        <VideoTab item="watchAddress" name="Monitoring Wallet" isActive={isActive} setActive={setState} />
        <VideoTab item="forInvestors" name="Investor Wallet" isActive={isActive} setActive={setState} />
        <VideoTab item="advancedSearch" name="Advanced Market Search" isActive={isActive} setActive={setState} />
        <VideoTab item="analytics" name="Advanced Token Analytics" isActive={isActive} setActive={setState} />
      </div>
    </div>
  )
}

export default Videos

