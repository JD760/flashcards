const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + Typescript");
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
