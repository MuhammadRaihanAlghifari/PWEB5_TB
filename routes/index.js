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
router.post('/profileMhs', controller.checklogin, controller.changePassword);
router.post('/dashboardMhs',  controller.changePassword);
router.get("/profileMhs", middleware.verifyToken, profileLihat.lihatProfil);
router.get("/logout", controller.logout);


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

router.get("/editprofile", function (req, res, next) {
  res.render("layouts/editprofile", { title: "Login" });
});

router.get("/password", function (req, res, next) {
  res.render("layouts/password", { title: "Login" });
});



router.get("/dashboardMhs", function (req, res, next) {
  res.render("Mhs/dashboardMhs", { title: "Login" });
});

router.get("/ProfileMhs", function (req, res, next) {
  res.render("Mhs/ProfileMhs", { title: "Login" });
});

router.get("/PinjamBuku", function (req, res, next) {
  res.render("Mhs/PinjamBuku", { title: "Login" });
});

router.get("/KembalikanBuku", function (req, res, next) {
  res.render("Mhs/KembalikanBuku", { title: "Login" });
});

router.get("/LihatBuku", function (req, res, next) {
  res.render("Mhs/LihatBuku", { title: "Login" });
});

router.get("/RiwayatPeminjaman", function (req, res, next) {
  res.render("Mhs/RiwayatPeminjaman", { title: "Login" });
});

router.get("/databuku", function (req, res, next) {
  res.render("layouts/databuku", { title: "Login" });
});

module.exports = router;
