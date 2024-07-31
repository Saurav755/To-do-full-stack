const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("here");
  res.send.json({ message: "Error" });
});

app.listen(3000);
