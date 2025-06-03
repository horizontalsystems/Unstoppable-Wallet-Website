# How do you restore a wallet(s)?

Unstoppable provides easy wallet restore functionality for any wallet that was set up in a standard-compliant wallet.

Users are able to restore wallets that were created in Unstoppable as well as ones created in other non-custodial wallet apps.

To restore wallet:

- Go to Settings >> Manage Wallets section.
- Click on the 'Restore' button.
- Enter the mnemonic phrase for the wallet. If the wallet has an additional passphrase (BIP39), it needs to be provided as well.
- On the next screen, select the currencies to activate for the wallet. Selecting Ethereum or Binance Smart Chain will also provide means to auto-activate all ERC20/BEP20 tokens where a wallet has a balance. The user needs to manually select all blockchains where the wallet is expected to have a balance.

After selecting currencies, click on the Restore button and wait for the wallet to finish synchronizing itself with selected blockchains and identify wallet's past transactions.

The synchronization steps for Bitcoin, Bitcoin Cash, Dash, Litecoin, Zcash can take several minutes/hours depending on many factors including the internet connection.

Additional points to keep in mind:

- For Bitcoin, Bitcoin Cash and Litecoin, the user is also expected to indicate the address type for the selected coin. More information about these are available in the Bitcoin section below.
- When restoring Zcash wallets, users can optionally indicate the wallet birthday height parameter and significantly speed up the wallet synchronization process.
- Privacy-sensitive users should be also aware that by default Unstoppable synchronizes wallets being restored via 3rd party API server. This is done only once during the wallet restore. While this method is significantly faster it's generally considered less private. Those looking to synchronize the wallet with the blockchain in a decentralized manner can choose to restore 'via Blockchain' which operates in a more private manner but may take a few hours.


