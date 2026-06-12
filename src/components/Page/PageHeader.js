function PageHeader({ title, description, column }) {
  if (column) {
    return (
      <div className="row py-5">
        <div className="col-md-6">
          <h2 className="display-5 fw-medium text-warning mb-0">{title}</h2>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="fs-2 fw-light text-steel-light lh-sm">{description}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="row pb-5">
      <div className="col-md-6">
        <h2 className="fs-5 fw-normal text-warning text-capitalize mb-3">{title}</h2>
        <div className="fs-2 text-steel-light lh-sm fw-light">{description}</div>
      </div>
    </div>
  )
}

export default PageHeader
