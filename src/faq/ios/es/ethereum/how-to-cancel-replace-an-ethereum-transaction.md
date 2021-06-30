# How to cancel / replace an Ethereum transaction?

Once a transaction has been confirmed (included in a block) on Ethereum blockchain, it cannot be canceled or replaced. The only way to cancel or change a transaction is when it remains in pending state awaiting confirmation.

When the Ethereum network doesn't experience high transaction volume, transactions are typically confirmed within seconds/minutes. Therefore, there is simply not enough time to cancel a transaction that was just sent.

However, during busy times when there is a high volume of people transacting, a transaction could be pending for hours or days. In such a case, there is an option to replace it with a new transaction before the pending transaction gets confirmed.

The easiest way to do this is by sending a new 0 ETH transaction to your own address with the same nonce (as previous transaction) and preferably much higher transaction fee than current network fee. This will cancel the first transaction. There is no guarantee this will work, nor that it will work every time.

Note: As of June 2021, Unstoppable doesn't yet provide a way to control 'nonce' setting for the transactions and therefore the wallet app doesn't provide a way to cancel pending transactions. This feature will be added in the future.

