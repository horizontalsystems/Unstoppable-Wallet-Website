import { useModal } from './ModalContext'
import { useRef, useState } from 'react'
import { web3 } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import { useSelector } from 'react-redux'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'

function UpdateSubscription({ isAdd }) {
  const userAddress = useSelector(selectUserAddress)
  const sessionTopic = useSelector(selectTopic)

  const { closeModal } = useModal()
  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')

  const addressRef = useRef()
  const durationRef = useRef()
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
      const duration = parseInt(durationRef.current.value)
      const inputData = isAdd
        ? web3.addSubscription(addressRef.current.value, duration)
        : web3.subtractSubscription(addressRef.current.value, duration)

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
          <h5 className="modal-title">{isAdd ? 'Add' : 'Subtract'} subscription</h5>
          <button type="button" className="btn-close" onClick={closeModal} />
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmit}>
            {error && <div className="text-danger">{error}</div>}
            <div className="mt-4">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control input-no-shadow"
                disabled={isPending}
                ref={addressRef}
                required
              />
            </div>
            <div className="mt-4">
              <label className="form-label">Duration</label>
              <input
                type="number"
                className="form-control input-no-shadow"
                disabled={isPending}
                ref={durationRef}
                required
              />
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

export default UpdateSubscription
