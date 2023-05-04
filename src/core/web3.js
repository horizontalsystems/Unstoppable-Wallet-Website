import { DateTime } from 'luxon'
import Web3 from 'web3'
import abi from './abi/contract.json'
import abiErc20 from './abi/erc20.json'

const { eth } = new Web3(process.env.REACT_APP_NODE_RPC_URL)
const { methods } = new eth.Contract(abi, process.env.REACT_APP_CONTRACT_ADDRESS)

export function getPaymentToken() {
  return methods.paymentToken().call()
}

export function getAddressInfo(address) {
  return methods.addressInfo(address).call()
}

export function getPromoCode(promo) {
  return methods.promoCode(promo).call()
}

export function subscribeData(duration) {
  return methods.subscribe(duration).encodeABI()
}

export function claimData(address) {
  return methods.claim(address).encodeABI()
}

// ERC20

export function getAllowance(owner, contract) {
  const { methods } = new eth.Contract(abiErc20, contract)
  return methods.allowance(owner, process.env.REACT_APP_CONTRACT_ADDRESS).call()
}

export function getSymbol(contract) {
  const { methods } = new eth.Contract(abiErc20, contract)
  return methods.symbol().call()
}

export function getDecimals(contract) {
  const { methods } = new eth.Contract(abiErc20, contract)
  return methods.decimals().call()
}

export function approveData(contract, amount) {
  const { methods } = new eth.Contract(abiErc20, contract)
  return methods.approve(process.env.REACT_APP_CONTRACT_ADDRESS, amount).encodeABI()
}

export function getPromoCods(address) {
  const promoCodeAddition = abi.find(item => item.name === 'PromoCodeAddition')
  const addrPad = Web3.utils.padLeft(address, 64)

  const options = {
    fromBlock: 0,
    topics: [promoCodeAddition.signature, addrPad]
  }

  return eth.getPastLogs(options).then(res => res.map(item => {
    const res = eth.abi.decodeLog(promoCodeAddition.inputs, item.data, addrPad)

    return {
      name: res.name,
      discountRate: res.discountRate,
      commissionRate: res.commissionRate,
      deadline: DateTime.fromSeconds(parseInt(res.deadline)).toFormat('DD'),
    }
  }))
}
