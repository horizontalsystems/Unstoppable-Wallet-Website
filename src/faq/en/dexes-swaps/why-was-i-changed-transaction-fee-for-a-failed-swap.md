# Why was I charged transaction fee for a failed swap?

A transaction on Ethereum blockchain may be completed and yet fail to execute all steps it was supposed to do. The user still pays the transaction fee to the network when that happens. Users are expected to pay for that computation, just like for a successful transaction.

Users sending transactions are paying for the computation, regardless of whether their transaction succeeds or fails.

There are many potential reasons where swap transaction can fail:

- The amount of time between transaction submission to the network and its confirmation exceeds the validity period set by the user for the swap. This is likely to happen when the network is congested and/or the user set fee for transaction is insufficient for processing within the required time frame (validity period).

- Very low price slippage setting. If user indicates low acceptable price slippage levels then there is an increased chance of a DEX unable to execute swap within desired price levels.
  
- Low transaction fee setting. Setting a lower transaction fee is likely to result in the transaction remaining pending longer than its validity period setting.
