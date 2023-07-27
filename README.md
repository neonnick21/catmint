# catmint
JS beginner code demonstrating introductory javascript coding.
- (run using gitpod)
- js file: catNFT.js

# catmint token contract

Solidity beginner code demonstrating introductory solidity coding.
- (mint and burn tokens with address)
- sol file: catmintContract.sol

## Description

A contract written in solidity. The contract has two main functions, minting and burning tokens. We can also specify its name, abbreviation, and its total supply. Solely for learning purposes, this program demonstrates smart contracts programming on blockchain with ethereum.

## Getting Started

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.
Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., HelloWorld.sol). Copy and paste the contents of `catmintContract.sol` from this github repository to the remix IDE.

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version), and then click on the "Compile filename.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar, then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by clicking the buttons and calling functions. Click on the deployed contract in the left-hand sidebar, and then click on either the
- "totalSupply" to view the current supply, 
- "tokenName" to see the specified name, 
- and "tokenAbbrv" to view the token abbreviation. 

To start using the functions, we require an address. This is located above the deployed contract in the left-hand sidebar. Copy the address, then locate and click the dropdown on the catmint button on the deployed contract still at the left-hand sidebar. Paste the address and enter how many you want to mint, then press transact.

The same goes for the catburn function, just copy and paste the address and specify a number of tokens to burn. Click transact, and you can click on the totalSupply button to see the changes made.

## Authors

Contributors names and contact info

Hiljenicho Bona
neonnick21@gmail.com / hmsbona@mymail.mapua.edu.ph


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
