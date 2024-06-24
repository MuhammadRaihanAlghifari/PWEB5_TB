const { Buku, Peminjaman, Detail_Peminjaman, sequelize } = require('../models');

exports.returnBook = async (req, res) => {
  const { kode_Buku, email } = req.body;

  const transaction = await sequelize.transaction();
  try {
    // Cari transaksi peminjaman yang sesuai dengan kode buku dan email
    const detailPeminjaman = await Detail_Peminjaman.findOne({
      where: { Kode_Buku: kode_Buku },
      include: [{
        model: Peminjaman,
        where: { email: email }
      }]
    }, { transaction });

    if (!detailPeminjaman) {
      await transaction.rollback();
      return res.status(404).json({ message: 'Transaction not found' });
    }

    // Update tanggal pengembalian pada transaksi peminjaman
    detailPeminjaman.Tanggal_Pengembalian = new Date();
    await detailPeminjaman.save({ transaction });

    // Tambah stok buku
    const book = await Buku.findOne({ where: { Kode_Buku: kode_Buku } }, { transaction });

    if (!book) {
      await transaction.rollback();
      return res.status(404).json({ message: 'Book not found' });
    }

    book.Stok_Buku += 1;
    await book.save({ transaction });

    await transaction.commit();
    res.status(200).json({ message: 'Book returned successfully' });
  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};
