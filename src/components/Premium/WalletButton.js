import cn from 'classnames'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect, disconnect, selectIsConnected, selectParings, selectUserAddress } from '../../redux/wallet-connect-slice'
import { fetchAddressInfo, fetchAllowance, fetchData, selectToken } from '../../redux/contract-slice'
import { useModal } from '../Modal/ModalContext'
import { truncate } from '../../core/utils'
import { chains } from '../../core/chain'
import { web3 } from '../../core/web3'
import Icon from '../Icon'
import Pairing from '../Modal/Pairing'

function WalletButton() {
  return (
    <>
      <WalletSwitcher />
      <WalletProfile />
    </>
  )
}

function WalletProfile() {
  const { setModal } = useModal()
  const userAddress = useSelector(selectUserAddress)
  const isConnected = useSelector(selectIsConnected)
  const dispatch = useDispatch()
  const parings = useSelector(selectParings)

  if (isConnected) {
    return (
      <div className="Button Button-steal nav-btn-item nav-btn-wc ms-2">
        <Link to="/premium-profile" className="text-white">
          {truncate(userAddress, 12)}
        </Link>
        <Link to="/premium-profile" className="ms-2 me-1">
          <Icon name="profile" />
        </Link>
        <div className="ms-2" onClick={() => dispatch(disconnect())}>
          <Icon name="logout" />
        </div>
      </div>
    )
  }

  const onConnect = () => {
    if (parings.length) {
      return setModal(<Pairing />)
    }

    dispatch(connect())
  }

  return (
    <div className="Button Button-steal nav-btn-item nav-btn-wc ms-2" onClick={onConnect}>
      <Icon name="wallet-connect" />
    </div>
  )
}

function WalletSwitcher() {
  const [showDropdown, setDropdown] = useState(false)
  const userAddress = useSelector(selectUserAddress)
  const token = useSelector(selectToken)

  const dispatch = useDispatch()
  const chain = chains.activeChain
  const onSelectChain = item => {
    if (item.id === chain.id) {
      return
    }

    chains.setChain(item)
    web3.setWeb3(item.rpc, item.contract)

    dispatch(fetchData(true))
    dispatch(fetchAllowance(userAddress, token.address))
    dispatch(fetchAddressInfo(userAddress, true))
  }

  return (
    <div className="Button Button-steal nav-btn-item" data-bs-theme="dark">
      <div className="dropdown" onClick={() => setDropdown(!showDropdown)}>
        <div className="dropdown-toggle text-capitalize text-white border-0" data-bs-toggle="dropdown">
          {chain.name === 'Ethereum' ? <Icon name="ethereum" /> : <Icon name="bsc" />}
        </div>
        <ul className={cn('dropdown-menu dropdown-menu-end', { show: showDropdown })}>
          {chains.list.map(item => (
            <li key={item.name} className="dropdown-item" onClick={() => onSelectChain(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WalletButton
