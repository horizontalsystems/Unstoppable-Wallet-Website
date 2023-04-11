import { configureStore } from '@reduxjs/toolkit'
import walletConnectSlice from '../redux/wallet-connect/walletConnectSlice'

export const store = configureStore({
  reducer: {
    wc: walletConnectSlice
  }
})
