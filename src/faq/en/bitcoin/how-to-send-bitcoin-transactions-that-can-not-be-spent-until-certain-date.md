# How can you send Bitcoin transactions that can't be spent until a certain date?

Unstoppable wallet provides the ability to send Bitcoin transactions that can't be spent until a certain date in the future. Such capabilities exist on the Bitcoin blockchain but few wallet applications implement them.

Being an experimental feature, it's not available by default and needs to be manually activated by the user from Settings >> Experimental Features.

The recipient of such payments becomes the owner of the funds as soon as a transaction is confirmed on the blockchain; however the funds may not be spent until indicated time has passed. The Unstoppable wallet application shows a lock sign next to the balance amount that has originated from such transactions.

The recipient of such transaction should be using Unstoppable wallet version 0.10 or higher and use BIP44 address format for Bitcoin. Other wallets may not be able to correctly identify such transactions on the network and therefore likely to simply not see them at all.
