function CardPartner({ text, logo, logoUser, username, usernameInfo, link }) {
  return (
    <a className="text-decoration-none" href={link} target="_blank" rel="noopener noreferrer">
      <div className="card card-regular border-0 rounded-24 bg-steel-10 overflow-hidden justify-content-between h-100">
        <div>
          <div className="p-4 pb-0">
            <img src={logo} alt="" style={{ height: 67 }} />
          </div>
          <div className="px-4">
            <div className="text-steel-light mb-2">{text}</div>
          </div>
        </div>
        {logoUser && <div className="px-4 pt-4 pb-4 d-flex flex-column">
          <img src={logoUser} alt="" width={40} height={40} />
          <div className="pt-2" style={{ fontSize: 14, fontWeight: 500 }}>
            {username}
          </div>
          <span className="text-grey" style={{ fontSize: 12 }}>
          {usernameInfo}
        </span>
        </div>}
      </div>
    </a>
  )
}

export default CardPartner
