const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

const router = require("./app/routes/homeRoutes");
app.use(router);

const port = 8002;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
