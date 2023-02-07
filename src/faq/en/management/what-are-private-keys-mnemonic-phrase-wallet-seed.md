# What are private keys?

Usually, terms i.e. private key, mnemonic phrase, secret phrase and wallet seed are used interchangeably in the cryptocurrency context. All these terms typically refer to information that is used to control funds on non-custodial cryptocurrency wallets like Unstoppable.

Every non-custodial cryptocurrency wallet is expected to provide users with a private key  during wallet app setup. That key is created during the wallet setup. For the ease of use this key is shown to the user in a form of 12 (or more) plain English words and in case of Unstoppable referred to as secret phrase. 

That key is what gives user access as well as ownership over all of the assets within the wallet. In contrast to traditional websites/services that provide the ability to recover lost passwords/usernames, non-custodial wallets do not provide the capability to recover private keys and  should not be able to do so when built properly.

The private keys are randomly generated (on the device itself) during the wallet creation process and never leave the device after that. If the user deletes the wallet, keys are deleted as well. So, recovering a private key from elsewhere is impossible if for some reason the wallet user is unable to access it on the device. 

Hence, it’s absolutely essential that user backups the key during wallet setup. Most wallets try to force users to write down a copy of private key right after the wallet has just been created.

Each multi-coin wallet Unstoppable creates comes with its own private key, referred to as secret phrase. That secret phrase presented to the user in a form of 12 plain English words.

Using that key someone may be able to:

- restore access to the existing wallet even if Unstoppable wallet app is deleted from the phone.
- restore access to the same wallet but in some other wallet app.

As you may have seen, other than the secret phrase Unstoppable shows some other options next to the secret phrase. 

These are:

- EVM Private Key
- BIP32 Root Key
- Account Extended Public Key
- Account Extended Private Key 

You can think of them as various representations of that same secret phrase. Users do not need to backup them, only the secret phrase backup is essential. But there are some things to keep in mind regarding why someone may need them.

## EVM Private Key

This key allows importing EVM-based cryptocurrencies (Ethereum, Binance Smart Chain etc) from Unstoppable to any other standard compliant wallet app. In other words, someone with a multi coin wallet that has ETH, BTC, BNB on it can use that key to restore access to ETH, BNB on some other wallet that doesn’t support Bitcoin i.e. Metamask browser based wallet.

The EVM Private Key shouldn't be shared publicly. Someone with an access to this EVM private key can take over management of cryptocurrencies that are based on EVM type blockchains i.e. Ethereum, Binance Smart Chain, Polygon etc. 

It won't provide access to Bitcoin or other non-EVM cryptocurrencies that reside within the same multi-coin wallet on Unstoppable.

## BIP32 Root Key

Think of it as just another representation of the secret phrase. It gives someone full control over the assets on the respective wallet. So, should be kept safe and never shared with anyone.

## Account Extended Public Key

This key allows read-only monitoring of Bitcoin and other UTXO based cryptocurrencies (i.e Litecoin, Bitcoin Cash, Dash etc) that reside on the respective wallet. 

The main reason for someone to use that is when someone wants only to monitor the funds on the balance without an ability to spend them. For instance, someone keeping Bitcoin on Ledger hardware wallet may copy the Account Extended Public Key from Ledger to Unstoppable to be able to monitor the Bitcoin balance (as well as transactions) without the need to connect to Ledger wallet. That way funds remain secured on Ledger but become viewable in Unstoppable wallet app. 

Another scenario, let’s say you keep a significant amount of Bitcoin on one of your Unstoppable wallets and do not intend to move them. A safe way to keep those funds would be to unlink that wallet from the app entirely (given that you have a backup of its secret phrase) and use Account Extended Public Key to setup a “watch-only wallet” in Unstoppable. That way you still see the funds, transactions, addresses (in case you want to make a deposit) but at the same time Unstoppable doesn’t have access to private keys. This means that even if someone unauthorized opens your Unstoppable app s/he won’t be able to spend the funds on that wallet.

Note: Account Extended Public Key only relates to Bitcoin and other UTXO based cryptocurrencies i.e Litecoin, Bitcoin Cash, Dash that reside on the respective wallet. It won't provide access to EVM cryptocurrencies i.e. Ethereum that reside within the same multi-coin wallet on Unstoppable.


## Account Extended Private Key 

This key allows importing Bitcoin and other UTXO based cryptocurrencies within the same wallet from Unstoppable app to any other standard compliant wallet app. It’s like Account Extended Public Key but also with ownership capabilities.

It shouldn't be shared publicly. Someone with an access to this private key can take over management of Bitcoin and other UTXO based cryptocurrencies i.e Litecoin, Bitcoin Cash, Dash etc.

It won't provide access to EVM cryptocurrencies i.e. Ethereum that reside within the same multi-coin wallet on Unstoppable.
