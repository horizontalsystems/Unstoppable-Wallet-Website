# How to resend a failed Bitcoin transaction?

When users send Bitcoin transactions with a really low fee value such transactions are likely to stay pending for a short time and get rejected by the network. When this happens you may consider the transaction never happened and resend the transaction as a new transaction.

When you encounter a transaction with failed/rejected status in Unstoppable it's recommended to double check that transaction actually failed using some public block explorer like https://btc.com by searching on it for 'transaction ID'.

If it happens to be that Unstoppable shows a transaction as failed/rejected but some public block explorer shows it as pending or confirmed then most likely the information provided by block explorer is the correct one. Do not attempt to resend the transaction in this case and please report the issue to Unstoppable wallet support for troubleshooting.

Consider the transaction failed and attempt to resend it only if both Unstoppable and public block explorer shows thet transaction has failed/rejected.
