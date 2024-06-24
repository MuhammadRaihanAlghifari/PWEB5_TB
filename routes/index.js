var express = require("express");
var router = express.Router();
const middleware = require("../middleware/verifytoken")
const controller = require('../controller/auth.controller')
const profileLihat = require('../controller/lihatProfile')
const borrowController = require('../controller/Pinjam')
const returnBookController = require('../controller/kembalikan');
const extendLoanController = require('../controller/PerpanjangPeminjaman');
const riwayatPeminjaman = require('../controller/RiwayatPeminjaman');


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("layouts/login1", { title: "Login" });
});


router.get('/login1', controller.form);
router.post('/profileMhs', controller.checklogin, controller.changePassword);
router.post('/dashboardMhs',  controller.changePassword);
router.post('/pinjam', borrowController.borrowBook);
router.post('/kembalikanbuku', returnBookController.returnBook);
router.post('/PerpanjangPeminjaman', extendLoanController.extendLoan);
router.get("/profileMhs", middleware.verifyToken, profileLihat.lihatProfil);
router.post('/RiwayatPinjam', riwayatPeminjaman.getRiwayatPeminjaman);
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
  res.render("layouts/DashboardAdmin", { title: "Login" });
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

router.get("/EditProfileMhs", function (req, res, next) {
  res.render("Mhs/EditProfileMhs", { title: "Login" });
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

router.get("/KembalikanBuku", function (req, res, next) {
  res.render("Mhs/KembalikanBuku", { title: "Login" });
});

router.get("/LihatBuku", function (req, res, next) {
  res.render("Mhs/LihatBuku", { title: "Login" });
});

router.get("/PerpanjangPeminjaman", function (req, res, next) {
  res.render("Mhs/PerpanjangPeminjaman", { title: "Login" });
});

router.get("/RiwayatPeminjaman", function (req, res, next) {
  res.render("Mhs/RiwayatPeminjaman", { title: "Login" });
});



router.get("/DataBuku", function (req, res, next) {
  res.render("admin/DataBuku", { title: "Login" });
});

router.get("/TambahBuku", function (req, res, next) {
  res.render("admin/TambahBuku", { title: "Login" });
});

router.get("/KategoriBuku", function (req, res, next) {
  res.render("admin/KategoriBuku", { title: "Login" });
});

router.get("/ProfileAdmin", function (req, res, next) {
  res.render("admin/ProfileAdmin", { title: "Login" });
});

router.get("/ListPeminjaman", function (req, res, next) {
  res.render("admin/ListPeminjaman", { title: "Login" });
});

router.get("/ListPengembalian", function (req, res, next) {
  res.render("admin/ListPengembalian", { title: "Login" });
});

router.get("/ListPerpanjangan", function (req, res, next) {
  res.render("admin/ListPerpanjangan", { title: "Login" });
});
module.exports = router;
