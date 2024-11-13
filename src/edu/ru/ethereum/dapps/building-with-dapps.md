# Building with dApps

One of Ethereum’s most powerful features is **composability**—dApps can work together like building blocks, much like LEGO pieces that can be combined in endless ways:

- A gaming dApp can use a marketplace dApp for trading items.
- A lending dApp can use currency price feeds from another dApp.
- Multiple dApps can be integrated together to create entirely new services.

This composability allows complex transactions that can interact with multiple dApps in a single execution, which isn’t possible on simpler blockchains like Bitcoin.

For example, a user could perform a series of actions in one transaction:

1. Borrow 1,000 USDT from a lending dApp.
2. Use the USDT to buy ETH on a DEX (decentralized exchange).
3. Swap the ETH for a different token on another DEX (decentralized exchange).
4. Repay the 1,000 USDT loan.
5. Keep the remaining balance as profit.

All steps occur atomically—meaning they either all succeed or fail together. While powerful, complex multi-dApp transactions require more resources and result in higher transaction fees, which can reach $500 or more during peak network activity.

In addition to blockchain transaction fees, dApps may charge their own fees for specific actions. For example, when swapping tokens on a DEX like Uniswap, you pay:

1. The transaction fee (gas fee) to Ethereum network validators.
2. A 0.3% trading fee that goes to Uniswap’s smart contract.

These fees may be designed to support the dApp’s protocol. In case of DEXes fees typically reward liquidity providers. It changes from dApp to dApp, based on how it was built.