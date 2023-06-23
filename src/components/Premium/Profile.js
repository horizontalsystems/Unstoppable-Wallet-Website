import { Link } from 'react-router-dom'
import { FormTextItem } from './FormTextItem'
import { ProfileModerator, PromoCodeList, Subscriptions } from './ProfileModerator'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddressInfo, selectAddressInfo } from '../../redux/contract-slice'
import { selectTopic, selectUserAddress } from '../../redux/wallet-connect-slice'
import { web3 } from '../../core/web3'
import { walletConnect } from '../../core/wallet-connect'
import Container from '../Container'
import PayContainer from './PayContainer'

function Profile() {
  const dispatch = useDispatch()
  const userAddress = useSelector(selectUserAddress)
  const { expiration, balance, promoCodes, updateSubscriptions, subscriptions, isModerator, isAdmin } = useSelector(selectAddressInfo)

  useEffect(() => {
    dispatch(fetchAddressInfo(userAddress))
  }, [dispatch, userAddress])

  if (isModerator || isAdmin) {
    return (
      <ProfileModerator
        promoCodes={promoCodes}
        updateSubscriptions={updateSubscriptions}
        subscriptions={subscriptions}
        isAdmin={isAdmin}
        isModerator={isModerator}
      />
    )
  }

  return (
    <PayContainer>
      <Container className="Container-analytics" clipped={false}>
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="Pay-card h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="color-yellow">
                  Subscription
                </div>
                <fieldset className="Pay-fieldset Pay-fieldset-padding mt-3">
                  <FormTextItem className="mb-3" title="Status" value={expiration ? 'Active' : 'None'} />
                  <FormTextItem className="mb-3" title="Plan expire" value={expiration || '-'} />
                </fieldset>
              </div>
              <Link to="/premium-pay" className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center text-decoration-none">
                {expiration ? 'Update' : 'Subscribe'}
              </Link>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            {promoCodes && promoCodes.length ? <Claim balance={balance} /> : <Contact />}
          </div>
        </div>
        {promoCodes && <PromoCodeList promoCodes={promoCodes} />}
        {subscriptions && <Subscriptions items={subscriptions} />}
      </Container>
    </PayContainer>
  )
}

function Claim({ balance }) {
  const userAddress = useSelector(selectUserAddress)
  const sessionTopic = useSelector(selectTopic)

  const [recipient, setRecipient] = useState(userAddress)
  const [formState, setFormState] = useState('')
  const [error, setError] = useState('')

  const isPending = formState === 'pending'
  const onClaim = () => {
    if (isPending) return
    setFormState('pending')
    setError(null)

    const onError = e => {
      setError(e.message)
      setFormState('error')
    }

    try {
      walletConnect.sendRequest(userAddress, sessionTopic, web3.claimData(recipient || userAddress))
        .then(() => {
          setFormState('finished')
        })
        .catch(onError)
    } catch (e) {
      onError(e)
    }
  }

  return (
    <div className="Pay-card h-100">
      <div className="color-yellow">
        Rewards
      </div>
      <div className="mb-3 mt-4">
        <input type="text" className="form-control bg-transparent Pay-fieldset shadow-none" defaultValue={balance} disabled />
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
}

function Contact() {
  return (
    <div className="Pay-card h-100 d-flex flex-column justify-content-between">
      <div>
        <div className="color-yellow">
          Become a Reseller and Earn Passive Income!
        </div>
        <div className="text-grey-50 mt-4">
          Refer others to our platform using your unique promo code and earn generous commissions of up to 50% from each subscription. Plus, your
          promo code will provide potential subscribers with an additional discount on the regular subscription price, making it even more enticing.
        </div>
      </div>
      <a href="mailto:hsdao@protonmail.com"
         className="Button Button-yellow Button-circle mt-4 w-100 border-0 justify-content-center text-decoration-none">
        Contact Us
      </a>
    </div>
  )
}

export default Profile
