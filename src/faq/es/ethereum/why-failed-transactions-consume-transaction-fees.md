# Why failed transactions consume transaction fees?

In order for a transaction to be considered completed it needs to be confirmed and added to the blockchain. However, a completed transaction doesn't necessarily mean that all steps in the transaction were executed successfully. A transaction may be completed and yet fail to execute all steps it was supposed to do.

There are many potential reasons where this can happen. For example, a transaction swapping one token to another on decentralized exchange (Uniswap, Sushiswap, 1inch etc) often includes a validity period that defines how long transaction conditions considered valid after it's sent by the user. 

If such a transaction remains in pending state (waiting for the confirmation) longer than its validity period it will still get confirmed but the token exchange won't take place while transaction fee will still be paid to the network.

Failed transactions are still added to the blockchain. The transaction fees are still paid to miners for executing computational steps for each such transaction. Network miners have to validate and spend computational power on every transaction without knowing in advance whether it's going to fail or not.

Therefore, users sending transactions are paying for the computation, regardless of whether their transaction succeeds or fails. Users are expected to pay for that computation, just like for a successful transaction. That's why setting a sufficient transaction fee is vital for a successful execution of the transaction.

Transaction fees are paid to the network directly and do not pass through or relate to Unstoppable wallet in any way.
