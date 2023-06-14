import { useModal } from './ModalContext'
import { useRef, useState } from 'react'
import { web3 } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import { useSelector } from 'react-redux'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'
import { convertToRawAmount } from '../../core/utils'

function UpdatePlans() {
  const userAddress = useSelector(selectUserAddress)
  const sessionTopic = useSelector(selectTopic)

  const { closeModal } = useModal()
  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')

  const month1Ref = useRef()
  const month2Ref = useRef()
  const month3Ref = useRef()
  const isPending = formState === 'pending'
  const onSubmit = async v => {
    v.preventDefault()

    if (isPending) return
    setFormState('pending')

    const onError = e => {
      setError(e.message)
      setFormState('error')
    }

    try {
      const cost = ref => convertToRawAmount(ref.current.value, 2).toString()
      const inputData = web3.updatePlans([30, 90, 180], [cost(month1Ref), cost(month2Ref), cost(month3Ref)])

      walletConnect.sendRequest(userAddress, sessionTopic, inputData)
        .then(() => {
          setFormState('finished')
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
          <h5 className="modal-title">Update Plans</h5>
          <button type="button" className="btn-close" onClick={closeModal} />
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmit}>
            {error && <div className="text-danger">{error}</div>}
            <div className="mt-4">
              <label className="form-label">30 day</label>
              <input type="number" defaultValue="200" className="form-control input-no-shadow" disabled={isPending} ref={month1Ref} required />
            </div>
            <div className="mt-4">
              <label className="form-label">90 day</label>
              <input type="number" defaultValue="500" className="form-control input-no-shadow" disabled={isPending} ref={month2Ref} required />
            </div>
            <div className="mt-4">
              <label className="form-label">90 day</label>
              <input type="number" defaultValue="800" className="form-control input-no-shadow" disabled={isPending} ref={month3Ref} required />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary" disabled={isPending}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdatePlans
