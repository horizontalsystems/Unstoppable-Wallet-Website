import React from 'react'
import Container from '../Container'

import './FeaturesList.scss'

function FeaturesList({ isPremium }) {
  const card = (title, text) => (
    <div className="col-6 col-md-3" key={title}>
      <div className="Features-list-card">
        <div className="Features-list-body">
          <div className="Features-list-title">{title}</div>
          <div className="Features-list-text py-2 text-grey">{text}</div>
        </div>
      </div>
    </div>
  )

  let items
  if (isPremium) {
    items = [
      ['CEX volume and Rank', 'Don\'t lock yourself in and don\'t let others do that to you.'],
      ['DEX volume and Rank', 'Bypass conditional barriers and access markets globally.'],
      ['DEX Liquidity and Rank', 'Do not leak your private and financial data to the world.'],
      ['30 Day Volume', 'Don\'t lock yourself in and don\'t let others do that to you.'],
      ['Active Addresses and Rank', 'Do not leak your private and financial data to the world.'],
      ['Transaction Count and Rank', 'Do not leak your private and financial data to the world.'],
      ['Holders and Major Holders', 'Bypass conditional barriers and access markets globally.'],
      ['Project TVL and Rank', 'Do not leak your private and financial data to the world.'],
      ['Project Revenue and Rank', 'Do not leak your private and financial data to the world.'],
      ['Reports', 'Don\'t lock yourself in and don\'t let others do that to you.'],
      ['Treasuries', 'Bypass conditional barriers and access markets globally.'],
      ['Funding', 'Do not leak your private and financial data to the world.'],
    ]
  } else {
    items = [
      ['Non-custodial', 'Truly self-custodial wallet that gives users unconditional control.'],
      ['Multi-wallet', 'For easy management of many wallets within a single app while staying ultra secure.'],
      ['Open-source', 'Verifiably open source with publicly visible development process.'],
      ['Private', 'Built for strong privacy. No data collected. SPV wallet. Switchable RPC. TOR.'],
      ['Secure', 'Built per standards. Secure enclave. Wallet seed with/out passwords. Audited code.'],
      ['Universal Import/Export', 'Migrate to/from other wallets. Any seed length or language.'],
      ['Advanced in Bitcoin', 'HD wallet, SPV, BIP 44/49/84, passphrases, Taproot, Timelocks, input/output shuffling.'],
      ['EVM wallet', 'Supports all major EVM chains. L2 chains i.e. Arbitrum & Optimism. ENS support.'],
      ['DeFi wallet', 'Interact with any DeFi service via WalletConnect V1 and V2.'],
      ['DEX integration', 'Integrates latest updates from all major DEXes incl. 1INCH, Uniswap, Pancake etc.'],
      ['Market Analytics', 'Market research. Advanced token search & filtering. Market news.'],
      ['Token Analytics', 'Extensive exchange data. On-chain token data. Token rank lists based on data.'],
      ['TX Fee Controls', 'TX fee and nonce controls. EIP-1159 enabled. TX speedup/cancel.'],
      ['TX Filtering', 'Extensive filtering. Anti-spoofing. Double spent alerts. Smart contract labelling.'],
      ['NFT wallet', 'Send/receive NFT tokens. NFT market analytics.'],
      ['Academy', 'Tutorials for onboarding crypto beginners. Extensive FAQ for troubleshooting.'],
      ['Payment Contacts', 'Save payment addresses for convenient access.'],
      ['Easy Backup', 'Options to backup encrypted wallets (aka private keys) to iCloud or offline storage.'],
      ['Wallet Passwords', 'Extra security via BIP39 wallet passphrases. Allows to have one seed for many wallets.'],
      ['Customizable UI', 'App themes, launch screen controls, balance view settings, app icon hide etc']
    ]
  }

  return (
    <Container>
      <div className="Premium-space-top Premium-space-bottom">
        <div className="Page-title Page-header-text text-gradient text-center">
          {isPremium ? 'Premium Features' : 'Wallet Features'}
        </div>
        <div className="Features-list mt-4">
          <div className="row gx-5">
            {items.map(item => card(item[0], item[1]))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FeaturesList
