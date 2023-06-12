import { DateTime } from 'luxon'
import { WalletConnect } from './wallet-connect'
import Web3 from 'web3'
import abi from './abi/contract.json'
import abiErc20 from './abi/erc20.json'

class Web3Provider {
  constructor(rpc, contract) {
    this.setWeb3(rpc, contract)
  }

  setWeb3(rpc, contract) {
    const { eth } = new Web3(rpc)
    const { methods } = new eth.Contract(abi, contract)

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

  getTotalPromoterBalance() {
    return this.methods.totalPromoterBalance().call()
  }

  getModeratorRole() {
    return this.methods.MODERATOR_ROLE().call()
  }

  grantRoleData(role, address) {
    return this.methods.grantRole(role, address).encodeABI()
  }

  changePaymentToken(address, withdrawAddress, chargeAddress) {
    return this.methods.changePaymentToken(address, withdrawAddress, chargeAddress).encodeABI()
  }

  addSubscription(address, duration) {
    return this.methods.addSubscription(address, duration).encodeABI()
  }

  subtractSubscription(address, duration) {
    return this.methods.subtractSubscription(address, duration).encodeABI()
  }

  getPromoCods(address) {
    const event = abi.find(item => item.name === 'PromoCodeAddition')
    const topics = [event.signature]

    if (address) {
      topics.push(Web3.utils.padLeft(address, 64))
    }

    return this.eth.getPastLogs({ fromBlock: WalletConnect.chain.block, topics })
      .then(res => res.map(item => {
        const data = this.eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

        return {
          name: data.name,
          discountRate: data.discountRate,
          commissionRate: data.commissionRate,
          deadline: DateTime.fromSeconds(parseInt(data.deadline)).toFormat('DD'),
          address: data._address
        }
      }))
      .catch(() => {
        return []
      })
  }

  getUpdateSubscription() {
    const event = abi.find(item => item.name === 'UpdateSubscription')
    const topics = [event.signature]

    return this.eth.getPastLogs({ fromBlock: WalletConnect.chain.block, topics })
      .then(res => res.map(item => {
        const data = this.eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

        return {
          address: data._address,
          duration: data.duration,
          deadline: data.deadline
        }
      }))
      .catch(() => {
        return []
      })
  }

  getSubscribesByPromo(promo, address) {
    const event = abi.find(item => item.name === 'SubscriptionWithPromoCode')

    const topics = [
      event.signature,
      address ? Web3.utils.padLeft(address, 64) : null,
      promo ? Web3.utils.keccak256(promo) : null
    ]

    return this.eth.getPastLogs({ fromBlock: WalletConnect.chain.block, topics })
      .then(res => res.map(item => {
        const data = this.eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

        return {
          duration: data.duration,
          paymentToken: data.paymentToken,
          promoCode: promo,
          subscriber: data.subscriber,
          tokenCost: data.tokenCost,
        }
      }))
      .catch(() => {
        return []
      })
  }

  getSubscribes(address) {
    const event = abi.find(item => item.name === 'Subscription')
    const topics = [event.signature, address ? Web3.utils.padLeft(address, 64) : null]

    return this.eth.getPastLogs({ fromBlock: WalletConnect.chain.block, topics })
      .then(res => res.map(item => {
        const data = this.eth.abi.decodeLog(event.inputs, item.data, item.topics.slice(1))

        return {
          duration: data.duration,
          paymentToken: data.paymentToken,
          subscriber: data.subscriber,
          tokenCost: data.tokenCost,
        }
      }))
      .catch(() => {
        return []
      })
  }

  async getSubscriptions(address) {
    const dataWithPromo = await this.getSubscribesByPromo(null, address)
    const dataWithout = await this.getSubscribes(address)

    return [...dataWithPromo, ...dataWithout]
  }

  // ERC20

  getAllowance(owner, contract) {
    const { methods } = new this.Contract(abiErc20, contract)
    return methods.allowance(owner, WalletConnect.chain.contract).call()
  }

  async getSymbol(contract) {
    try {
      const { methods } = new this.Contract(abiErc20, contract)
      return await methods.symbol().call()
    } catch (e) {
      return ''
    }
  }

  async getDecimals(contract) {
    try {
      const { methods } = new this.Contract(abiErc20, contract)
      return await methods.decimals().call()
    } catch (e) {
      console.log(e)
      return 0
    }
  }

  approveData(contract, amount) {
    const { methods } = new this.Contract(abiErc20, contract)
    return methods.approve(WalletConnect.chain.contract, amount).encodeABI()
  }
}

export const web3 = new Web3Provider(process.env.REACT_APP_BSC_RPC_URL, process.env.REACT_APP_BSC_CONTRACT)
