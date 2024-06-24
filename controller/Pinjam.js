const { Buku, Peminjaman, Detail_Peminjaman, sequelize } = require("../models");

exports.borrowBook = async (req, res) => {
  const { email, kode_Buku, Id_Admin, durasiPeminjaman } = req.body;

  const transaction = await sequelize.transaction();
  try {
    // Check if the book is available
    const book = await Buku.findOne({ where: { Kode_Buku: kode_Buku } }, { transaction });

    if (!book || book.Stok_Buku < 1) {
      await transaction.rollback();
      return res.status(400).json({ message: "Book not available" });
    }

    // Decrease the stock
    book.Stok_Buku -= 1;
    await book.save({ transaction });

    // Create a new Peminjaman record
    const peminjaman = await Peminjaman.create(
      {
        email,
        Id_Admin: Id_Admin,
        Tanggal_Pengajuan: new Date(),
      },
      { transaction }
    );

    // Pastikan nama properti yang sesuai diakses pada objek peminjaman
    const peminjamanId = peminjaman.id_peminjaman; // Sesuaikan dengan nama kolom yang benar

    if (!peminjamanId) {
      await transaction.rollback();
      return res.status(500).json({ message: "Failed to create Peminjaman" });
    }

    // Calculate the due date
    const tanggalPeminjaman = new Date();
    const dueDate = new Date(tanggalPeminjaman);
    dueDate.setDate(tanggalPeminjaman.getDate() + parseInt(durasiPeminjaman));

    // Create a new Detail_Peminjaman record
    await Detail_Peminjaman.create(
      {
        Id_Peminjaman: peminjamanId, // Menggunakan nama properti yang sesuai
        Kode_Buku: kode_Buku,
        Tanggal_Peminjaman: new Date(),
        Durasi_Peminjaman: durasiPeminjaman,
        Tanggal_Jatuh_Tempo: dueDate,
        Denda: 0,
      },
      { transaction }
    );

    await transaction.commit();
    res.status(200).json({ message: "Buku Berhasil Dipinjam dengan Kode peminjaman : " + peminjamanId + " (catat kode untuk melakukan Pengembalian)" });
  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};
