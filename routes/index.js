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
router.post('/showProfile', controller.checklogin, controller.changePassword);
router.post('/dashboard',  controller.changePassword);
router.post('/databuku', controller.changePassword);

// router.post('/dashboard', async (req, res) => {
//   try {
//     await changePassword(req, res);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Terjadi kesalahan server" });
//   }
// });

router.get("/dashboard", function (req, res, next) {
  res.render("layouts/dashboard", { title: "Login" });
});

router.get("/db1", function (req, res, next) {
  res.render("Mhs/db1", { title: "Login" });
});

router.get("/editprofile", function (req, res, next) {
  res.render("layouts/editprofile", { title: "Login" });
});

router.get("/showProfile", middleware.verifyToken, profileLihat.lihatProfil);

router.get("/logout", controller.logout);


router.get("/password", function (req, res, next) {
  res.render("layouts/password", { title: "Login" });
});

router.get("/databuku", function (req, res, next) {
  res.render("layouts/databuku", { title: "Login" });
});

module.exports = router;
