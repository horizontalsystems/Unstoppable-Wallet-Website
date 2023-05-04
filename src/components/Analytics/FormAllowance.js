import { BigNumber } from '@ethersproject/bignumber'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllowance, selectDiscount, selectPlan, selectToken } from '../../redux/contract-slice'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'
import { approveData } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import { subtractDiscount } from '../../core/utils'
import Icon from '../Icon'

function FormPayment({ setStep }) {
  const dispatch = useDispatch()
  const sessionTopic = useSelector(selectTopic)
  const userAddress = useSelector(selectUserAddress)
  const token = useSelector(selectToken)
  const plan = useSelector(selectPlan)
  const discount = useSelector(selectDiscount)

  const [formState, setFormState] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    dispatch(fetchAllowance(userAddress, token.address))
  }, [dispatch, userAddress, token.address])

  const isPending = formState === 'pending'
  const onApprove = async () => {
    if (isPending) return

    const amount = subtractDiscount(discount, plan.amount)
    const data = approveData(token.address, BigNumber.from(amount).mul(BigNumber.from(10).pow(token.tokenDecimals)))

    setFormState('pending')

    walletConnect.sendRequest(userAddress, sessionTopic, data, token.address)
      .then(() => {
        setFormState('finished')
        setStep(3)
      })
      .catch(e => {
        setError(e.message)
        setFormState('error')
      })
  }

  return (
    <div className="Pay-content-body">
      <div className="Pay-fieldset Pay-fieldset-padding text-center">
        <Icon name="unlock" />
        <div className="fs-2 fw-semibold mt-3 mb-4">
          Approve USDT
        </div>
        <div className="text-grey-50 fs-6">
          Before you can proceed, you need to approve USDT spending.
        </div>
      </div>
      {error && <div className="row">
        <div className="col">
          <div className="mt-2 text-danger">{error}</div>
        </div>
      </div>}
      <button className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center" onClick={onApprove} disabled={isPending}>
        Approve
      </button>
    </div>
  )
}

export default FormPayment
