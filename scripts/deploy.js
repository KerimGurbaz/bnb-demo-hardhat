const hre = require("hardhat");

async function main() {
  const CarRentalPlatform = await hre.ethers.getContractFactory("CarRentalPlatform");
  const carRentalPlatform = await CarRentalPlatform.deploy(/*your constructor arguments here*/);

  await carRentalPlatform.deployed();

  console.log(`CarRentalPlatform deployed to: ${carRentalPlatform.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
