const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.sendFile(path.join(__dirnamem, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
