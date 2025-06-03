# Why is a transaction value shown incorrectly in a recent transaction?

To be able to display the overall transferred cryptocurrency amount in fiat (USD, EUR etc) for past crypto transactions Unstoppable needs to know the valid exchange rate at the date of transaction. 

At the moment, Unstoppable relies on [https://coingecko.com](coingecko.com) for historical cryptocurrency rates. In the future we expect to have more source for reference incl. the option to obtain historical rates from the decentralized cryptocurrency exchanges.

If the historical exchange rate in Unstoopable app happens to be incorrect then the transaction amount shown in the transactions list will be shown incorrectly. In such cases refer to the actual amount transferred in cryptocurrency.