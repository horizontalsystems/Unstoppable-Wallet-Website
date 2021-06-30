# When Ethereum transaction can fail?

There are two potential reasons a transaction may remain in pending state for an extended period of time.

1. The transaction fee is below the network average. This is the most common reason for a transaction to remain in pending state. In such cases, transactions get confirmed after the network becomes less busy.

2. When there is another pending transaction that was sent earlier. Ethereum transactions are processed in sequence and if there is a pending transaction, it needs to be completed (or replaced) first before other transactions from the same user can take place.

There are a few other error examples that you could encounter during the transaction failure:

**Dropped and Replaced** transaction which means the transaction was dropped and replaced by a new one. Please see more information about a dropped and replaced transaction here: https://info.etherscan.com/transaction-dropped-replaced/

**Out of gas** when the gas limit was set too low. Please read the below article for a better understanding of the gas limit: https://ethgasstation.info/blog/gas-limit/

You can retry the transaction, but this time please use the advanced options to set the gas limit to a higher value (try something like 60000). You can also refer to this article to learn more about this **Out of gas** error and the other alternatives on how to fix it.

