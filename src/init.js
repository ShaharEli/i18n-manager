const path = require("path");
const pwd = process.cwd();
const { readFileSync, writeFileSync, existsSync } = require("fs");
const ora = require("ora");
const inquirer = require("inquirer");
const { confirmArr } = require("./utils");
const currenpathurl = new URL(import.meta.url).pathname;
const i18nManagerTreePath = path.resolve(
  currenpathurl,
  "..",
  "..",
  "config",
  "i18nManagerTree.json"
);
const treePath = path.join(pwd, "i18nm.json");
let spinner;
const init = async () => {
  if (existsSync(treePath)) {
    const { overwrite } = await inquirer.prompt([
      {
        name: "overwrite",
        message:
          "i18n manager config file exists do you want to overwrite? (y/n)",
        default: "n",
      },
    ]);
    if (!confirmArr.includes(overwrite)) {
      console.log("canceling...");
      return;
    }
  }
  try {
    spinner = ora(`init i18n manger config file`).start();
    const treeFile = readFileSync(i18nManagerTreePath);
    writeFileSync(treePath, treeFile);
    spinner.succeed();
  } catch ({ message }) {
    spinner.text = message;
    spinner.fail();
  }
};

module.exports = { init };
