# Why failed transactions consume transaction fees

In order for a transaction to be considered completed, it needs to be confirmed and added to the blockchain. However, a completed transaction doesn't mean that all steps in the transaction were executed successfully. A transaction may be completed and yet fail to execute all the steps it was supposed to do.

There are many potential reasons where this can happen. For example, a transaction swapping one token to another often includes a validity period that defines how long the transaction conditions are considered valid after it's sent by the user. If such a transaction remains in a pending state (waiting for the confirmation) longer than its validity period, it may still get confirmed but the token exchange won't take place.

Failed transactions are also added to the blockchain and consume transaction fees. The transaction fees are still paid to miners for executing computational steps for it. Network miners have to validate and spend computational power on every transaction without knowing in advance whether it's going to fail or not.

Therefore, users sending transactions are paying for the computation, regardless of whether their transaction succeeds or fails.

Transaction fees are paid to the network directly and do not pass through or relate to Unstoppable wallet in any way.
