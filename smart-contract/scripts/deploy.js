const hre = require("hardhat");

async function main() {
	const tweetsFactory = await hre.ethers.getContractFactory("Tweets");
	const tweets = await tweetsFactory.deploy();

	await tweets.deployed();

	console.log("Tweets deployed to:", tweets.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
