const { execSync } = require("child_process");

const confirmArr = ["yes", "y", "Yes"];
const runServer = (param = "") =>
  execSync(`node ./server/build/index.js ${param}`, { stdio: "inherit" });

module.exports = { confirmArr, runServer };
