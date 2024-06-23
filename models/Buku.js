// models/KategoriBuku.js
module.exports = (sequelize, DataTypes) => {
  const KategoriBuku = sequelize.define(
    "KategoriBuku",
    {
      Id_Kategori: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nama_Kategori: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return KategoriBuku;
};

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
  return Buku;
};

// Repeat for other models (users, Admin, Peminjaman, DetailPeminjaman)
