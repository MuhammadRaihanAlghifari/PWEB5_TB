const { Buku, Peminjaman, Detail_Peminjaman } = require('../models');

exports.returnBook = async (req, res) => {
  const { kode_Buku, Id_Peminjaman } = req.body;

  try {
    // Find the Detail_Peminjaman record
    const detailPeminjaman = await Detail_Peminjaman.findOne({ where: { kode_Buku, Id_Peminjaman } });

    if (!detailPeminjaman) {
      return res.status(404).json({ message: 'Data Detail Peminjaman not found' });
    }

    // Update the return date
    detailPeminjaman.Tanggal_Pengembalian = new Date();
    await detailPeminjaman.save();

    // Increase the book stock
    const book = await Buku.findOne({ where: { kode_Buku } });
    if (book) {
      book.Stok_Buku += 1;
      await book.save();
    }

    res.status(200).json({ message: 'Book returned successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};
