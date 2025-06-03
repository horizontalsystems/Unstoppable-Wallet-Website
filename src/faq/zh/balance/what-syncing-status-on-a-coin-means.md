# What 'syncing' status on a coin means?

The 'syncing' status indicator on the coin shows that the Unstoppable app tries to synchronize itself with a given blockchain. While in most cases that status should be shown briefly, there are many valid situations where it can remain for significantly longer:
- During the initial synchronization when restoring wallet with Bitcoin, Bitcoin Cash, Dash, Litecoin and Zcash cryptocurrencies. Few hour long syncing is expected for every coin if the user chooses to restore the wallet from a blockchain instead of a 3rd party API service. The more coins are being restored the longer it takes.

- When activating Bitcoin, Bitcoin Cash, Dash, Litecoin and Zcash cryptocurrencies for the 1st time after wallet setup.

- Opening the wallet app after days or weeks since it last opened.

- Poor networking conditions and in general slow internet.

- Delayed or slow response times for Ethereum and Binance Smart Chain RPC providers. It's generally advised to wait for a few minutes or try to restart the wallet app. At this stage, Unstoppable is dependent on the RPC services because direct communication solutions for these two blockchains currently result in poor usability.

Keep in mind, the Unstoppable app keeps the synchronization process running only when the Unstoppable remains open. If the app is closed the synchronization process is paused and only resumes when the app is opened again.

