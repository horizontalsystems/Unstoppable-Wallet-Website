import { useModal } from '../Modal/ModalContext'
import Container from '../Container'
import PayContainer from './PayContainer'
import AddPromoCode from '../Modal/AddPromoCode'

export function ProfileModerator({ promoCodes = [] }) {
  const { setModal } = useModal()

  const onAddPromo = () => setModal(<AddPromoCode />)

  return (
    <PayContainer>
      <Container className="Container-analytics" clipped={false}>
        <div className="mt-3">
          <button type="button" className="btn btn-secondary" onClick={onAddPromo}>Add Promo</button>
        </div>
        <PromoCodeList promoCodes={promoCodes} />
      </Container>
    </PayContainer>
  )
}

export function PromoCodeList({ promoCodes = [] }) {
  return <div className="Pay-card mt-3">
    <div className="color-yellow">
      Promo Codes
    </div>
    <table className="table table-bordered mt-3">
      <thead>
      <tr className="text-grey">
        <th scope="col">Name</th>
        <th scope="col">Expires at</th>
        <th scope="col">Discount Rate</th>
        <th scope="col">Commission Rate</th>
        <th scope="col">Address</th>
      </tr>
      </thead>
      <tbody>
      {promoCodes.map(item => (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.deadline}</td>
          <td>{item.discountRate}</td>
          <td>{item.commissionRate}</td>
          <td>
            <a href={`${process.env.REACT_APP_EXPLORER_URL}/token/${item.address}?a=${process.env.REACT_APP_CONTRACT_ADDRESS}`} rel="nofollow">
              {item.address}
            </a>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
}
