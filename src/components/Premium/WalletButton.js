import cn from 'classnames'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { connect, disconnect, selectIsConnected, selectUserAddress } from '../../redux/wallet-connect-slice'
import { fetchAddressInfo, fetchAllowance, fetchData, selectToken } from '../../redux/contract-slice'
import { normalizeChain, truncate } from '../../core/utils'
import { chains } from '../../core/chain'
import { web3 } from '../../core/web3'
import Icon from '../Icon'

export function WalletProfile({ isMobile, onClicked }) {
  const userAddress = useSelector(selectUserAddress)
  const isConnected = useSelector(selectIsConnected)
  const dispatch = useDispatch()

  if (isConnected) {
    if (isMobile) {
      const onDisconnect = () => {
        dispatch(disconnect())
        onClicked()
      }

      return (
        <>
          <Link className="nav-item" to="/premium-profile" onClick={onClicked}>Profile</Link>
          <div className="nav-item" onClick={onDisconnect}>Disconnect</div>
        </>
      )
    }

    return (
      <div className="Button Button-steal20 nav-btn-item nav-btn-wc ms-2">
        <Link to="/premium-profile" className="text-white text-decoration-underline">
          {truncate(userAddress, 12)}
        </Link>
        <div className="ms-2" onClick={() => dispatch(disconnect())}>
          <Icon name="logout" />
        </div>
      </div>
    )
  }

  const onConnect = () => {
    if (isMobile) {
      onClicked()
    }

    dispatch(connect())
  }

  return (
    <div className={cn({ 'Button Button-circle Button-steal20 color-yellow ms-2': !isMobile, 'nav-item': isMobile })} onClick={onConnect}>
      Connect Wallet
    </div>
  )
}

export function WalletSwitcher({ isMobile, onClicked }) {
  const userAddress = useSelector(selectUserAddress)
  const isConnected = useSelector(selectIsConnected)
  const dispatch = useDispatch()
  const token = useSelector(selectToken)

  if (!isConnected) {
    return null
  }

  const chain = chains.activeChain
  const onSelectChain = item => {
    if (item.id === chain.id) {
      return
    }

    chains.setChain(item)
    web3.setWeb3(item)

    dispatch(fetchData(true))
    dispatch(fetchAllowance(userAddress, token.address))
    dispatch(fetchAddressInfo(userAddress, true))
    onClicked()
  }

  return (
    <div className={cn('Button nav-btn-item dropdown', { 'Button-steal20': !isMobile })} data-bs-theme="dark">
      <div className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {isMobile ? chain.name : chain.name === 'Ethereum' ? <Icon name="ethereum" /> : <Icon name="bsc" />}
      </div>
      <ul className="dropdown-menu">
        {chains.list.map(item => (
          <li key={item.name} className="dropdown-item py-2" onClick={() => onSelectChain(item)}>
            {normalizeChain(item.name)}
          </li>
        ))}
      </ul>
    </div>
  )
}
