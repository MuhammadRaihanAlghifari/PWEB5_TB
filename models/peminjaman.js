"use strict";
const { Model } = require("sequelize");
const sequelize = require('../database');

module.exports = (sequelize, DataTypes) => {
  class Peminjaman extends Model {
    static associate(models) {
        Peminjaman.belongsTo(models.User,{
          foreignKey : 'id_user'
        });
        // Permintaan.belongsTo(models.Surat,{
        //   foreignKey : 'kode_surat'
        // })
      }
  }
  Peminjaman.init(
    { id_peminjaman: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      id_user: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "users",
          key: "email",
        },
      },
      id_admin: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   model: "admin",
        //   key: "id_admin",
        // },
      },
      tanggal_pengajuan: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "Peminjaman",
    }
  );
  return Peminjaman;
};