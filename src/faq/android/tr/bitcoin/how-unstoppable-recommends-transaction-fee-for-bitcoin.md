# How Unstoppable recommends transaction fee for Bitcoin?

Some of the better made non-custodial wallets incl. Unstoppable estimate the required transaction fee amount in order for the Bitcoin transaction to be included within the next block.

The fee recommendation setting for Bitcoin provides multiple fee levels:

- Low >> for inclusion within 0-400 min
- Recommended (Default) >> for inclusion within 0-120 min
- High >> for inclusion within 0-30 min
- Custom >> user set value

A general rule here is to choose a higher fee (above recommended) for transactions where there is a level of urgency or the amount transacted is high.

At the same time, choosing a very low fee (i.e. equivalent to 0.01$) is likely to result in a transaction being dropped (rejected) shortly after it's sent from the network without being processed.

The 'Custom' setting allows the sender to set its own transaction fee rate. This setting is recommended for those who are familiar with Bitcoin fee mechanisms.

Keep in mind that Unstoppable fee recommendation service merely makes an educated guess based on the analysis of the network activity. There is no way to guarantee that the recommended setting would always work as expected.

Also note that, the transaction fee amount doesn't depend on the amount of Bitcoins being transacted.

