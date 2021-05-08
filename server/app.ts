import express, { Request, Response } from "express";
import path from "path";
import { writeFileSync, existsSync, readFileSync, readdirSync } from "fs";
import { checkIfI18nmConfigIsValid, formatToJson } from "./src/utils";
const projectPath = path.join(process.argv[1], "..", "..");
const configPath = path.join(projectPath, "i18nm.json");
const app = express();
app.use(express.json());

app.get("/locales", (req: Request, res: Response) => {
  try {
    if (!existsSync(configPath)) {
      return res.json({
        error: "i18nm config file not found, please run i18nm init",
      });
    }
    const configFile = formatToJson(readFileSync(configPath));
    const configValid = checkIfI18nmConfigIsValid(configFile);
    if (typeof configValid === "boolean") return res.json(configValid);
    const { localesPath, localesFileType } = configFile;
    const localesPathFromThisDir = path.join(projectPath, localesPath);
    if (!existsSync(localesPathFromThisDir))
      return res.json({
        error: `locales not found in ${localesPathFromThisDir}`,
      });
    const localesDir = readdirSync(localesPathFromThisDir);
    const validFiles = localesDir.filter((f) => f.endsWith(localesFileType));
    const strippedFilesNames = validFiles.map((f) =>
      f.replace(`.${localesFileType}`, "")
    );
    const localesFiles = validFiles.reduce(
      (acc, f, i) => ({
        ...acc,
        [strippedFilesNames[i]]: formatToJson(
          readFileSync(path.join(localesPathFromThisDir, f))
        ),
      }),
      {}
    );

    return res.json({ localesFiles, localesFileType, strippedFilesNames });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

export default app;
