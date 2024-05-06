import Image from 'next/image'

function Tickers() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <span className="item-collection-1">
          <span className="ticker-item">
            <Image src="/images/tickers/ethereum.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/blockchair.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/1inch.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/defillama.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/defiyield.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/coingecko.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/ens.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/wc.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/chainlink.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/dash.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/zcash.png" alt="" width="220" height="80" />
          </span>
          <span className="ticker-item">
            <Image src="/images/tickers/alpaca.png" alt="" width="220" height="80" />
          </span>
        </span>
      </div>
    </div>
  )
}

export default Tickers
