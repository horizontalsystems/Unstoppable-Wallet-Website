# Why Bitcoin transaction stays pending?

The most common reason for the transaction to remain in pending state for long is when there are a lot of pending transactions on the network and the fee set for the given transaction is below the network average.

- If the fee set is very low (close to 0) then the transaction should fail and get rejected. Typically, this should happen shortly after it's sent.

- If the fee set by the sender is below the network average due to sudden increase in blockchain usage (as occasionally happens) then transactions are likely to remain pending for some time but ultimately will be processed. It may even take a few days.

