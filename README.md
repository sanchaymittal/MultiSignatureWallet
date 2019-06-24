# MultiSignatureWallet

A multisignature wallet is an account that requires some m-of-n *quorum* of approved private keys to approve a transaction before it is executed.

Ethereum implements multisignature wallets slightly differently than Bitcoin does. 
In Ethereum, multisignature wallets are implemented as a smart contract, that each of the approved external accounts sends a transaction to in order to "sign" a group transaction.

