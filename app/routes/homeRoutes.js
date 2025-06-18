const express = require("express");
const homePageController = require("../controller/homeController");

const router = express.Router();

router.get("/", homePageController);

module.exports = router;
