const users = require("../../public/js/user");

const homePageController = (req, res) => {
  res.render("home", { users });
};

module.exports = homePageController;
