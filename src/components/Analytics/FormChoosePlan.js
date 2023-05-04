import cn from 'classnames'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPromoCode } from '../../core/web3'
import { subtractDiscount } from '../../core/utils'
import { FormTextItem } from './FormTextItem'
import { connect, selectIsConnected } from '../../redux/wallet-connect-slice'
import { selectDiscount, selectPlan, selectPlans, selectPromo, selectToken, setPlan, setPromo, setPromoDiscount } from '../../redux/contract-slice'

function FormChoosePlan({ showDropdown, setDropdown, setStep }) {
  const dispatch = useDispatch()

  const discount = useSelector(selectDiscount)
  const isConnected = useSelector(selectIsConnected)
  const promo = useSelector(selectPromo)
  const plans = useSelector(selectPlans)
  const plan = useSelector(selectPlan)
  const token = useSelector(selectToken)

  const [formState, setFormState] = useState('')
  const [error, setError] = useState(null)

  const costFinal = (
    <div>
      {discount && <s className={cn('text-grey-50 pe-2 small fw-semibold')}>
        {plan.amount} ${token.symbol}
      </s>}
      <span>{subtractDiscount(discount, plan.amount)} {token.symbol}</span>
    </div>
  )

  const noPromo = !promo || !promo.length
  const isPending = formState === 'pending'
  const onApply = () => {
    if (noPromo || isPending) return

    setFormState('pending')

    getPromoCode(promo)
      .then(({ discountRate }) => {
        setFormState('finished')
        dispatch(setPromoDiscount(discountRate))
      })
      .catch(e => {
        setError(e.message)
        setFormState('error')
      })
  }

  return (
    <div className="Pay-content-body">
      <fieldset className="Pay-fieldset Pay-fieldset-padding">
        <div className="row mb-3">
          <div className="col-sm-6 col-form-label text-grey">Selected Plan</div>
          <div className="col-sm-6">
            <div className="Pay-fieldset-right">
              <div className="dropdown" onClick={() => setDropdown(!showDropdown)}>
                <div className="btn dropdown-toggle text-capitalize text-white border-0 pe-0" data-bs-toggle="dropdown">
                  {plan.interval} {plan.intervalName}
                </div>
                <ul className={cn('dropdown-menu dropdown-menu-end', { show: showDropdown })}>
                  {plans.map(item => (
                    <li key={item.amount} onClick={() => dispatch(setPlan(item))}>
                      <div className="dropdown-item text-capitalize" role="button">
                        {item.interval} {item.intervalName}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FormTextItem title="Cost" value={costFinal} yellow />
      </fieldset>
      <div className="row mt-3">
        <div className="col">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-transparent Pay-fieldset Pay-fieldset-padding border-end-0 shadow-none"
              placeholder="Promo code"
              value={promo}
              onChange={v => dispatch(setPromo(v.target.value))}
            />
            <div className="input-group-text bg-transparent Pay-fieldset border-start-0">
              <div className="Button Button-steal Button-circle me-2" onClick={onApply}>
                Apply
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mt-2 text-grey">Enter a promo code to get a discount</div>
        </div>
      </div>
      {error && <div className="row">
        <div className="col">
          <div className="mt-2 text-danger">{error}</div>
        </div>
      </div>}
      <button
        className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center"
        onClick={() => isConnected ? setStep(2) : dispatch(connect())}
        disabled={isPending}
      >
        {isConnected ? 'Next' : 'Connect Wallet'}
      </button>
    </div>
  )
}

export default FormChoosePlan
