# Cancelling/Speeding Up Transactions

Ethereum allows users to manage pending transactions by either speeding them up or canceling them. Both of these options rely on using the **same nonce**, a unique counter for each transaction coming from your wallet:

**Speeding Up:** If a transaction is taking too long, you can speed it up by sending a new, identical transaction with a higher gas price. Since both transactions share the same nonce, the network will prioritize the faster one with the higher fee.

**Cancelling:** To cancel a transaction, you can send a new transaction with the same nonce, usually to yourself, with a higher gas price and no meaningful action (such as sending 0 ETH to your own address). This replaces the pending transaction, effectively canceling it.

The **nonce** isn’t a unique transaction ID like the ones shown in blockchain explorers; rather, it’s a counter for each transaction from a specific wallet. The first transaction you send has a nonce of 0, the next is 1, and so on. By reusing the same nonce, you can replace or cancel a pending transaction before it is confirmed.

Not all wallets support these features, so it’s good to check if yours allows for speeding up or canceling transactions.