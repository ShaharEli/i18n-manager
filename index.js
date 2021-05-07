const { init } = require("./src");
const { runServer } = require("./src/utils");

const cli = async (allArgs) => {
  const argv = allArgs.slice(2);
  if (!argv.length) {
    runServer();
  }
  switch (argv[0]) {
    case "init":
      init();
      break;
    case "-p":
      if (!isNaN(parseInt(argv[1]))) {
        runServer(argv[1]);
        break;
      }
    default:
      runServer();
  }
};

module.exports = { cli };
