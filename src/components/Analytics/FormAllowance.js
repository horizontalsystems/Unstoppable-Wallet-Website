import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllowance, selectAllowance, selectDiscount, selectPlan, selectToken } from '../../redux/contract-slice'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'
import { walletConnect } from '../../core/wallet-connect'
import { web3 } from '../../core/web3'
import { convertToRawAmount, subtractDiscount } from '../../core/utils'
import { Icon } from '../Icon'

function FormPayment({ onFinish }) {
  const dispatch = useDispatch()
  const sessionTopic = useSelector(selectTopic)
  const userAddress = useSelector(selectUserAddress)
  const token = useSelector(selectToken)
  const allowance = useSelector(selectAllowance)
  const plan = useSelector(selectPlan)
  const discount = useSelector(selectDiscount)

  const [formState, setFormState] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    dispatch(fetchAllowance(userAddress, token.address))
  }, [dispatch, userAddress, token.address])

  const isPending = formState === 'pending'
  const discountAmount = subtractDiscount(discount, plan.amount)
  const onApprove = async () => {
    if (isPending) return

    const data = web3.approveData(token.address, convertToRawAmount(discountAmount, token.decimals).toString())

    setFormState('pending')
    setError(null)

    walletConnect.sendRequest(userAddress, sessionTopic, data, token.address)
      .then(() => {
        setFormState('finished')
        dispatch(fetchAllowance(userAddress, token.address))
        onFinish('allowance', 3)
      })
      .catch(e => {
        setError(e.message)
        setFormState('error')
      })
  }

  const approveContent = (
    <div className="Pay-content-body">
      <div className="Pay-fieldset Pay-fieldset-padding text-center">
        <Icon name="unlock" />
        <div className="fs-2 fw-semibold mt-3 mb-4">
          Approve {discountAmount} {token.symbol}
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

  const allowanceContent = () => (
    <div className="Pay-content-body">
      <div className="Pay-fieldset Pay-fieldset-padding text-center">
        <Icon name="unlock" />
        <div className="fs-2 fw-semibold mt-3 mb-4">
          Allowance {allowance} {token.symbol}
        </div>
        <div className="text-grey-50 fs-6">
          You approved {token.symbol} spending.
        </div>
      </div>
      <button className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center" onClick={() => onFinish('allowance', 3)}>
        Next
      </button>
    </div>
  )

  return allowance >= discountAmount ? allowanceContent() : approveContent
}

export default FormPayment
