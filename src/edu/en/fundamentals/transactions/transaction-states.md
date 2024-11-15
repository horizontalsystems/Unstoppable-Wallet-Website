# TRANSACTION STATES 📊

Cryptocurrency transactions are **not instantaneous**. Depending on the specific cryptocurrency or token, a transaction might take anywhere from a few seconds to several minutes or even hours to complete. 

When using a non-custodial wallet, transactions are processed directly through the blockchain, following these stages:

## 1) ⏳ Transaction Is Pending
Once a transaction is sent from the sender's non-custodial wallet, it reaches the underlying blockchain network almost instantly. For example, Bitcoin transactions are sent to the Bitcoin network, while Ether transactions are sent to the Ethereum network. Each node participating in that blockchain receives the transaction within seconds. If the transaction is valid, it is added to the processing queue for inclusion in the blockchain (the permanent record). 🔗

At this stage, both the sender and recipient can monitor the transaction's status on a public blockchain explorer, such as https://blockchair.com. 🔍

The time a transaction remains pending varies depending on the blockchain and is largely influenced by the **transaction fee** set by the user. If the fee is well above the average of other transactions in the queue, it will be processed quickly. Conversely, if the fee is significantly lower, the transaction will have to wait until its fee becomes competitive enough to be processed. 💸

## 2) ✅ Transaction Gets Confirmed
A transaction is considered successful when it is included in the blockchain. This inclusion occurs in batches called "**blocks**." 

Each block typically holds a few thousand transactions. New blocks are constructed from a pool of pending transactions in the queue. Priority is given to transactions that pay higher fees. 🥇

On the Bitcoin network, new blocks are added to the blockchain approximately every 10 minutes. On Ethereum, blocks are added roughly every 12 seconds. Each blockchain operates on its own schedule. ⏰

The time it takes for a transaction to be confirmed is directly proportional to the fee set by the sender and the current network conditions. If the blockchain is busy with many pending transactions, confirmation may take longer, requiring users to set higher fees for urgent payments. 🚀

## 3) 🔒 Transaction Is Final
Once the transaction has been added to the blockchain, it is considered final. However, for certain blockchains, particularly Bitcoin, it is recommended to wait for a specific number of new blocks to be added after the initial confirmation before considering the transaction irreversible. 🔐

When a transaction is added to the blockchain, it is said to have received **one confirmation**. As additional blocks are added, the number of confirmations increases. For instance, after the next block is added, the transaction will have two confirmations, and so on. 🔢

For large transactions, it is generally advisable to wait for at least **three confirmations** before considering the transaction fully secure and irreversible. For most regular payments, one confirmation should suffice. 💰

While it is theoretically possible to reverse a transaction after one confirmation, the likelihood of doing so diminishes significantly with each additional confirmation. 📉