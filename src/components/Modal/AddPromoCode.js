import { useModal } from './ModalContext'
import { useState } from 'react'
import { web3 } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import { useDispatch, useSelector } from 'react-redux'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'
import { fetchAddressInfo } from '../../redux/contract-slice'

function AddPromoCode() {
  const userAddress = useSelector(selectUserAddress)
  const sessionTopic = useSelector(selectTopic)
  const dispatch = useDispatch()

  const { closeModal } = useModal()
  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')
  const [data, setData] = useState({
    commissionRate: 20,
    discountRate: 10,
    duration: 30
  })

  const onChange = field => v => setData({ ...data, [field]: v.target.value })
  const isPending = formState === 'pending'
  const onSubmit = () => {
    if (isPending) return
    setFormState('pending')

    const onError = e => {
      setError(e.message)
      setFormState('error')
    }

    try {
      walletConnect.sendRequest(userAddress, sessionTopic, web3.setPromoCodeData(data.address, data.name, data.commissionRate * 1000 / 100, data.discountRate * 1000 / 100, data.duration))
        .then(() => {
          setFormState('finished')
          dispatch(fetchAddressInfo(userAddress))
          closeModal()
        })
        .catch(onError)
    } catch (e) {
      onError(e)
    }
  }


  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add promo code</h5>
          <button type="button" className="btn-close" onClick={closeModal} />
        </div>
        <div className="modal-body">
          <form action="">
            {error && <div className="text-danger">{error}</div>}
            <div className="mb-3 mt-4">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control input-no-shadow"
                onChange={onChange('name')}
                disabled={isPending}
                required
              />
            </div>
            <div className="mt-4">
              <label className="form-label">Promoter Address</label>
              <input
                type="text"
                className="form-control input-no-shadow"
                onChange={onChange('address')}
                disabled={isPending}
                required
              />
            </div>
            <div className="mt-4">
              <label className="form-label">Commission Rate (%)</label>
              <input
                type="number"
                className="form-control input-no-shadow"
                onChange={onChange('commissionRate')}
                value={data.commissionRate}
                disabled={isPending}
                required
              />
            </div>
            <div className="mt-4">
              <label className="form-label">Discount Rate (%)</label>
              <input
                type="number"
                className="form-control input-no-shadow"
                onChange={onChange('discountRate')}
                value={data.discountRate}
                disabled={isPending}
                required
              />
            </div>
            <div className="mt-4">
              <label className="form-label">Duration</label>
              <input
                type="number"
                className="form-control input-no-shadow"
                onChange={onChange('duration')}
                value={data.duration}
                disabled={isPending}
                required
              />
            </div>
            <div className="mt-4">
              <button type="button" className="btn btn-primary" onClick={onSubmit} disabled={isPending}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPromoCode
