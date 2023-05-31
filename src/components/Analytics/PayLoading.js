import Container from '../Container'

function PayLoading({ isFailed }) {
  const content = isFailed ? 'Failed to fetch data' : 'Loading'
  return (
    <Container className="Container-analytics" clipped={false}>
      <div className="row justify-content-center">
        <div className="Pay-card Pay-card-big col-md-6 col-sm-12">
          {content}
        </div>
      </div>
    </Container>
  )
}

export default PayLoading
