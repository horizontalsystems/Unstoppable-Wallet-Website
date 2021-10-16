# Are there any risks when swapping cryptocurrency?

While Unstoppable wallet guides users through swap action by hiding complexities and automatically setting swap settings, there are a number of points to be aware of when executing swap trades.

1. Cost of Swap Transaction

When swapping on a decentralized exchange users are expected to pay both the transaction fee (to the miner on Ethereum blockchain) and a swap fee (to a DEX that settles the order).

These fees are sent to different entities within a swap single transaction. While the swap fee depends on the order size, the transaction fee depends on the network conditions. 

Note that it's not uncommon to see high transaction fees when the Ethereum blockchain is busy and congested. Regardless of DEX being used, executing a swap transaction on Binance Smart Chain is considerably cheaper than swap on Ethereum blockchain. 

Transaction costs aside, DEXes on bother blockchains charge more or less similar rates (usually 0.3% of amount) for swap.

It should be also noted that DEXes on different blockchains work with different sets and have different liquidity levels for various trading pairs.

2. Transaction Deadline

Typically, a swap transaction remains valid for about 20 minutes after it has been submitted to the blockchain. Therefore, when swapping using DEX on a busy blockchain like Ethereum, it's important to ensure that swap transaction submitted with sufficient transaction fee to ensure it's processed within the given deadline.

Submitting a swap transaction with a low fee (below recommended value) on Ethereum likely to result in transaction remain in pending state longer that the deadline set for the transaction. By the time transaction added to the blockchain it's already expired resulting in failed swap action. Failed swaps will still consume network transaction fee.

3. Price Slippage

Price slippage is the difference in a token price between the time a swap order is placed and the time transaction completes on the blockchain or is filled. Slippage can either be positive or negative, depending on the direction of price change.

Price slippage occurs because of changing market conditions between the moment the transaction is submitted to the network and its verification on a blockchain. The duration between the order submission and its verification depends on the network conditions and the transaction fee set by the user.

Unstoppable displays potential slippage amount by providing estimated and guaranteed amount of tokens users expected to receive as a result of the swap transaction.

Users have an option to indicate acceptable slippage levels when sending transactions. By default, the value is set to %0.5 - %1 depending on the DEX being used.

While users may be tempted to settle the lowest possible slippage it can also result in transaction failing due to inability to execute trade within indicated slippage amount.

Remember, a failed transaction still consumes the transaction fee!

4. Price Slippage Tolerance

Slippage tolerance is a setting for the amount of price slippage you are willing to accept for a trade. By setting slippage tolerance, you're basically setting a minimum amount on how many tokens you will accept, in the event that the price increases or decreases.

Slippage tolerance is set as a percentage of the total swap value. For example, if you set slippage tolerance at 3%, it means that the amount of tokens you will receive can be no higher or lower than 3% of the amount entered.

For more information on slippage tolerance and the risks of setting it to high/low refer to [this page](https://help.1inch.io/en/articles/4585126-what-is-the-slippage-tolerance-setting).

5. Swap Transaction Fees

Transacting on Ethereum blockchain is currently expensive where a plain transfer of ETH tokens (the cheapest transaction type) from one address to another can cost as much as $10 in ETH. Therefore, a more complex transaction type i.e. swap transaction can easily exceed $50.

Keeping in mind above, it's not economically viable to swap on Ethereum blockchain when dealing with lower amounts. It may not be a big deal for someone swapping $10,000 worth of crypto to pay a $100 transaction fee than for someone swapping $500 or lower amounts.

6. Approval Transactions

When selling ERC20 or BEP20 tokens users are first required to execute Approval Transaction. This transaction grants an approval for DEX to deduct ERC20/BEP20 tokens from your balance when executing a trade. A DEX can't use your tokens for trades without an approval transaction.
