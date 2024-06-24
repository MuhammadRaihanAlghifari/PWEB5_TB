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