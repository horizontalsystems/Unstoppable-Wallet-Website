# Transaction Confirmations and States 

When a user sends a Bitcoin transaction from their wallet, the transaction is broadcast to the network. Within a few seconds, all miners on the network receive the transaction and attempt to include it in the blockchain along with other pending transactions. The first to solve the Proof-of-Work puzzle gets to include the transaction in the blockchain and collect the rewards, which include both the Bitcoin emission rate and all transaction fees from the current block of transactions. ⛏️

## Transaction States:
- **Pending:** Waiting for a miner to include it in a block. ⏳
- **Confirmed:** Once included in a block, the transaction is confirmed. ✅
- **Failed:** Transactions can fail if the fee is too low or if there are network issues. ❌

Finality means that once confirmed, a Bitcoin transaction cannot be reversed. For smaller payments, it's safe to consider the transaction complete once it's included in a block. For high-value transactions, typically six confirmations are recommended to ensure security against double-spending. 🔒

## Tracking Transaction Status:
Users can track their transactions using publicly available blockchain explorers like Blockchair.com. By entering the transaction ID (TXID), users can monitor the status of their Bitcoin transactions and see how many confirmations it has received. Most non-custodial wallets also provide transaction status updates, although there might be a slight delay compared to block explorers. 🔍

