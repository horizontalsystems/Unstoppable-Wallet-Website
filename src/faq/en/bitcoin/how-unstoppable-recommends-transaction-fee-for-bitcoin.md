# How Bitcoin transaction fee calculated?

Non-custodial wallets like Unstoppable estimate the required transaction fee amount in order for the Bitcoin transaction to be included within the next block.

The fee recommendation setting for Bitcoin provides multiple fee levels, depending on the level urgency

- Low >> within 400 min
- Recommended >> within 120 min
- High >> within 30 min
- Custom >> user set value

A general rule here is to choose a higher fee (above the 'Recommended' setting) for transactions where there is a high level of urgency or amount transacted is high.

At the same time, choosing a very low fee (i.e. 0.01$) is likely to result in a transaction being dropped (rejected) shortly after it's sent from the network.

The 'Custom' setting allows the sender to set its own transaction fee rate. This setting is recommended for those who are familiar with Bitcoin transaction fee mechanism.

Keep in mind that Unstoppable fee recommendation service merely makes an educated guess based on the analysis of the network activity. There is no way to guarantee that the recommended setting would always work as expected.

Also note that, the transaction fee amount doesn't depend on the amount of Bitcoins being transacted.
