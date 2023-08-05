const express = require("express");
const path = require("path");

const app = express();

/* app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.sendFile(path.join(__dirname, "public", "index.html"));
}); */

const members = [
  {
    id: 1,
    name: "Name 1",
    email: "name1@email.com",
    status: "active",
  },
  {
    id: 2,
    name: "Name 2",
    email: "name2@email.com",
    status: "active",
  },
  {
    id: 3,
    name: "Name 3",
    email: "name3@email.com",
    status: "active",
  },
];

app.get("/api/members", (req, res) => {
  res.json(members);
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
