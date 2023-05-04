import { Link } from 'react-router-dom'
import { FormTextItem } from './FormTextItem'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddressInfo, selectAddressInfo } from '../../redux/contract-slice'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'
import { claimData } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import Container from '../Container'
import PayContainer from './PayContainer'

function Profile() {
  const dispatch = useDispatch()
  const userAddress = useSelector(selectUserAddress)
  const sessionTopic = useSelector(selectTopic)
  const { expiration, balance, promoCodes } = useSelector(selectAddressInfo)

  const [recipient, setRecipient] = useState(userAddress)
  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    dispatch(fetchAddressInfo(userAddress))
  }, [dispatch, userAddress])

  const isPending = formState === 'pending'
  const onClaim = () => {
    if (isPending) return
    setFormState('pending')

    walletConnect.sendRequest(userAddress, sessionTopic, claimData(recipient || userAddress))
      .then(() => {
        setFormState('finished')
      })
      .catch(e => {
        setError(e.message)
        setFormState('error')
      })
  }

  const contact = (
    <div className="Pay-card h-100">
      <div className="color-yellow">
        Become a representative and get rewards
      </div>
      <div className="text-grey-50 mt-3">
        Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities.
      </div>
      <button className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center">
        Contact Us
      </button>
    </div>
  )

  const rewords = (
    <div className="Pay-card h-100">
      <div className="color-yellow">
        Rewards
      </div>
      <div className="mb-3 mt-4">
        <input type="text" className="form-control bg-transparent Pay-fieldset shadow-none" defaultValue={balance} />
      </div>
      <div className="mt-4">
        <label className="form-label">Recipient Address</label>
        <input
          type="text"
          className="form-control bg-transparent Pay-fieldset shadow-none"
          defaultValue={userAddress}
          onChange={v => setRecipient(v.target.value)}
        />
        {error && <div className="text-danger">{error}</div>}
      </div>
      <button
        className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center"
        onClick={onClaim}
        disabled={isPending || balance <= 0}
      >
        Claim
      </button>
    </div>
  )

  return (
    <PayContainer>
      <Container className="Container-analytics" clipped={false}>
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="Pay-card h-100">
              <div className="color-yellow">
                Subscription
              </div>
              <fieldset className="Pay-fieldset Pay-fieldset-padding mt-3">
                <FormTextItem className="mb-3" title="Status" value={expiration ? 'Active' : 'None'} />
                <FormTextItem className="mb-3" title="Plan expire" value={expiration || '-'} />
              </fieldset>
              <Link to="/analytics" className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center text-decoration-none">
                {expiration ? 'Update' : 'Subscribe'}
              </Link>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            {expiration ? rewords : contact}
          </div>
        </div>
        <div className="Pay-card mt-3">
          <div className="color-yellow">
            Promo Code Stats
          </div>
          <table className="table table-bordered mt-3">
            <thead>
            <tr className="text-grey">
              <th scope="col">Name</th>
              <th scope="col">Expires at</th>
              <th scope="col">Discount Rate</th>
              <th scope="col">Commission Rate</th>
            </tr>
            </thead>
            <tbody>
            {promoCodes && promoCodes.map(item => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.deadline}</td>
                <td>{item.discountRate}</td>
                <td>{item.commissionRate}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Container>
    </PayContainer>
  )
}

export default Profile
