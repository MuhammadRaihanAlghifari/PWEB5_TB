const { Peminjaman, Detail_Peminjaman, Buku, User } = require("../models");

exports.getRiwayatPeminjaman = async (req, res) => {
  const { email } = req.body;
  try {
    const foundUser = await User.findOne({ where: { email } });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all loan records for the current user
    const peminjamanRecords = await Detail_Peminjaman.findAll({
      model: Detail_Peminjaman,
      include: [
        {
          model: Buku,
          attributes: ["Judul_Buku"],
        },
      ],
    });

    // Render the 'RiwayatPeminjaman' view with the fetched data
    res.render("RiwayatPeminjaman", { peminjamanRecords });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};
