"use strict";
const { Model } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Peminjaman, {
        foreignKey: 'id_user'
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      id: {
        type : DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      nama: DataTypes.STRING,
      password: DataTypes.STRING,
      departement: DataTypes.STRING,
      hp: DataTypes.STRING,
      alamat: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};