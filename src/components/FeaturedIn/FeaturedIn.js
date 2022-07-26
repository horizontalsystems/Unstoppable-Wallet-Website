import React from 'react'

import Container from '../Container'
import zcash from './zcash.svg'
import alpaca from './alpaca.svg'
import dash from './dash.svg'
import defillama from './defillama.svg'
import defiyield from './defiyield.svg'
import coingecko from './coingecko.svg'
import ens from './ens.svg'
import blockchair from './blockchair.svg'
import walletConnect from './wallet-connect.svg'
import chainlink from './chainlink.svg'
import ethereum from './ethereum.svg'
import oneInch from './1inch.svg'

import './Featured.scss'

function FeaturedIn() {
  return (
    <Container>
      <div className="Featured">
        <div className="Featured-text Page-header-text text-gradient">Ecosystem Partners</div>
        <div className="Featured-list">
          <a target="_blank" href="https://ethereum.org/en/wallets/find-wallet/" rel="noopener noreferrer">
            <img className="Featured-item" src={ethereum} alt="Ethereum" />
          </a>
          <a target="_blank" href="https://blockchair.com/" rel="noopener noreferrer">
            <img className="Featured-item" src={blockchair} alt="Blockchair" />
          </a>
          <a target="_blank" href="https://1inch.io/" rel="noopener noreferrer">
            <img className="Featured-item" src={oneInch} alt="1 Inch Network" />
          </a>
          <a target="_blank" href="https://defillama.com/" rel="noopener noreferrer">
            <img className="Featured-item" src={defillama} alt="Defi Llama" />
          </a>
          <a target="_blank" href="https://twitter.com/defiyield_app/status/1428469359756955663" rel="noopener noreferrer">
            <img className="Featured-item" src={defiyield} alt="Defi Yield" />
          </a>
          <a target="_blank" href="https://www.coingecko.com/" rel="noopener noreferrer">
            <img className="Featured-item" src={coingecko} alt="Coin Gecko" />
          </a>
          <a target="_blank" href="https://ens.domains/" rel="noopener noreferrer">
            <img className="Featured-item" src={ens} alt="ENS" />
          </a>
          <a target="_blank" href="https://walletconnect.org/wallets" rel="noopener noreferrer">
            <img className="Featured-item" src={walletConnect} alt="Wallet Connect" />
          </a>
          <a target="_blank" href="https://chain.link/" rel="noopener noreferrer">
            <img className="Featured-item" src={chainlink} alt="ChainLink" />
          </a>
          <a target="_blank" href="https://docs.dash.org/en/stable/wallets/third-party.html#unstoppable" rel="noopener noreferrer">
            <img className="Featured-item" src={dash} alt="Dash" />
          </a>
          <a target="_blank" href="https://z.cash/wallets/" rel="noopener noreferrer">
            <img className="Featured-item" src={zcash} alt="ZCash" />
          </a>
          <a target="_blank" href="https://www.alpacafinance.org/" rel="noopener noreferrer">
            <img className="Featured-item" src={alpaca} alt="ZCash" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedIn
