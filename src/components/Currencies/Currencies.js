import React from 'react'
import Container from '../Container/Container'
import './Currencies.scss'

function Currencies() {
  return (
    <Container>
      <div className="currencies">
        <img className="currency-count" src="/images/currencies/Union.png"
             alt="Currencies"
             srcSet="
              /images/currencies/Union@2x.png 2x,
              /images/currencies/Union@3x.png 3x" />

        <div className="currency-info">
          <div className="currencies-title">
            Supported Currencies
          </div>
          <span className="currencies-info">
            While Unstoppable was built primarily for storing Bitcoin and other decentralized public
            cryptocurrencies it also supports a wide range of crypto assets (investemnt tokens)
            running on Ethereum, EOS and Binance blockchains.
          </span>
        </div>
      </div>
      <div className="supported-coins">
        <div>0x <span>(ZRX)</span></div>
        <div>Aelf <span>(ELF)</span></div>
        <div>Ankr Network <span>(ANKR)</span></div>
        <div>Aurora DAO <span>(AURA)</span></div>
        <div>Bancor <span>(BNT)</span></div>
        <div>Basic Attention Token <span>(BAT)</span></div>
        <div>Binance Coin <span>(BNB-ERC20)</span></div>
        <div>Binance Chain <span>(BNB)</span></div>
        <div>Bitcoin BEP2 <span>(BTCB)</span></div>
        <div>Bitcoin <span>(BTC)</span></div>
        <div>Bitcoin Cash <span>(BCH)</span></div>
        <div>Cashaa <span>(CAS)</span></div>
        <div>ChainLink <span>(LINK)</span></div>
        <div>Crypterium <span>(CRPT)</span></div>
        <div>Crypto.com <span>(MCO)</span></div>

        <div>Crypto.com Chain <span>(CRO)</span></div>
        <div>Dai <span>(DAI)</span></div>
        <div>Dash <span>(DASH)</span></div>
        <div>Decentraland <span>(MANA)</span></div>
        <div>Digix DAO <span>(DGD)</span></div>
        <div>Digix Gold <span>(DGX)</span></div>
        <div>Enjin <span>(ENJ)</span></div>
        <div>EOS <span>(EOS)</span></div>
        <div>EOSDT <span>(EOSDT)</span></div>
        <div>Ethereum <span>(ETH)</span></div>
        <div>Everipedia <span>(IQ)</span></div>
        <div>Gemini Dollar <span>(GUSD)</span></div>
        <div>Gifto <span>(GTO)</span></div>
        <div>Golem <span>(GNT)</span></div>
        <div>Holo <span>(HOT)</span></div>

        <div>Huobi Token <span>(HT)</span></div>
        <div>IDEX Membership <span>(IDXM)</span></div>
        <div>IDEX Token <span>(IDEX)</span></div>
        <div>KuCoin Shares <span>(KCS)</span></div>
        <div>Kyber Network <span>(KNC)</span></div>
        <div>Loom <span>(LOOM)</span></div>
        <div>Loopring <span>(LRC)</span></div>
        <div>Maker <span>(MKR)</span></div>
        <div>MEET.ONE <span>(MEETONE)</span></div>
        <div>Mithril <span>(MITH)</span></div>
        <div>Native Utility Token <span>(NUT)</span></div>
        <div>Newdex <span>(NDX</span></div>
        <div>Nexo <span>(NEXO)</span></div>
        <div>OmiseGo <span>(OMG)</span></div>
        <div>Orbs <span>(ORBS)</span></div>

        <div>Paxos Sandart <span>(PAX)</span></div>
        <div>Paytomat <span>(PTI)</span></div>
        <div>Polymath <span>(POLY)</span></div>
        <div>Populous <span>(PPT)</span></div>
        <div>Prospectors Gold <span>(PGL)</span></div>
        <div>Pundi X <span>(NPXS)</span></div>
        <div>Reputation (Augur)<span>(REP)</span></div>
        <div>Revain <span>(R)</span></div>
        <div>STASIS EURS <span>(EURS)</span></div>
        <div>Status <span>(SNT)</span></div>
        <div>Tether USD <span>(USDT)</span></div>
        <div>TrueUSD <span>(TUSD)</span></div>
        <div>USD Coin <span>(USDC)</span></div>
        <div>Walton <span>(WTC)</span></div>
        <div>Wax Token <span>(WAX)</span></div>
        <div>Ziliqa <span>(ZIL)</span></div>
      </div>
    </Container>
  )
}

export default Currencies
