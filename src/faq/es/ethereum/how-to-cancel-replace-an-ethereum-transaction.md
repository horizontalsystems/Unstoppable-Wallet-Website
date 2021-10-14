# How to cancel or replace an Ethereum transaction?

Once a transaction has been confirmed (included in a block) on Ethereum blockchain, it cannot be canceled or replaced. The only way to cancel or change a transaction is when it remains in pending state awaiting confirmation.

When the Ethereum network doesn't experience high transaction volume, transactions are typically confirmed within seconds/minutes. Therefore, there is simply not enough time to cancel a transaction that was just sent.

However, during busy times when there is a high volume of people transacting, a transaction could be pending for hours or days. In such cases, there is an option to replace it with a new transaction before the pending transaction gets confirmed.

The easiest way to do this is by sending a new 0 ETH transaction to your own address with the same nonce (as previous transaction) and preferably much higher transaction fee than a current network fee. This should cancel the first transaction. There is no guarantee this will work, nor that it will work every time.

Unstoppable provides a way to cancel or replace transaction while it remains in pending state. Both options can be accessed by clicking on pending transaction in wallet's transactions tab.
