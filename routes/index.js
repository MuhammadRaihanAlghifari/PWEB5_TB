var express = require("express");
var router = express.Router();
const middleware = require("../middleware/verifytoken")
const controller = require('../controller/auth.controller')
const profileLihat = require('../controller/lihatProfile')


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("layouts/login1", { title: "Login" });
});

router.get('/login1', controller.form);
router.post('/showProfile', controller.checklogin);

router.get("/dashboard", function (req, res, next) {
  res.render("layouts/dashboard", { title: "Login" });
});

router.get("/editprofile", function (req, res, next) {
  res.render("layouts/editprofile", { title: "Login" });
});

router.get("/showProfile", middleware.verifyToken, profileLihat.lihatProfil);


router.get("/password", function (req, res, next) {
  res.render("layouts/password", { title: "Login" });
});

module.exports = router;
