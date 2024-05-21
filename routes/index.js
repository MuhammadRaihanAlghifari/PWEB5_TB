var express = require("express");
var router = express.Router();
const controller = require('../controller/auth.controller')

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("layouts/login1", { title: "Login" });
});

router.get('/login1', controller.form);
router.post('/login1', controller.checklogin);


router.get("/password", function (req, res, next) {
  res.render("layouts/password", { title: "Login" });
});

module.exports = router;
