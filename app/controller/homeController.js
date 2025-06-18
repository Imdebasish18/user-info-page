const users = require("../../public/js/user");

class HomeController {
  async homePageController(req, res) {
    res.render("home", { users });
  }
}

module.exports = new HomeController();
