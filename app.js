const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const port = 8002;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
