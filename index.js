const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "Tonie", role: "developer" });
});

app.listen(3000, () => {
  console.log(`Server is up and running`);
});
