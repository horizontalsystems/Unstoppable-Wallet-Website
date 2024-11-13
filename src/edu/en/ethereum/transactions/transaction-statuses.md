# Transaction Statuses

After you submit a transaction, it goes through a few phases before completion. Knowing these phases can help you track its progress:

- **Pending:** Initially, a transaction enters the pending stage, waiting for a validator (similar to miners on Bitcoin) to include it in a block. If the network is busy, pending times can increase unless you’ve paid a higher gas price for priority.

- **Confirmed:** Once a validator includes the transaction in a block, it becomes confirmed, meaning it’s completed, and the funds are transferred.

- **Failed:** If there’s an issue, like running out of gas, the transaction may fail, and you’ll need to try again. Even for failed transactions, some gas fees may still apply, so it’s best to stick with the recommended fees unless you’re experienced and understand the steps involved.

To check transaction status, you can use tools called **block explorers** like Etherscan or Blockchair. These let you view details about your transactions, including times, fees, and specific actions.