# CANCELLING TRANSACTIONS

There are situations where you may find yourself needing to cancel a cryptocurrency transaction. While it is generally difficult to reverse a transaction once it has been initiated, there are specific circumstances where you might be able to cancel or modify it, particularly if the transaction is still in a pending state. This possibility exists primarily on slower blockchains like Bitcoin or Ethereum, where transactions can remain pending for several seconds or even minutes.

However, once a transaction is confirmed and added to the blockchain, it is usually irreversible. This means that, once finalized, transactions cannot be canceled.


### Cancelling Pending Transactions

Cancelling a pending transaction is possible, but only if your wallet app supports this functionality.

In non-custodial wallets, the process of canceling a transaction involves sending a separate "cancellation" transaction that invalidates the original one. This cancellation transaction must be sent with a substantially higher transaction fee than the original transaction to ensure it is prioritized and processed first.

Here’s what you need to keep in mind:


1) Success Is Not Guaranteed

Sending a cancellation transaction does not guarantee success. If the original transaction is confirmed and added to the blockchain before the cancellation transaction is processed, the cancellation will fail and be considered invalid.


2) Timing Is Crucial

The cancellation transaction must reach the network and be processed before the original transaction is confirmed. Therefore, setting high transaction fee is essential. If it succeeds, the original transaction will be deemed invalid.


3) Mutual Exclusivity

Due to the way non-custodial wallets construct these transactions, only one of the two—the original or the cancellation—can be valid. If the cancellation transaction is successful, it invalidates the original. Conversely, if the original transaction is confirmed first, the cancellation is rendered moot.


In summary, while it is possible to cancel a pending cryptocurrency transaction on some blockchains, the success of this action depends on several factors, including the speed of the network, the fees involved, and the capabilities of your wallet. Therefore, it is always wise to double-check transaction details before sending to avoid the need for cancellation.