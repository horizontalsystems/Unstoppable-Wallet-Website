# TRANSACTING WITH CRYPTOCURRENCY

Understanding how to send and receive cryptocurrency is a fundamental skill for any crypto user. While the process is generally similar across different cryptocurrencies, certain aspects can vary depending on the specific digital asset. This guide will walk you through the essentials of conducting transactions using non-custodial wallet apps.


### Sending Cryptocurrency

When you’re ready to send cryptocurrency, you’ll need to enter the recipient’s address, the amount you wish to send, and the transaction fee before hitting "Send."

Accuracy is crucial when entering the recipient’s address, as cryptocurrency transactions are irreversible—funds sent to the wrong address cannot be recovered. Some wallet apps allow you to scan the recipient’s QR code, automatically populating the address field for added convenience and security.

Most non-custodial wallets will suggest an appropriate transaction fee based on current network conditions. It’s important to remember that this fee goes directly to the blockchain network, not the wallet provider. We will delve deeper into transaction fees in a later section.


### Receiving Cryptocurrency

To receive cryptocurrency, open your wallet app and select the "Receive" or “Deposit” option. The app will generate a unique receiving address for most cryptocurrencies, although some tokens may share the same address. For example, all Ethereum-based tokens within a single wallet will have the same receiving address.

Simply share this address with the sender, and your cryptocurrency will appear in your wallet once the transaction is confirmed. It’s important to note that some wallets, particularly those for Bitcoin, may generate a new receiving address after each transaction to enhance privacy.


### How Transactions Actually Happen

For those interested in the technical side of how non-custodial transactions work, here’s a breakdown of the process:

1) Transaction Preparation

After you enter the recipient’s details, the amount to be sent, and the transaction fee, the wallet app constructs the transaction. This preparation can occur locally on your device or through the wallet provider’s server.

2) Cryptographic Signing

Once the transaction is ready, it is cryptographically signed by the wallet app using your private key. This signature is what makes the transaction non-custodial; only the private key holder can authorize a transaction that the blockchain will accept.

3) Broadcasting

The signed transaction is then broadcasted to the blockchain network, where it awaits processing and confirmation.