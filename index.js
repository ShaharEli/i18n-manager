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
    case "-p":
      if (!isNaN(parseInt(argv[1]))) {
        execSync(`node ./server/build/index.js ${argv[1]}`, {
          stdio: "inherit",
        });
        break;
      }
    default:
      execSync("node ./server/build/index.js", { stdio: "inherit" });
  }
};

module.exports = { cli };
