"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.argv[2] ? parseInt(process.argv[2]) : 1818;
app_1.default.listen(PORT, () => {
    console.log(`i18n manager running on http://localhost:${PORT}`);
});
