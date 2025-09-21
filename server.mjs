// server.mjs
import https from "https";
import fs from "fs";
import dotenv from "dotenv";
import app from "./app.mjs"; // use import instead of require

dotenv.config();

const PORT = process.env.PORT || 5000;

const options = {
  key: fs.readFileSync("ssl/privatekey.pem"),
  cert: fs.readFileSync("ssl/certificate.pem"),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`✅ Secure API running at https://localhost:${PORT}`);
});
