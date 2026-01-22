const express = require("express");
const app = express();

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("PM2 App Running Successfully 🚀");
});

app.listen(3000, () => {
  console.log("PM2 app running on port 3000");
=======
  res.send("Docker App Running Successfully 🚀");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
>>>>>>> 82f4e5d2d01430778b7d3f7a5f9340b155c54c35
});
