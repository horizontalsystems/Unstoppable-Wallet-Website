import { Fragment, useState } from 'react'
import { useModal } from '../Modal/ModalContext'
import { getSubscribes } from '../../core/web3'
import { convertToDecimals, rawAmountToRate } from '../../core/utils'
import Container from '../Container'
import PayContainer from './PayContainer'
import AddPromoCode from '../Modal/AddPromoCode'
import Icon from '../Icon'

export function ProfileModerator({ promoCodes = [] }) {
  const { setModal } = useModal()

  const onAddPromo = () => setModal(<AddPromoCode />)

  return (
    <PayContainer>
      <Container className="Container-analytics" clipped={false}>
        <div className="mt-3">
          <button type="button" className="btn btn-primary" onClick={onAddPromo}>Add Promo</button>
        </div>
        <PromoCodeList promoCodes={promoCodes} />
      </Container>
    </PayContainer>
  )
}

export function PromoCodeList({ promoCodes = [] }) {
  const [subscribers, setSubscribers] = useState({})
  const [fetching, setFetching] = useState({})
  const [toggle, setToggle] = useState({})

  const onClick = async promo => {
    setToggle({ ...toggle, [promo]: !toggle[promo] })

    if (fetching[promo] || subscribers[promo]) {
      return
    }

    try {
      const data = await getSubscribes(promo)
      setSubscribers({ ...subscribers, [promo]: data })
    } catch (e) {
      console.log(e)
    } finally {
      setFetching({ ...fetching, [promo]: false })
    }
  }

  return (
    <div className="Pay-card mt-3">
      <div className="color-yellow">
        Promo Codes
      </div>
      <table className="table table-bordered mt-3">
        <thead>
        <tr className="text-grey">
          <th>Name</th>
          <th>Expires at</th>
          <th>Discount Rate</th>
          <th>Commission Rate</th>
          <th colSpan="2">Address</th>
        </tr>
        </thead>
        <tbody>
        {promoCodes.map(item => {
          const showSubscribers = toggle[item.name]

          return (
            <Fragment key={item.name}>
              <tr>
                <td>{item.name}</td>
                <td>{item.deadline}</td>
                <td>{rawAmountToRate(item.discountRate)}</td>
                <td>{rawAmountToRate(item.commissionRate)}</td>
                <td className="border-end-0">
                  <a href={`${process.env.REACT_APP_EXPLORER_URL}/token/${item.address}?a=${process.env.REACT_APP_CONTRACT_ADDRESS}`} rel="nofollow">
                    {item.address}
                  </a>
                </td>
                <td className="border-start-0">
                  <div role="button" onClick={() => onClick(item.name)}>
                    {showSubscribers ? <Icon name="arrow-up" /> : <Icon name="arrow-down" />}
                  </div>
                </td>
              </tr>
              <PromoCodeSubscribers items={showSubscribers ? subscribers[item.name] : []} />
            </Fragment>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

function PromoCodeSubscribers({ items = [] }) {
  return items.map(item => (
    <tr key={item.promoCode}>
      <td colSpan="6">
        <small className="color-yellow ms-2">
          Subscribers:
        </small>
        <table className="table m-0 mb-4">
          <thead>
          <tr>
            <th><small>Address</small></th>
            <th><small>Duration</small></th>
            <th><small>Cost</small></th>
            <th><small>Token</small></th>
            <th><small>Promo Code</small></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><small>{item.subscriber}</small></td>
            <td><small>{item.duration}</small></td>
            <td><small>{convertToDecimals(item.tokenCost, 6, 2).toString()}</small></td>
            <td><small>{item.paymentToken}</small></td>
            <td><small>{item.promoCode}</small></td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
  ))
}
