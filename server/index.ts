import app from "./app";

const PORT = process.argv[2] ? parseInt(process.argv[2]) : 1818;
app.listen(PORT, () => {
  console.log(`i18n manager running on http://localhost:${PORT}`);
});
