import { useModal } from './ModalContext'
import { useDispatch, useSelector } from 'react-redux'
import { connect, selectIsConnected, selectIsConnecting, selectParings } from '../../redux/wallet-connect-slice'
import { useEffect } from 'react'

function Peer({ topic, connect, metadata = {}, isConnecting }) {
  const name = metadata.name || 'Unknown Wallet'
  // const icons = metadata.icons || []

  return (
    <div className="list-group-item list-group-item-action" role="button" onClick={() => connect(topic)}>
      <div className="d-flex w-100">
        <h5 className="mb-1">{name}</h5>
      </div>
      <div className="mb-1 overflow-hidden">{topic}</div>
    </div>
  )
}

export function Pairing() {
  const { closeModal } = useModal()
  const dispatch = useDispatch()
  const parings = useSelector(selectParings)
  const isConnected = useSelector(selectIsConnected)
  const isConnecting = useSelector(selectIsConnecting)
  const onConnect = topic => {
    if (isConnecting) return
    dispatch(connect(topic))
  }

  useEffect(() => {
    if (isConnected) closeModal()
  }, [closeModal, isConnected])

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Pairings</h5>
          <button type="button" className="btn-close" onClick={closeModal} disabled={isConnecting} />
        </div>
        <div className="modal-body">
          <ul className="list-group">
            {parings.map((pairing, i) => (
              <Peer
                key={i}
                topic={pairing.topic}
                connect={onConnect}
                metadata={pairing.peerMetadata}
                isConnecting={isConnecting}
              />
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={closeModal} disabled={isConnecting}>Close</button>
          <button type="button" className="btn btn-primary" onClick={() => onConnect()} disabled={isConnecting}>New pairing</button>
        </div>
      </div>
    </div>
  )
}

export default Pairing
