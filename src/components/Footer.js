import Image from 'next/image'

export function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-sm-12 col-md-2 mb-3">
          <img src="/images/hs.png" alt="" width="126" />
        </div>

        <div className="col-sm-12 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">About us</a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">FAQ</a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">Courses</a>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary">Contact us:</a>
            </li>
            <li className="nav-item mb-4">
              <a href="#" className="nav-link p-0 text-body-secondary">hsdao@protonmail.ch</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">Folow us:</a>
            </li>
            <li className="nav-item mb-3">
              <div className="d-flex gap-4 justify-content-start">
                <div className="">
                  <Image src="/icons/twitter.svg" alt="" width="24" height="24" />
                </div>
                <div className="">
                  <Image src="/icons/reddit.svg" alt="" width="24" height="24" />
                </div>
                <div className="">
                  <Image src="/icons/telegram.svg" alt="" width="24" height="24" />
                </div>
                <div className="">
                  <Image src="/icons/github.svg" alt="" width="24" height="24" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control bg-steel-10" placeholder="Email address" />
              <button className="btn btn-warning rounded-5 px-4" type="button">Subscribe</button>
            </div>
            <p className="my-3">Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.</p>
          </form>
        </div>
      </div>

      <div className="pt-4 mt-4 border-top">
        <p>@ 2024 HorizontalSystems</p>
      </div>
    </footer>
  )
}

export default Footer
