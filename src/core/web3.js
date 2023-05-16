import { DateTime } from 'luxon'
import Web3 from 'web3'
import abi from './abi/contract.json'
import abiErc20 from './abi/erc20.json'

class Web3Provider {
  constructor() {
    this.setWeb3(process.env.REACT_APP_ETH_RPC_URL)
  }

  setWeb3(rpc) {
    const { eth } = new Web3(rpc)
    const { methods } = new eth.Contract(abi, process.env.REACT_APP_CONTRACT_ADDRESS)

    this.eth = eth
    this.methods = methods
    this.Contract = eth.Contract
  }

  getPaymentToken() {
    return this.methods.paymentToken().call()
  }

  getAddressInfo(address) {
    return this.methods.addressInfo(address).call()
  }

  getPromoCode(promo) {
    return this.methods.promoCode(promo).call()
  }

  subscribeData(duration) {
    return this.methods.subscribe(duration).encodeABI()
  }

  subscribeWithPromoCodeData(duration, promoCodeName) {
    return this.methods.subscribeWithPromoCode(duration, promoCodeName).encodeABI()
  }

  claimData(address) {
    return this.methods.claim(address).encodeABI()
  }

  setPromoCodeData(address, name, commissionRate, discountRate, duration) {
    return this.methods.setPromoCode(address, name, commissionRate, discountRate, duration).encodeABI()
  }

  // ERC20

  getAllowance(owner, contract) {
    const { methods } = new this.Contract(abiErc20, contract)
    return methods.allowance(owner, process.env.REACT_APP_CONTRACT_ADDRESS).call()
  }

  getSymbol(contract) {
    const { methods } = new this.Contract(abiErc20, contract)
    return methods.symbol().call()
  }

  getDecimals(contract) {
    const { methods } = new this.Contract(abiErc20, contract)
    return methods.decimals().call()
  }

  approveData(contract, amount) {
    const { methods } = new this.Contract(abiErc20, contract)
    return methods.approve(process.env.REACT_APP_CONTRACT_ADDRESS, amount).encodeABI()
  }

  getPromoCods(address) {
    const event = abi.find(item => item.name === 'PromoCodeAddition')
    const topics = [event.signature]

    if (address) {
      topics.push(Web3.utils.padLeft(address, 64))
    }

    return this.eth.getPastLogs({ fromBlock: 0, topics }).then(res => res.map(item => {
      const data = this.eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

      return {
        name: data.name,
        discountRate: data.discountRate,
        commissionRate: data.commissionRate,
        deadline: DateTime.fromSeconds(parseInt(data.deadline)).toFormat('DD'),
        address: data._address
      }
    }))
  }

  getSubscribes(promo) {
    const event = abi.find(item => item.name === 'SubscriptionWithPromoCode')

    const promoHash = Web3.utils.keccak256(promo)
    const topics = [event.signature, null, promoHash]

    return this.eth.getPastLogs({ fromBlock: 0, topics }).then(res => res.map(item => {
      const data = this.eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

      return {
        duration: data.duration,
        paymentToken: data.paymentToken,
        promoCode: promo,
        subscriber: data.subscriber,
        tokenCost: data.tokenCost,
      }
    }))
  }
}

export const web3 = new Web3Provider()
export default web3
