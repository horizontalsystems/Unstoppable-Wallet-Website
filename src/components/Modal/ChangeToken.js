import { useModal } from './ModalContext'
import { useRef, useState } from 'react'
import { web3 } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import { useSelector } from 'react-redux'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'
import { selectToken } from '../../redux/contract-slice'
import { convertFromRawAmount, convertToRawAmount } from '../../core/utils'

function ChangeToken() {
  const userAddress = useSelector(selectUserAddress)
  const sessionTopic = useSelector(selectTopic)
  const token = useSelector(selectToken)

  const { closeModal } = useModal()
  const [approve, setApprove] = useState(null)
  const [approving, setApproving] = useState(false)
  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')

  const onError = e => {
    setError(e.message)
    setFormState('error')
  }

  const tokenAddrRef = useRef()
  const withdrawAddrRef = useRef()
  const isPending = formState === 'pending'
  const onSubmit = async v => {
    v.preventDefault()

    if (isPending) return
    setError('')
    setFormState('pending')

    try {
      const tokenAddr = tokenAddrRef.current.value
      const decimals = await web3.getDecimals(tokenAddr)
      const promoterBalance = await web3.getTotalPromoterBalance()
      const allowance = convertFromRawAmount(await web3.getAllowance(userAddress, tokenAddr), decimals).toNumber()

      if (promoterBalance > allowance) {
        setApprove({
          symbol: await web3.getSymbol(tokenAddr),
          decimals,
          amount: promoterBalance,
          allowance,
        })
        setFormState('')
        return
      }

      walletConnect.sendRequest(userAddress, sessionTopic, web3.changePaymentToken(tokenAddr, withdrawAddrRef.current.value, userAddress))
        .then(() => {
          setFormState('finished')
          closeModal()
        })
        .catch(onError)
    } catch (e) {
      onError(e)
    }
  }

  const onApprove = async () => {
    if (approving) return

    const data = web3.approveData(token.address, convertToRawAmount(approve.amount, approve.decimals))
    setApproving(true)

    walletConnect.sendRequest(userAddress, sessionTopic, data, token.address)
      .then(() => {
        setApproving(false)
        setApprove()
      })
      .catch(e => {
        setError(e.message)
        setApproving(false)
      })
  }


  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Change Token</h5>
          <button type="button" className="btn-close" onClick={closeModal} />
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmit}>
            {error && <div className="text-danger">{error}</div>}
            {approve && <div className="mt-4">
              Approve <code>{approve.amount} {approve.symbol}</code> before proceed.
              <button type="button" className="btn btn-primary ms-1" onClick={onApprove} disabled={isPending || approving}>Approve</button>
            </div>}
            <div className="mt-4">
              <label className="form-label">Token Address</label>
              <input
                type="text"
                className="form-control input-no-shadow"
                disabled={isPending || approving}
                ref={tokenAddrRef}
                required
              />
            </div>
            <div className="mt-4">
              <label className="form-label">Withdraw Address</label>
              <input
                type="text"
                className="form-control input-no-shadow"
                disabled={isPending || approving}
                ref={withdrawAddrRef}
                defaultValue={userAddress}
                required
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary" disabled={isPending || approving}>Change</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangeToken
