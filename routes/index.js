var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("layouts/login1", { title: "Login" });
});

router.get("/password", function (req, res, next) {
  res.render("layouts/password", { title: "Login" });
});

module.exports = router;
