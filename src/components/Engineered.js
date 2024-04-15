function Engineered() {
  return (
    <div className="container">
      <div className="fs-2 fw-light pb-5">Engineered with an am:</div>
      <div className="row g-4 row-cols-1 row-cols-lg-3">
        <div className="col">
          <Step
            number="1"
            title="Self Custody Easy"
            description="Securely manage your digital assets effortlessly with an easy-to-use self-custody solution."
          />
        </div>
        <div className="col">
          <Step
            number="2"
            title="Investing Easy"
            description="Invest effortlessly with a user-friendly platform for seamless and accessible investing."
          />
        </div>
        <div className="col">
          <Step
            number="3"
            title="Learning Easy"
            description="Learn effortlessly with an intuitive and user-friendly educational platform."
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
