// models/Buku.js
module.exports = (sequelize, DataTypes) => {
  const Buku = sequelize.define(
    "Buku",
    {
      Kode_Buku: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Judul_Buku: DataTypes.STRING,
      Penulis: DataTypes.STRING,
      Pengarang: DataTypes.STRING,
      Tahun_Terbit: DataTypes.INTEGER,
      Stok_Buku: DataTypes.INTEGER,
      Id_Kategori: {
        type: DataTypes.INTEGER,
        references: {
          model: "KategoriBuku",
          key: "Id_Kategori",
        },
      },
    },
    {
      timestamps: false,
    }
  );
  Buku.associate = (models) => {
    Buku.hasMany(models.Detail_Peminjaman, {
      foreignKey: 'Kode_Buku',
      sourceKey: 'Kode_Buku',
    });
  };
  return Buku;
};

// Repeat for other models (users, Admin, Peminjaman, DetailPeminjaman)
