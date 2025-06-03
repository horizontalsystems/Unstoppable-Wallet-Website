# How Unstoppable recommends transaction fee for Ethereum?

The fee recommendation setting for Ethereum transactions in Unstoppable provides two options: 

- Recommended : for processing within 10-20 min
- Custom : user sets fee amount manually

A general rule here is to choose a higher fee (above recommended) for transactions where there is a level of urgency or the amount transacted is high.

For instance, transaction involving trading one cryptocurrency to another via Ethereum based exchange service typically has a validity period during which a trade should occur. In such cases, the transaction should be confirmed (added to the Ethereum blockchain) without staying too long. If it remains in pending state longer than validity period transaction would fail.

Unstoppable gets a 'recommended' transaction fee from an Ethereum blockchain using one of its native means to estimate transaction fees taking into account the network load.

To minimize the chances of transaction failing or getting stuck when using recommended fee values, Unstoppable recommends even higher fees as the value of the transaction increases.

- for amounts < 500$ : recommended fee
- for 500$ - 1000$ : adds 10%
- for 1000$ - 5000$ : adds 15%
- for 5000$ - 10000$ : adds 20%
- for amounts > 10000$ : adds 25%

It's recommended to choose at least the fee value recommended by Unstoppable when there is a level of urgency and the amount transacted is high. The recommended values likely to increase the speed of the transaction confirmation.
