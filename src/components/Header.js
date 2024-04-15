import Image from 'next/image'

export default function Header() {
  return (
    <nav className="Header-navbar navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image className="Header-logo" src="/header-logo.svg" alt="Logo" width={142} height={54} priority />
        </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Academy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Github</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gitlab</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
