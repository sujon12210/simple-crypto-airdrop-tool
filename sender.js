const fs = require("fs");
const { ethers } = require("ethers");
const config = require("./config");

async function sendAirdrop() {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const wallet = new ethers.Wallet(config.privateKey, provider);

  const contract = new ethers.Contract(
    config.tokenAddress,
    config.abi,
    wallet
  );

  const wallets = fs.readFileSync("wallets.txt", "utf8").split("\n");

  for (let address of wallets) {
    if (!address) continue;
    const tx = await contract.transfer(address, config.amount);
    await tx.wait();
    console.log("Sent to:", address);
  }

  return "Done";
}

module.exports = { sendAirdrop };
