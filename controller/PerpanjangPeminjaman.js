const { Peminjaman, Detail_Peminjaman } = require('../models');

exports.extendLoan = async (req, res) => {
  const { Id_Peminjaman, kode_Buku, PerpanjangPeminjaman } = req.body;

  try {
    // Find the Detail_Peminjaman record
    const detailPeminjaman = await Detail_Peminjaman.findOne({ where: { Id_Peminjaman, kode_Buku } });

    if (!detailPeminjaman) {
      return res.status(404).json({ message: 'Detail Peminjaman not found' });
    }

    // Update the Durasi_Peminjaman
    detailPeminjaman.Durasi_Peminjaman += PerpanjangPeminjaman*1;

    // Recalculate the due date
    const tanggalPeminjaman = new Date();
    const dueDate = new Date(tanggalPeminjaman);
    dueDate.setDate(tanggalPeminjaman.getDate() + parseInt(detailPeminjaman.Durasi_Peminjaman));


    // Update the Tanggal_Jatuh_Tempo
    detailPeminjaman.Tanggal_Jatuh_Tempo = dueDate;
    await detailPeminjaman.save();

    res.status(200).json({ message: 'Loan duration extended successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};
