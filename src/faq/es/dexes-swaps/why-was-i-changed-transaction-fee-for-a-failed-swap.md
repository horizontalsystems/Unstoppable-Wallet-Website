# Why was I charged transaction fee for a failed swap?

A transaction on Ethereum blockchain may be completed and yet fail to execute all steps it was supposed to do. When this happens the user still pays the transaction fee to the network.

Users sending transactions are paying for the computation, regardless of whether their transaction succeeds or fails. Users are expected to pay for that computation, just like for a successful transaction.

When it comes to swap transactions there are many potential reasons where this can happen.
- The amount of time between transaction submission to the network and its confirmation exceeds the validity period set by the user for the swap. Likely to happen when the network is congested and/or the user set fee for transaction is insufficient for processing within the required time frame (validity period).
- Low price slippage setting
- Low transaction fee setting. Setting a lower transaction fee is likely to result in the transaction remaining pending longer than its validity period setting.

Failed transactions are still added to the blockchain. The transaction fees are still paid to miners for executing computational steps for it. Network miners have to validate and spend computational power on every transaction without knowing in advance whether it's going to fail or not.

