# How to monitor status of an Ethereum transaction?

Unstoppable wallet allows users to monitor the status of their transactions.

- When a user sends an Ethereum transaction it should appear with 'pending' status on the Transactions tab, right after it's sent.

- The status of the transaction changes to 'sending' for sender and 'receiving' for recipient as soon as it gets included in the blockchain. That event also means the transaction got its first confirmation.

- The wallet app displays status as 'sending' for sender and 'receiving' for recipient until at least 10 blocks have passed (aka transaction having 10 confirmations). After that the status changes to completed, indicated by a checkmark with a timestamp.

Apart from monitoring transaction status within Unstoppable, users may use one of the publicly available Ethereum block explorers like [https://etherscan.io](https://etherscan.io) for monitoring as well. 

Users may simply copy transaction's ID which can be obtained by clicking on the respective transaction in the Transactions tab and then look it up Etherscan or some other public block explorer.
