# Why is the wallet balance showing an incorrect amount?

There are several reasons when wallet balance may display incorrect amount:

- if the exchange rate for some cryptocurrency is missing, its value is not reflected in the total balance amount.

- if the exchange rate for some cryptocurrency is incorrect, the shown balance for that coin as well as the total balance amount will be displayed incorrectly.

- if the app synchronizes itself with the blockchain the balance for coins as well as the total balance amount will keep changing depending on the synchronization progress.

- if there is an incoming transaction that hasn’t reached finality. For certain currencies like Bitcoin, a certain amount of time needs to pass before the recently received amount becomes spendable. This usually varies between a few minutes to an hour, depending on the cryptocurrency. For Bitcoin, 3 blocks need to pass (approx. 30 min) before Unstoppable will let you spend newly received Bitcoins.

Apart from the obvious reasons above, the balance amount for Bitcoin, Bitcoin Cash, Litecoin, Dash, and Zcash cryptocurrencies may sometimes be shown incorrectly as a result of Unstoppable wallet failing to correctly identify an incoming transaction. In such cases, you're welcome to report the issue to the Unstoppable team and wait for the fix. It will be addressed on a priority basis.
