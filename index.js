const { execSync } = require("child_process");
const { init } = require("./src");
const cli = async (allArgs) => {
  const argv = allArgs.slice(2);
  if (!argv.length) {
    execSync("node ./server/build/index.js", { stdio: "inherit" });
  }
  switch (argv[0]) {
    case "init":
      init();
      break;
  }
  //   execSync("node ./server/build/index.js hi", { stdio: "inherit" });
};

module.exports = { cli };
