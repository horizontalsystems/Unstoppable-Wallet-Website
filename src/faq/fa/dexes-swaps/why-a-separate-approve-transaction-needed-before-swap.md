# Why a separate approve transaction needed before swap? 

Users are expected to execute a separate Approve transaction when doing any of the following swap trades:
- ERC20 -> ETH
- ERC20 → ERC20
- BEP20 → BNB
- BEP20 → BEP20

Approved transactions are generally cheap to execute and serve as a permission from a user to allow DEX to debit an approved amount of ERC20/BEP20 tokens in order to execute a trade.

When executing Approve transaction users have an option to indicate the amount of tokens the DEX is allowed to debit. If necessary, users are able to approve higher amounts in advance to account for future trades and thus saving the need to do another Approve transaction in the future.

Approving a lower amount than required by a trade will result in the transaction failing to execute.

