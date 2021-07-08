# How Unstoppable recommends transaction fee for Ethereum?

The fee recommendation setting for Ethereum transactions in Unstoppable provides two options: Recommended (for processing within 0-20 min) and Custom where the user sets a desired fee amount manually.

A general rule here is to choose a higher fee (above recommended) for transactions where there is a level of urgency or the amount transacted is high.

For instance, transactions involving trading one cryptocurrency to another via some smart contract often involve a time period where the given trade should occur. In such cases, the transaction should be confirmed (included in the Ethereum blockchain) without staying too long in pending state or else the trade would fail.

Unstoppable gets a 'recommended' transaction fee from an Ethereum blockchain using one of its native means to estimate transaction fees taking into account the network load.

To minimize the chances of transaction failing or getting stuck when using recommended fee values, Unstoppable recommends even higher fees as the value of the transaction increases.

- for amounts <= 500$ adds 5% (on top of network recommended value)
- for amounts <= 1000$ adds 10%
- for amounts > 1000 and <= 5000 adds 15%
- for amounts > 5000 and <= 10000 adds 20%
- for amounts > 10000 adds 25%

It's recommended to choose at least the fee value recommended by Unstoppable when there is a level of urgency and the amount transacted is high. The recommended values would increase the speed of the transaction confirmation.

