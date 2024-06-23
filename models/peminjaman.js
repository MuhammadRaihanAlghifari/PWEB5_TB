const { Sequelize, DataTypes } = require('sequelize');
// Model Peminjaman
module.exports = (sequelize, DataTypes) => {
  const Peminjaman = sequelize.define('Peminjaman', {
    id_peminjaman: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    Id_Admin: DataTypes.INTEGER,
    Tanggal_Pengajuan: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW}
  }, {
    tableName: 'Peminjaman',
    timestamps: false
  });

  return Peminjaman;
};
