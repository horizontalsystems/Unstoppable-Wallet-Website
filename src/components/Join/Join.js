import React from 'react'
import Container from '../Container'

import twitter from './twitter@3x.png'
import github from './github@3x.png'
import telegram from './telegram@3x.png'
import reddit from './reddit@3x.png'
import discord from './discord@3x.png'
import medium from './medium@3x.png'

import './Join.scss'

function Join() {
  return (
    <Container clipped={false}>
      <div className="Section-head Section-join Page-rtl">
        <div className="Page-content">
          <div className="Page-end">
            <div className="Section-text Join-section-text text-gradient">
              Join Unstoppables
            </div>
            <div className="Section-info Join-section-info">
              Stay on top of Unstoppable happenings. Be the first to know about new features, user reported issues and things we work on!            </div>
          </div>
          <div className="Page-start">
            <div className="Join-icons">
              <div className="Join-icon">
                <a href="https://twitter.com/unstoppablebyhs" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={twitter} alt="Twitter" />
                </a>
              </div>
              <div className="Join-icon">
                <a href="https://github.com/horizontalsystems/" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={github} alt="github" />
                </a>
              </div>
              <div className="Join-icon">
                <a href="https://t.me/unstoppable_announcements" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
            <div className="Join-icons">
              <div className="Join-icon">
                <a href="https://www.reddit.com/r/UNSTOPPABLEWallet/" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={reddit} alt="reddit" />
                </a>
              </div>
              <div className="Join-icon">
                <a href="https://discord.gg/3uECHQ3cEk" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={discord} alt="discord" />
                </a>
              </div>
              <div className="Join-icon">
                <a href="https://unstoppablewallet.medium.com/" target="_blank" rel="noopener noreferrer">
                  <img className="Join-image" src={medium} alt="medium" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Join

