import SignClient from './SignClient'
import QRCodeModal from '@walletconnect/qrcode-modal'
import { setInitializing, setConnecting, setPairings, setSession } from '../redux/wallet-connect-slice'
import { setAddressInfo } from '../redux/contract-slice'

export class WalletConnect {

  static chains = [
    {
      id: 1,
      name: 'Ethereum',
      rpc: process.env.REACT_APP_ETH_RPC_URL,
      explorer: process.env.REACT_APP_ETH_EXPLORER,
      contract: process.env.REACT_APP_ETH_CONTRACT,
      block: 3595469
    },
    {
      id: 56,
      name: 'BSC',
      rpc: process.env.REACT_APP_BSC_RPC_URL,
      explorer: process.env.REACT_APP_BSC_EXPLORER,
      contract: process.env.REACT_APP_BSC_CONTRACT,
      block: 28947762
    }
  ]

  static chain = this.chains[1]

  static setChain(item) {
    this.chain = item
  }

  static getChain() {
    return this.chain
  }

  sendRequest(userAddress, topic, inputData, contract) {
    const client = this.client

    if (!client) {
      throw new Error('WalletConnect is not initialized')
    }

    return client.sendRequest(userAddress, topic, inputData, `eip155:${WalletConnect.chain.id}`, contract || WalletConnect.chain.contract)
  }

  initialize = () => async dispatch => {
    dispatch(setInitializing('initializing'))

    try {
      this.client = await SignClient.initialize()

      dispatch(this.subscribeToEvents(this.client))
      dispatch(this.checkPersistedState(this.client))
      dispatch(setInitializing('initialized'))

    } catch (e) {
      dispatch(setInitializing('failed'))
    }
  }

  connect = pairingTopic => async (dispatch, getState) => {
    const { wc } = getState()
    const client = this.client

    if (wc.initializing !== 'initialized' || !client) {
      throw new Error('WalletConnect is not initialized')
    }

    if (wc.connecting === 'connected' || wc.connecting === 'connecting') {
      return
    }

    dispatch(setConnecting('connecting'))

    try {
      const { uri, approval } = await client.connect({
        pairingTopic,
        requiredNamespaces: {
          eip155: {
            methods: ['eth_sendTransaction'],
            chains: WalletConnect.chains.map(chain => `eip155:${chain.id}`),
            events: []
          }
        }
      })

      if (uri) {
        QRCodeModal.open(uri, () => {
          console.log('EVENT', 'QR Code Modal closed')
          dispatch(setConnecting(null))
        })
      }

      const session = await approval()
      console.log('Session established')
      dispatch(setSession(session))
      dispatch(setPairings(client.pairing.getAll({ active: true })))
    } catch (e) {
      dispatch(setConnecting('failed'))
      console.error(e)
    } finally {
      QRCodeModal.close()
    }
  }

  disconnect = () => async (dispatch, getState) => {
    const { wc } = getState()
    const client = this.client

    if (wc.initializing !== 'initialized' || !client) {
      throw new Error('WalletConnect is not initialized')
    }

    if (wc.connecting === 'connecting' || !wc.session) {
      return
    }

    await client.disconnect({ topic: wc.session.topic })

    dispatch(setAddressInfo({}))
    dispatch(setSession(null))
  }

  subscribeToEvents = client => dispatch => {
    client.on('display_uri', uri => {
      console.log('EVENT', 'display_uri', 'QR Code Modal open')
      QRCodeModal.open(uri, () => null)
    })

    client.on('session_ping', ({ id, topic }) => {
      console.log('EVENT', 'session_ping', id, topic)
    })

    client.on('session_event', ({ event, chainId }) => {
      console.log('EVENT', 'session_event', event, chainId)
    })

    client.on('session_update', ({ session }) => {
      console.log('EVENT', 'session_updated')
      dispatch(setSession(session))
    })

    client.on('session_delete', ({ id, topic }) => {
      console.log('EVENT', 'session_deleted', id, topic)
      dispatch(setAddressInfo({}))
      dispatch(setSession(null))
    })
  }

  checkPersistedState = client => dispatch => {
    dispatch(setPairings(client.pairing.getAll({ active: true })))

    if (client.session.length) {
      const activeSessinIndex = client.session.keys.length - 1
      const session = client.session.get(client.session.keys[activeSessinIndex])
      console.log('SESSION RESTORED')

      dispatch(setSession(session))
    }
  }
}

export const walletConnect = new WalletConnect()
