import Cookies from 'js-cookie'

const list = [
  {
    id: 1,
    name: 'Ethereum',
    rpc: process.env.REACT_APP_ETH_RPC_URL,
    explorer: process.env.REACT_APP_ETH_EXPLORER,
    contract: process.env.REACT_APP_ETH_CONTRACT,
    block: 3595469
  },
  {
    id: 56,
    name: 'BSC',
    rpc: process.env.REACT_APP_BSC_RPC_URL,
    explorer: process.env.REACT_APP_BSC_EXPLORER,
    contract: process.env.REACT_APP_BSC_CONTRACT,
    block: 28947762
  }
]

export const chains = {
  list,
  active: null,

  getChain() {
    return list.find(i => i.id === parseInt(Cookies.get('active-chain'))) || list[1]
  },

  setChain(item) {
    Cookies.set('active-chain', item.id)
    this.active = item
  },

  get activeChain() {
    if (!this.active) {
      this.active = this.getChain()
    }

    return this.active
  },
}

export default chains
