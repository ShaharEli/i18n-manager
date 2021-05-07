const { execSync } = require("child_process");
const cli = () => {
  execSync("node ./server/build/index.js hi", { stdio: "inherit" });
};

module.exports = { cli };
