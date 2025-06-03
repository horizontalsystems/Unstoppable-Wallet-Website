# When a Bitcoin transaction considered final and irreversible?

While a Bitcoin transaction is considered completed/confirmed when it has been included in the blockchain it's not considered final (irreversible) until a few more blocks have been added to the blockchain after it.

Without going too technical it's sufficient to know that in order for a transaction to be considered final and permanent (irreversible) it's recommended to wait 5 more blocks (about 50 min) after the block holding the original transaction.

The basic rule to follow when contemplating transaction finality can be as follows:

- for smaller payments it's safe to consider the transaction final as soon as it's included in the blockchain.
- for mid-sized payments (say above $10K) it's recommended to wait at least 3 blocks. Unstoppable wallet will display the transaction as final after 3 blocks.
- for really large payments it's recommended to wait 6 blocks, although you can be fairly certain already after 3 blocks have passed.

