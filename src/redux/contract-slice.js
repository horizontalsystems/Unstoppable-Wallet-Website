import { DateTime } from 'luxon'
import { createSlice } from '@reduxjs/toolkit'
import { getAddressInfo, getAllowance, getDecimals, getPromoCods, getPaymentToken, getSymbol } from '../core/web3'

const plans = [
  { interval: 1, intervalName: 'month', amount: 200, duration: 30 },
  { interval: 3, intervalName: 'month', amount: 500, duration: 90 },
  { interval: 6, intervalName: 'month', amount: 800, duration: 180 }
]

const initialState = {
  token: {},
  addressInfo: {},
  discount: null,
  fetching: null,
  promo: '',
  plans,
  plan: plans[0],
  allowance: null,
  allowanceStatus: null
}

export const { actions, reducer } = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setFetching: (state, { payload }) => {
      state.fetching = payload
    },
    setPlan: (state, { payload }) => {
      state.plan = payload
    },
    setPromo: (state, { payload }) => {
      state.promo = payload
    },
    setPromoDiscount: (state, { payload }) => {
      const discount = parseInt(payload)
      if (discount > 0) {
        state.discount = discount
      }
    },
    setAllowanceState: (state, { payload }) => {
      state.allowanceStatus = payload
    },
    setAllowance: (state, { payload }) => {
      state.allowance = payload
      state.allowanceStatus = 'fetched'
    },
    setTokenInfo: (state, { payload }) => {
      state.token = payload.token
    },
    setAddressInfo: (state, { payload }) => {
      state.addressInfo = payload
    },
  }
})

export const { setPlan, setPromo, setPromoDiscount, setAddressInfo } = actions

export const selectPromo = state => state.contract.promo
export const selectPlans = state => state.contract.plans
export const selectPlan = state => state.contract.plan
export const selectDiscount = state => state.contract.discount
export const selectToken = state => state.contract.token
export const selectAddressInfo = state => state.contract.addressInfo
export const selectIsFetched = state => state.contract.fetching === 'fetched'

export const fetchData = () => async (dispatch, getState) => {
  if (getState().fetching === 'fetching') {
    return
  }

  dispatch(actions.setFetching('fetching'))

  try {
    const address = await getPaymentToken()
    const token = {
      address,
      tokenSymbol: await getSymbol(address),
      tokenDecimals: parseInt(await getDecimals(address))
    }

    dispatch(actions.setTokenInfo({ token }))
    dispatch(actions.setFetching('fetched'))
  } catch (e) {
    dispatch(actions.setFetching('failed'))
  }
}

export const fetchAddressInfo = address => async dispatch => {
  if (!address) return

  const [isModerator, isAdmin, expiration, balance] = Object.values(await getAddressInfo(address))
  const info = { isModerator, isAdmin, balance }
  const seconds = parseInt(expiration)

  const promoCodes = await getPromoCods(address)

  if (promoCodes) {
    info.promoCodes = promoCodes
  }

  if (seconds > 0) {
    info.expiration = DateTime.fromSeconds(seconds).toFormat('DD')
  }

  dispatch(setAddressInfo(info))
}

export const fetchAllowance = (owner, token) => async (dispatch, getState) => {
  const { contract } = getState()

  if (!owner || !token) {
    console.log('Owner and token addresses are required')
    return
  }

  if (contract.allowanceStatus === 'pending') {
    return
  }

  dispatch(actions.setAllowanceState('pending'))

  try {
    const allowance = await getAllowance(owner, token)
    dispatch(actions.setAllowance(allowance))
  } catch (e) {
    dispatch(actions.setAllowanceState('failed'))
  }
}

export default reducer
