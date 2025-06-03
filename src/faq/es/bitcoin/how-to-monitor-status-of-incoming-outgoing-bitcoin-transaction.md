# How to monitor status of incoming/outgoing Bitcoin transaction?

Unstoppable wallet allows users to monitor the status of their transactions.

As soon as a user sends a Bitcoin transaction it should appear (almost immediately) on the Transactions tab, both for its sender and recipient. The transaction appears with 'pending' status until it has been included in the blockchain.

- The status of the transaction changes to 'sending' for sender and 'receiving' for recipient as soon as it gets included in the blockchain. That event also means the transaction got its first confirmation.

- The wallet displays sending/receiving status until at least 3 blocks has passed (aka transaction having 3 confirmations). Until 3 blocks have passed, Unstoppable will not reflect the transaction amount in the recipient's balance or let the recipient spend the received funds in other transactions.

Apart from monitoring transaction status within Unstoppable, users may use one of the publicly available Bitcoin block explorers i.e. [https://btc.com](https://btc.com) for monitoring as well. For that users may copy transaction's ID which can be obtained by clicking on the respective transaction in the Transactions tab and search for it on public block explorer.
