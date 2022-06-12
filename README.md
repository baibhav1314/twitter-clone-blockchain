
# Twitter Clone

A decentralised social media app that enable users to signin through their web3 wallet, tweet text and images,
get likes and comments on it, also create a priority tweet after paying a certain ethers.

## Tech Stack

**Client:** React.js, Context API, Ethers.js, Web3UiKit

**Server:** Moralis

**Smart Contract:** Solidity, Hardhat

## Screenshots

![twitter1](https://user-images.githubusercontent.com/60654743/173222838-367cd06d-b954-410a-9e5b-29d29ce20f74.png)

![twitter2](https://user-images.githubusercontent.com/60654743/173222840-6fa9195a-adf2-418f-aa91-bdebfd4f0422.png)

![twitter3](https://user-images.githubusercontent.com/60654743/173222842-a0259554-c6f9-448d-a2db-608b1f4bd228.png)



## Run Locally

Clone the project

```bash
  git clone https://github.com/baibhav1314/twitter-clone-blockchain.git
```

Go to the project directory

```bash
  cd twitter-clone-blockchain
```

Install dependencies

```bash
  npm install
```

Go to the smart-contract directory

```bash
  cd smart-contract
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  cd ..
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_SERVER_URL` = Your Moralis ServerUrl

`REACT_APP_APP_ID` = Your Moralis appId

Then add a .env file inside the smart-contract folder

```bash
cd smart-contract
```

`SPPEDY_NODES_RINKEBY_URL` = Your speedy node url from Moralis Speedy Nodes

`WALLET_PRIVATE_KEY`= Your private key 


## Deploying Smart Contract

To deploy the smart contract run

```bash
  cd smart-contract
  npx hardhat run --network <your-network> scripts/deploy.js
```
Note the deployed contract address and update it in the `twitter-clone-blockchain/lib` folder along with the contract `abi`

## Deploying Project

Set up the netlify and then run

```bash
netlify deploy
```
