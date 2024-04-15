import Image from 'next/image'

function Hero() {
  return (
    <div className="container">
      <div className="row g-5 pt-5 mt-3 align-items-center">
        <div className="col-lg-6">
          <div className="pb-5 mb-5">
            <h1 className="display-2 fw-medium text-steel-light">Master Cryptocurrency Investing The Easy Way</h1>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <img className="d-block mx-lg-auto" src="/images/banner/wallet.png" alt="" height="620" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-6">
          <button className="btn btn-warning rounded-5 px-5">Download</button>
        </div>
        <div className="col-6">
          <ul className="nav nav-pills nav-justified">
            <li className="nav-item mb-2">
              <Image src="/images/banner/bitcoin.svg" alt="" width="100" height="27" />
            </li>
            <li className="nav-item mb-2">
              <Image src="/images/banner/certik.svg" alt="" width="100" height="27" />
            </li>
            <li className="nav-item mb-2">
              <Image src="/images/banner/wallet-scrutiny.svg" alt="" width="100" height="27" />
            </li>
            <li className="nav-item mb-2">
              <Image src="/images/banner/immunfi.svg" alt="" width="100" height="27" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
