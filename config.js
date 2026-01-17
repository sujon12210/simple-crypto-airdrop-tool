require("dotenv").config();

module.exports = {
  privateKey: process.env.PRIVATE_KEY,
  rpcUrl: process.env.RPC_URL,
  tokenAddress: process.env.TOKEN_ADDRESS,
  amount: process.env.AMOUNT || "1",
  abi: require("./erc20ABI.json")
};
