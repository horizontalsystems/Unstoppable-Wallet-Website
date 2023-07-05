import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllowance, selectAddressInfo, selectDiscount, selectPlan, selectPromo, selectToken, setSubscribed } from '../../redux/contract-slice'
import { Icon } from '../Icon'
import { FormTextItem } from './FormTextItem'
import { normalizeError, subtractDiscount } from '../../core/utils'
import { web3 } from '../../core/web3'
import { chains } from '../../core/chain'
import { walletConnect } from '../../core/wallet-connect'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'

function FormPayment() {
  const dispatch = useDispatch()
  const plan = useSelector(selectPlan)
  const promo = useSelector(selectPromo)
  const discount = useSelector(selectDiscount)
  const sessionTopic = useSelector(selectTopic)
  const token = useSelector(selectToken)
  const userAddress = useSelector(selectUserAddress)
  const { expiration } = useSelector(selectAddressInfo)

  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')

  const isPending = formState === 'pending'
  const isFinished = formState === 'finished'
  const onPay = async () => {
    if (isPending) return
    setFormState('pending')
    setError(null)

    const inputData = (promo && discount)
      ? web3.subscribeWithPromoCodeData(plan.duration, promo)
      : web3.subscribeData(plan.duration)

    walletConnect.sendRequest(userAddress, sessionTopic, inputData)
      .then(async () => {
        setFormState('finished')
        dispatch(fetchAllowance(userAddress, token.address))
        dispatch(setSubscribed(userAddress, chains.activeChain.name))
      })
      .catch(e => {
        setError(normalizeError(e.message))
        setFormState('error')
      })
  }

  const costFinal = (
    <div>
      {discount && <s className="text-grey pe-2 small fw-semibold">
        {plan.amount} ${token.symbol}
      </s>}
      <span>{subtractDiscount(discount, plan.amount)} {token.symbol}</span>
    </div>
  )

  const form = () => {
    let dateTime = expiration ? DateTime.fromFormat(expiration, 'DD') : null
    if (!dateTime || !dateTime.isValid) {
      dateTime = DateTime.now()
    }

    return (
      <div>
        <fieldset className="Pay-fieldset Pay-fieldset-padding">
          <FormTextItem className="mb-3" title="Selected Plan" value={`${plan.interval} ${plan.intervalName}`} />
          {expiration && <FormTextItem className="mb-3" title="Current Expiration" value={expiration} />}
          <FormTextItem
            className="mb-3" title={expiration ? 'New Expiration' : 'Expiration'}
            value={dateTime.plus({ days: plan.duration }).toFormat('DD')}
          />
          {promo && discount && <FormTextItem className="mb-3" title="Promo Code" value={promo} />}
          <FormTextItem title="Cost" value={costFinal} yellow />
        </fieldset>
        {error && <div className="row">
          <div className="col">
            <div className="mt-2 text-danger">{error}</div>
          </div>
        </div>}
        <button className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center" onClick={onPay} disabled={isPending}>
          Pay
        </button>
      </div>
    )
  }

  const finish = (
    <div>
      <div className="Pay-fieldset Pay-fieldset-padding text-center">
        <div className="pt-3">
          <Icon name="checkmark" />
        </div>
        <div className="fs-4 fw-semibold mt-3 mb-4">
          Payment completed
        </div>
        <div className="text-grey fs-6">
          Now you can go to the Unstoppable Wallet and use the analytics tools
        </div>
      </div>
      <Link to="/premium-profile" className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center text-decoration-none">
        View Profile
      </Link>
    </div>
  )

  const pending = (
    <div>
      <div className="Pay-fieldset Pay-fieldset-padding text-center">
        <div className="pt-3">
          <Icon name="dots" />
        </div>
        <div className="fs-4 fw-semibold mt-3 mb-4">
          Confirm Payment
        </div>
        <div className="text-grey fs-6">
          Please, confirm the transaction in your wallet.
        </div>
      </div>
      <button className="Button Button-circle mt-4 w-100 border-0 justify-content-center" disabled>
        Pay
      </button>
    </div>
  )

  return (
    <div className="Pay-content-body">
      {isPending ? pending : isFinished ? finish : form()}
    </div>
  )
}

export default FormPayment
