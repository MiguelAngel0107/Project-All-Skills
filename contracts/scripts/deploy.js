// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log(
    "Account balance:",
    ((await deployer.getBalance()) / 10 ** 18).toString()
  );

  const TokenFactory = await hre.ethers.getContractFactory("Token"); //Nombre del Contrato
  const token = await TokenFactory.deploy();
  await token.deployed();

  console.log("Token deployed to:", token.address);

  // await token.transfer('0x123', web3.utils.toWei('9000000', 'ether'))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
