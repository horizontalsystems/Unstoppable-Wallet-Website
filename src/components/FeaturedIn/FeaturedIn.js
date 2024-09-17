import React from 'react'

import Container from '../Container'

import './Featured.scss'

function FeaturedIn() {
  return (
    <Container>
      <div className="Featured">
        <div className="Featured-text Page-header-text text-gradient">Ecosystem Partners</div>
        <div className="Featured-list">
          <a target="_blank" href="https://ethereum.org/en/wallets/find-wallet/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/ethereum.svg" alt="Ethereum" />
          </a>
          <a target="_blank" href="https://blockchair.com/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/blockchair.svg" alt="Blockchair" />
          </a>
          <a target="_blank" href="https://1inch.io/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/1inch.svg" alt="1 Inch Network" />
          </a>
          <a target="_blank" href="https://defillama.com/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/defillama.svg" alt="Defi Llama" />
          </a>
          <a target="_blank" href="https://twitter.com/defiyield_app/status/1428469359756955663" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/defiyield.svg" alt="Defi Yield" />
          </a>
          <a target="_blank" href="https://www.coingecko.com/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/coingecko.svg" alt="Coin Gecko" />
          </a>
          <a target="_blank" href="https://ens.domains/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/ens.svg" alt="ENS" />
          </a>
          <a target="_blank" href="https://walletconnect.org/wallets" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/wallet-connect.svg" alt="Wallet Connect" />
          </a>
          <a target="_blank" href="https://chain.link/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/chainlink.svg" alt="ChainLink" />
          </a>
          <a target="_blank" href="https://docs.dash.org/en/stable/wallets/third-party.html#unstoppable" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/dash.svg" alt="Dash" />
          </a>
          <a target="_blank" href="https://z.cash/wallets/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/zcash.svg" alt="ZCash" />
          </a>
          <a target="_blank" href="https://www.ivfun.meme/en/" rel="noopener noreferrer">
            <img className="Featured-item" src="/images/featured/ivfun.svg" alt="ZCash" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedIn
