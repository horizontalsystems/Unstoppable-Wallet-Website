# Why does the Bitcoin transaction stay pending?

A common reason for the transaction to remain pending for long is when the network is busy, and the fee set for the given transaction is below the network average.

If the fee set is very low (close to 0) then the transaction should fail and get rejected. Typically, this should happen shortly after it's sent.

If the fee set by the sender is below the network average due to a sudden increase in blockchain usage then the transaction is likely to remain pending for some time but ultimately will be processed. Sometimes this may take a few days.


