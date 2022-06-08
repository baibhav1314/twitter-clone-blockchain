require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

module.exports = {
	solidity: "0.8.7",
	networks: {
		rinkeby: {
			url: process.env.SPPEDY_NODES_RINKEBY_URL,
			accounts: [process.env.WALLET_PRIVATE_KEY],
		},
		matic: {
			url: process.env.SPEEDY_NODES_POLYGON_TESTNET_URL,
			accounts: [process.env.WALLET_PRIVATE_KEY],
		},
	},
};
