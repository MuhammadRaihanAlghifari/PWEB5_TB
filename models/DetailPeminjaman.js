const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Detail_Peminjaman = sequelize.define(
    "Detail_Peminjaman",
    {
      Id_Peminjaman: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "Peminjaman",
            key: "Id_Peminjaman",
          },
      },
      Kode_Buku: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Buku",
          key: "Kode_Buku",
        },
      },
      tanggal_peminjaman: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      Durasi_Peminjaman: DataTypes.INTEGER,
      Tanggal_Jatuh_Tempo: DataTypes.DATE,
      Tanggal_Pengembalian: DataTypes.DATE,
      Denda: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );
  return Detail_Peminjaman;
};
