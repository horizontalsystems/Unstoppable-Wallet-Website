import Container from '../Container'

function PayLoading() {
  return (
    <Container className="Container-analytics" clipped={false}>
      <div className="row justify-content-center">
        <div className="Pay-card Pay-card-big col-md-6 col-sm-12 placeholder-glow">
          Loading
        </div>
      </div>
    </Container>
  )
}

export default PayLoading
