function Engineered() {
  return (
    <div className="container">
      <div className="fs-2 fw-light pb-5">Engineered for </div>
      <div className="row g-4 row-cols-1 row-cols-lg-3">
        <div className="col">
          <Step
            number="1"
            title="Ownership"
            description="Crypto ownership made easy, secure and discrete."
          />
        </div>
        <div className="col">
          <Step
            number="2"
            title="Growth"
            description="Advanced research and analytics for crypto markets."
          />
        </div>
        <div className="col">
          <Step
            number="3"
            title="Mastery"
            description="Guides and lessons to grow from zero to master."
          />
        </div>
      </div>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <div className="border-start ps-4">
      <div className="display-3 fw-semibold text-warning">{number}</div>
      <div className="fs-3 fw-normal text-steel-light mb-2">{title}</div>
      <span className="small text-grey">{description}</span>
    </div>
  )
}

export default Engineered
