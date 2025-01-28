const express = require("express");
require("dotenv").config();

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/facebook", (req, res) => {
  res.send("welcome to facebook");
});

app.get("/google", (req, res) => {
  res.send("welcome to google");
});
// app.get("/youtube", (req, res) => {
//   res.redirect("https://www.youtube.com/");
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
