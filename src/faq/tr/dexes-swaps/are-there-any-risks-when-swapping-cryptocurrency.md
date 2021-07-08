# Are there any risks when swapping cryptocurrency?

When swapping cryptocurrency on a decentralized exchange following points should be taken into consideration:

- Swap and Transaction Fees

  When swapping on a decentralized exchange users are expected to pay both the transaction fee (to the miner on Ethereum blockchain) and a swap fee (to a DEX that settles the order).

  These fees are independent from each other and sent to different entities within a swap single transaction.

  While the swap fee depends on the order size, the transaction fee depends on the network conditions. Note that it's not uncommon to see high transaction fees when the Ethereum blockchain is busy and congested.


- Price Slippage

  Price slippage occurs because of changing market conditions between the moment the transaction is submitted to the network and its verification on a blockchain. The duration between the order submission and its verification depends on the network conditions and the transaction fee set by the user.
 
  Unstoppable displays potential slippage amount by providing estimated and guaranteed amount of tokens users expected to receive as a result of the swap transaction.

  Users have an option to indicate acceptable slippage levels when sending transactions. By default the value is set to %0.5 - %1 depending on the DEX being used.
 
  While users may be tempted to settle the lowest possible slippage it can also result in transaction failing due to inability to execute trade within indicated slippage amount.

  Remember, a failed transaction still consumes the transaction fee!


- Price Impact

  Price impact comes from the limited liquidity available on a DEX to settle the transaction. The bigger the size of a trade is, the bigger the price impact. It grows when the trade requires a greater share of the total available liquidity on a DEX.

  The price impact is measured as the spread observed between the total value of the entry tokens swapped and the destination tokens obtained (in USD).


- Order Duration

  Swap transactions have a validity period which usually varies between 10-30 minutes depending on a DEX being used.

  Setting longer duration can potentially increase the chance of transaction being confirmed (and not fail). It's recommended to set longer duration when network is busy and transaction fees are high.



