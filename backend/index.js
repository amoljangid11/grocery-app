const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, this is node js server for food delivery app</h1>");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
