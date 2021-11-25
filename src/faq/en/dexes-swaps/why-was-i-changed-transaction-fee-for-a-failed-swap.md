# Why was I charged a transaction fee for a failed swap?

A transaction on the Ethereum blockchain may be completed and yet fail to execute all the steps it was supposed to do.

The user still pays the transaction fee to the network when that happens. Users are expected to pay for the computation steps of a failed transaction, just like for a successful one. Users sending transactions are paying for the computation, regardless of whether their transaction succeeds or fails.

There are many potential reasons when a swap transaction can fail:

- **The time duration between the transaction submission to the network and its confirmation time.** The transaction will fail if that time exceeds the validity period set by the user for the swap. This is likely to happen when the network is congested and/or if the user's set fee for the transaction is insufficient for processing within the required time frame.

- **Very low price slippage setting.** If the user indicates a low acceptable price slippage level then there is an increased chance of a DEX being unable to execute the swap of tokens within the desired price levels.

- **Low transaction fee setting**. Setting a lower transaction fee is likely to result in the transaction remaining pending longer than its validity period set for a trade.
