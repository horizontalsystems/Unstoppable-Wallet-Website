# What do BIP44 / BIP49 / BIP84 mean in Bitcoin?

Bitcoin has three commonly-used address formats that can be used to receive Bitcoin payments. Usually cryptocurrency wallets operate with just one format with some like Unstoppable supporting usage of multiple formats.

Unstoppable supports all three address formats and allows users to have separate Bitcoin balances for each of the three formats within a single multi-coin wallet. So, any wallet created in Unstoppable can potentially have three Bitcoin wallets operating as different cryptocurrencies along with other cryptocurrencies in the wallet.

The various formats emerged as a result of more and more people transacting on the Bitcoin network. The newer address formats were introduced to make transaction sizes smaller and thus allow the network to process more transactions in each block.

- Legacy Addresses:

 The oldest address format, often referred to as BIP44 format, usually starts with a number "1". Being the oldest format most wallets support both receiving and sending Bitcoin payments to these addresses.

 The issue with using such address formats are higher transaction fees when transacting on the network. Sending a payment from a wallet that holds funds previously received to a Legacy Address Format is a bit more expensive than when the wallet uses other formats.

- SegWit Addresses:

 A more recent address format, referred to as BIP49 format, usually starts with a number "3". Supported by many newer wallet apps.

 Sending a payment from a wallet that operates with funds received to SegWit addresses is cheaper when compared to legacy addresses.

- Native-SegWit Addresses

 The newest address format, referred to as BIP84 format, and the cheapest to work with. The bech32 address format starts with "bc1".

An easy way to find out which format the wallet supports is to open the wallet app and check the first few symbols of the address for receiving Bitcoin.

On a practical level, apart from the difference in transaction fees there is just one thing to keep in mind. Knowing the address format is also needed when restoring a Bitcoin wallet in some wallet app.

Unstoppable wallet is able to both create and restore wallets operating in any of the three available address formats.
