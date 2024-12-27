import Image from 'next/image'
import Marquee from 'react-fast-marquee'

function Tickers() {
  return (
    <div>
      <Marquee className="pb-3" direction="left" pauseOnHover>
        <Image src="/images/tickers/ethereum.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/blockchair.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/1inch.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/defillama.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/defiyield.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/coingecko.png" alt="" width="220" height="80" />
      </Marquee>
      <Marquee className="pt-3" direction="right" pauseOnHover>
        <Image src="/images/tickers/ens.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/wc.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/chainlink.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/dash.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/zcash.png" alt="" width="220" height="80" />
        <Image src="/images/tickers/alpaca.png" alt="" width="220" height="80" />
      </Marquee>
    </div>
  )
}

export default Tickers
