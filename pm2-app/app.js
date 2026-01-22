const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("PM2 App Running Successfully 🚀");
});

app.listen(3000, () => {
  console.log("PM2 app running on port 3000");
});

