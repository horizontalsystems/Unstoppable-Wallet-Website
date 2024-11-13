# Interacting with dApps

Most Ethereum wallet apps are designed for basic functions like storing, sending, and receiving ETH and ERC-20 tokens, but they don’t inherently support direct interaction with dApps. **WalletConnect** is a protocol that bridges this gap, allowing non-custodial wallets to connect and interact with any dApp on Ethereum.

For WalletConnect to work, both the wallet and dApp need to support it. Here’s how it works in practice:

1. **Initiating Connection**:
    - The user visits a dApp’s website, clicks “Connect Wallet,” and selects WalletConnect.
    - A QR code appears (or a link activates if using a mobile device).
   
2. **Establishing Connection**:
    - The user scans the QR code with their wallet app or clicks the link.
    - The wallet app displays the connection request details.
   
3. **Ongoing Interaction**:
- After connection is stablsihed the user appears “logged in” into the dApp.
- One every action, the dApp requests transaction approvals, which appear in the wallet app.
- The user reviews and approves or rejects transactions directly from their wallet.
  
WalletConnect provides enhanced security by keeping private keys within the wallet and eliminates the need to enter sensitive information on dApp websites. More importantly, it enables user to use their mobile wallet to interact with any dApp on Ethereum blockchain.