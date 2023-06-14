import { useModal } from './ModalContext'
import { useRef, useState } from 'react'
import { web3 } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import { useSelector } from 'react-redux'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'

function Withdraw() {
  const userAddress = useSelector(selectUserAddress)
  const sessionTopic = useSelector(selectTopic)

  const { closeModal } = useModal()
  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')

  const addressRef = useRef()
  const isPending = formState === 'pending'
  const onSubmit = async v => {
    v.preventDefault()

    if (isPending) return
    setFormState('pending')
    setError(null)

    const onError = e => {
      setError(e.message)
      setFormState('error')
    }

    try {
      walletConnect.sendRequest(userAddress, sessionTopic, web3.withdraw(addressRef.current.value))
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
          <h5 className="modal-title">Withdraw</h5>
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
                defaultValue={userAddress}
                ref={addressRef}
                required
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary" disabled={isPending}>Withdraw</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Withdraw
