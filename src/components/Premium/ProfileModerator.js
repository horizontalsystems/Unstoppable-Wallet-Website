import { DateTime } from 'luxon'
import { useSelector } from 'react-redux'
import { Fragment, useState } from 'react'
import { selectToken } from '../../redux/contract-slice'
import { useModal } from '../Modal/ModalContext'
import { web3 } from '../../core/web3'
import { WalletConnect } from '../../core/wallet-connect'
import { convertToDecimals, rawAmountToRate } from '../../core/utils'
import Container from '../Container'
import PayContainer from './PayContainer'
import ChangeToken from '../Modal/ChangeToken'
import AddPromoCode from '../Modal/AddPromoCode'
import AddModerator from '../Modal/AddModerator'
import UpdateSubscription from '../Modal/UpdateSubscription'
import Withdraw from '../Modal/Withdraw'
import UpdatePlans from '../Modal/UpdatePlans'
import Icon from '../Icon'

export function ProfileModerator({ isAdmin, isModerator, promoCodes = [], subscriptions = [], updateSubscriptions = [] }) {
  const { setModal } = useModal()

  const onAddPromo = () => setModal(<AddPromoCode />)
  const onModerator = () => setModal(<AddModerator />)
  const onAddSubscription = () => setModal(<UpdateSubscription isAdd />)
  const onSubtractSubscription = () => setModal(<UpdateSubscription />)
  const onChangeToken = () => setModal(<ChangeToken />)
  const onWithdraw = () => setModal(<Withdraw />)
  const onUpdatePlans = () => setModal(<UpdatePlans />)

  return (
    <PayContainer>
      <Container className="Container-analytics" clipped={false}>
        <div className="mt-3">
          {isAdmin && <button type="button" className="btn btn-primary" onClick={onModerator}>Add Moderator</button>}
          {isAdmin && <button type="button" className="btn btn-primary ms-2" onClick={onChangeToken}>Change token</button>}
          {isAdmin && <button type="button" className="btn btn-primary ms-2" onClick={onWithdraw}>Withdraw</button>}
          {isModerator && <button type="button" className="btn btn-primary ms-2" onClick={onAddPromo}>Add Promo</button>}
          {isModerator && <button type="button" className="btn btn-primary ms-2" onClick={onAddSubscription}>Add Subscription</button>}
          {isModerator && <button type="button" className="btn btn-primary ms-2" onClick={onSubtractSubscription}>Subtract Subscription</button>}
          {isModerator && <button type="button" className="btn btn-primary ms-2" onClick={onUpdatePlans}>Update plans</button>}
        </div>
        <PromoCodeList promoCodes={promoCodes} />
        <Subscriptions items={subscriptions} />
        <Whitelist items={updateSubscriptions} />
      </Container>
    </PayContainer>
  )
}

export function PromoCodeList({ promoCodes = [] }) {
  const [subscribers, setSubscribers] = useState({})
  const [fetching, setFetching] = useState({})
  const [toggle, setToggle] = useState({})

  const onGetSubscriptions = async promo => {
    setToggle({ ...toggle, [promo]: !toggle[promo] })

    if (fetching[promo] || subscribers[promo]) {
      return
    }

    try {
      const data = await web3.getSubscribesByPromo(promo)
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
                <td>{rawAmountToRate(item.discountRate)}%</td>
                <td>{rawAmountToRate(item.commissionRate)}%</td>
                <td className="border-end-0">
                  <a href={`${WalletConnect.chain.explorer}/address/${item.address}`} rel="nofollow">
                    {item.address}
                  </a>
                </td>
                <td className="border-start-0">
                  <div role="button" onClick={() => onGetSubscriptions(item.name)}>
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

export function Subscriptions({ items = [] }) {
  const token = useSelector(selectToken)

  return (
    <div className="Pay-card mt-3">
      <div className="color-yellow">
        Subscriptions
      </div>
      <table className="table m-0 mb-4">
        <thead>
        <tr>
          <th><small>Address</small></th>
          <th><small>Duration</small></th>
          <th><small>Cost</small></th>
        </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>
              <a href={`${WalletConnect.chain.explorer}/address/${item.subscriber}`} rel="nofollow">
                <small>{item.subscriber}</small>
              </a>
            </td>
            <td><small>{item.duration} days</small></td>
            <td><small>{convertToDecimals(item.tokenCost, token.decimals, 0).toString()} {token.symbol}</small></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export function Whitelist({ items }) {
  if (!items || !items.length) {
    return null
  }

  return (
    <div className="Pay-card mt-3">
      <div className="color-yellow">
        Whitelist list
      </div>
      <table className="table m-0 mb-4">
        <thead>
        <tr>
          <th><small>Address</small></th>
          <th><small>Duration</small></th>
          <th><small>Deadline</small></th>
        </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>
              <a href={`${WalletConnect.chain.explorer}/address/${item.address}`} rel="nofollow">
                <small>{item.address}</small>
              </a>
            </td>
            <td><small>{item.duration} days</small></td>
            <td><small>{DateTime.fromSeconds(parseInt(item.deadline)).toFormat('DD')}</small></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

function PromoCodeSubscribers({ items }) {
  const token = useSelector(selectToken)

  if (!items || !items.length) {
    return null
  }

  return (
    <tr>
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
          </tr>
          </thead>
          <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <a href={`${WalletConnect.chain.explorer}/address/${item.subscriber}`} rel="nofollow">
                  <small>{item.subscriber}</small>
                </a>
              </td>
              <td><small>{item.duration}</small></td>
              <td><small>{convertToDecimals(item.tokenCost, token.decimals, 0).toString()} {token.symbol}</small></td>
            </tr>
          ))}
          </tbody>
        </table>
      </td>
    </tr>
  )
}
