import { createSlice } from '@reduxjs/toolkit'
import { walletConnect } from '../core/wallet-connect'

const initialState = {
  initializing: null,
  connecting: null,
  session: null,
  parings: []
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
      if (action.payload) {
        state.connecting = 'connected'
      } else {
        state.connecting = null
      }

      const session = action.payload
      if (session) {
        session.address = session.namespaces.eip155.accounts[0].split(':')[2]
      }

      state.session = session
    },
    setPairings: (state, action) => {
      state.parings = action.payload
    },
  }
})

export const { setInitializing, setConnecting, setSession, setPairings } = slice.actions

export const selectIsConnected = ({ wc }) => wc.connecting === 'connected'
export const selectUserAddress = ({ wc }) => wc.session ? wc.session.address : null
export const selectTopic = ({ wc }) => wc.session ? wc.session.topic : null
export const selectParings = ({ wc }) => wc.parings

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
