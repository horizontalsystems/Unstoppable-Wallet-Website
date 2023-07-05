import { createSlice } from '@reduxjs/toolkit'
import { walletConnect } from '../core/wallet-connect'

const initialState = {
  initializing: null,
  connecting: null,
  session: null
}

export const slice = createSlice({
  name: 'wc',
  initialState,
  reducers: {
    setConnecting: (state, action) => {
      state.connecting = action.payload
    },
    setInitializing: (state, action) => {
      state.initializing = action.payload
    },
    setSession: (state, action) => {
      const session = action.payload
      if (session) {
        session.address = session.namespaces.eip155.accounts[0].split(':')[2]
      }

      state.session = session

      if (session) {
        state.connecting = 'connected'
      } else {
        state.connecting = null
      }
    }
  }
})

export const { setInitializing, setConnecting, setSession } = slice.actions

export const selectIsConnected = ({ wc }) => wc.connecting === 'connected'
export const selectUserAddress = ({ wc }) => wc.session ? wc.session.address : null
export const selectTopic = ({ wc }) => wc.session ? wc.session.topic : null

export const initialize = () => dispatch => {
  dispatch(walletConnect.initialize())
}

export const connect = paring => dispatch => {
  dispatch(walletConnect.connect(paring || undefined))
}

export const disconnect = () => dispatch => {
  dispatch(walletConnect.disconnect())
}

export default slice.reducer
