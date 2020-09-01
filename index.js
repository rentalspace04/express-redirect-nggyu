const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect(301, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
