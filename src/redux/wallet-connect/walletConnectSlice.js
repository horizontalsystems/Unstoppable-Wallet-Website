import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isConnecting: false,
  initializing: false,
  client: null,
}

export const walletConnectSlice = createSlice({
  name: 'wc',
  initialState,
  reducers: {
    connect: (state) => {
      state.isConnecting = true
    },
    disconnect: (state) => {
      state.isConnecting = false
      state.client = null
    },
    initialize: (state, action) => {
      state.initializing = true
    },
  },
})

export const { connect, disconnect, initialize } = walletConnectSlice.actions

export default walletConnectSlice.reducer
