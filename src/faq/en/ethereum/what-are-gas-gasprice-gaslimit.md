# What is gas, gas price and gas limit?

The fee on the Ethereum network is paid in Ether (ETH tokens) but are calculated in so-called Gas units.

As long as the user understands transaction fees, it's not crucial to understand the concept of gas. That said, for the curious ones, it's explained below.

The Gas is like a fuel for doing anything on the Ethereum blockchain and is the unit of calculation used to calculate a fee for a particular action (transaction). It has two relevant parameters which are used in calculating the fee amount:

1) Gas Limit is the maximum amount of Gas a user is willing to pay for confirming a transaction (a minimum of 21,000). The typical gas limit for a transaction where a person sends ETH to someone is 21,000. Usually, wallet apps estimate the gas limit based on the complexity of the transaction. An insufficient gas limit set for a transaction is a common reason for a transaction to fail with an 'out of gas' error.

2) Gas Price is the amount (in ETH) a user is willing to spend per each unit of gas. The gas price usually changes with network conditions. When the network is busy, gas prices are high, and low when it's idle. The higher the gas price the sender is willing to pay, the more important the transaction is in the Ethereum network, since the reward of the miner will be higher. An insufficient gas price is often a reason for a transaction to remain pending for an extended period.

Unstoppable wallet estimates and sets a limit as well as a gas price for each transaction on the Ethereum network. The recommended fee for the transaction is calculated by multiplying the recommended values for the gas limit and gas price.

For example, if the gas limit is 50,000 units and the gas price is 20 Gwei (subunit of Ether), then it means that the sender is ready to spend 0.001 ETH on the execution of the transaction.
