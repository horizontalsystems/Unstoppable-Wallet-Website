# Transaction Fees

Every transaction on Ethereum requires a fee, paid in ETH, which goes to validators who maintain the network. Here’s how these fees work:

- **Gas and Gas Limit:** Ethereum uses a system called “gas” to measure the effort a transaction needs. Simple transactions, like sending ETH, require less gas, while complex transactions involving smart contracts need more. The **gas limit** is the maximum gas a user is willing to pay for a transaction.

- **Gas Price:** The gas price is how much ETH you’re willing to pay per unit of gas. When the network is busy, gas prices rise, as users compete to get their transactions processed faster. Most wallets estimate gas prices for you, but you can adjust them for speed. For example, during periods of high demand, fees may reach $100 or more for transactions like token swaps.

- **Wallets’ Role in Estimating Fees:** Wallets automatically suggest a gas price and limit based on network activity, making things easier. Users can often adjust fees manually if they want to speed up or slow down a transaction. In fact most wallets won't even show these notions to the user and simply display the approximate amount in $USD the user is expected to pay for a transaction. The user simply moves the slider indicating the amount they are willing to pay in USD and everything else is handled by the wallet under the hood. Increasing transaction fee essentially increases the the gas price the user is willing to pay.

In 2021, Ethereum’s EIP-1559 update introduced a **burn** mechanism, where a portion of transaction fees is permanently removed from circulation. This helps reduce ETH supply over time, especially during periods of high network activity when a lot of people are transacting. (EIPs, or Ethereum Improvement Proposals, are the system by which updates and new features are added to Ethereum.)