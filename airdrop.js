const { sendAirdrop } = require("./sender");

async function start() {
  const result = await sendAirdrop();
  console.log("Airdrop finished:", result);
}

start();
