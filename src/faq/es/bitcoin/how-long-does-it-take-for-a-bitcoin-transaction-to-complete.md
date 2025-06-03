# How long does it take for a Bitcoin transaction to complete?

Bitcoin transactions are added to blockchain (every 10 minutes) in 1 MB sized blocks holding a few thousand of recently made transactions. 

A transaction considered completed when the block that includes it has been added to the Bitcoin blockchain. It should usually take no more than 10 minutes to see a transaction included in the blockchain but can also take 20-30 minutes or even hours. 

The duration of a Bitcoin transaction depends primarily on the load of the Bitcoin network at any given time and the transaction fee value set by the sender.

1. A sender sends a transaction from the Unstoppable wallet app. The transaction reaches the Bitcoin network instantly and remains pending there until one of the network nodes (aka miners) chooses to validate and add it to the blockchain.

2. It's not uncommon for the Bitcoin network to have more pending transactions than can fit into 1 MB block. This results in transactions backlog and network nodes having to choose which transactions to include in the next block.

3. As there are more pending transactions that can be processed, the network nodes (miners) give priority to transactions paying the highest fee. The transaction fees end up with network nodes and therefore these nodes are economically incentivised to prioritize transactions paying higher fees.

4. Transactions may remain in 'pending' state for hours or even days until the network becomes less busy and transaction fees for pending transactions become sufficient for inclusion in the next batch.

5. To ensure the completion of the transaction within desired level of urgency, the transaction fee should be set taking into account the load on the Bitcoin network. Unstoppable wallet allows senders to set fees for priority sending.
