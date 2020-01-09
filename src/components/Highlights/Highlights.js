import React from 'react'
import Container from '../Container/Container'
import star from './star.svg'
import './Highlights.scss'

function Highlights() {
  return (
    <Container>
      <div className="Highlights">
        <div className="highlight">
          <div className="highlight-title">
            Bitcoin Highlights
          </div>
          <div className="highlight-info">
            <div className="highlight-list">
              <ul>
                <li><img src={star} className="list-style" alt="" /> Smart Fees</li>
                <li><img src={star} className="list-style" alt="" /> Works on BIP 44 / 49 / 66 / 68 / 84</li>
                <li><img src={star} className="list-style" alt="" /> Lock Time Transactions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="highlight-title">
            Blockchains
          </div>
          <div className="highlight-info">
            <div className="highlight-list">
              <ul>
                <li><img src={star} className="list-style" alt="" /> Bitcoin</li>
                <li><img src={star} className="list-style" alt="" /> Bitcoin Cash</li>
                <li><img src={star} className="list-style" alt="" /> Dash</li>
              </ul>
            </div>
            <div className="highlight-list">
              <ul>
                <li><img src={star} className="list-style" alt="" /> Ethereum</li>
                <li><img src={star} className="list-style" alt="" /> Binance DEX</li>
                <li><img src={star} className="list-style" alt="" /> EOSIO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Highlights
