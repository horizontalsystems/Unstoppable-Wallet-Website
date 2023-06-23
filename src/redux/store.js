import { configureStore } from '@reduxjs/toolkit'
import walletConnectSlice from './wallet-connect-slice'
import contractSlice from './contract-slice'

export const store = configureStore({
  reducer: {
    wc: walletConnectSlice,
    contract: contractSlice
  }
})
