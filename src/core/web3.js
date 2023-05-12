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

export function subscribeWithPromoCodeData(duration, promoCodeName) {
  return methods.subscribeWithPromoCode(duration, promoCodeName).encodeABI()
}

export function claimData(address) {
  return methods.claim(address).encodeABI()
}

export function setPromoCodeData(address, name, commissionRate, discountRate, duration) {
  return methods.setPromoCode(address, name, commissionRate, discountRate, duration).encodeABI()
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
  const event = abi.find(item => item.name === 'PromoCodeAddition')
  const topics = [event.signature]

  if (address) {
    topics.push(Web3.utils.padLeft(address, 64))
  }

  return eth.getPastLogs({ fromBlock: 0, topics }).then(res => res.map(item => {
    const data = eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

    return {
      name: data.name,
      discountRate: data.discountRate,
      commissionRate: data.commissionRate,
      deadline: DateTime.fromSeconds(parseInt(data.deadline)).toFormat('DD'),
      address: data._address
    }
  }))
}

export function getSubscribes(promo) {
  const event = abi.find(item => item.name === 'SubscriptionWithPromoCode')

  const promoHash = Web3.utils.keccak256(promo)
  const topics = [event.signature, promoHash]

  return eth.getPastLogs({ fromBlock: 0, topics }).then(res => res.map(item => {
    const data = eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

    return {
      duration: data.duration,
      paymentToken: data.paymentToken,
      promoCode: promo,
      subscriber: data.subscriber,
      tokenCost: data.tokenCost,
    }
  }))
}
