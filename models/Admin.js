module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define(
      "Admin",
      {
        Id_Admin: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
          Email: {
            type : DataTypes.STRING,
            unique: true,
            allowNull: false
          },
          Nama_Admin: DataTypes.STRING,
          Alamat_Admin: DataTypes.STRING,
          No_HP_Admin: DataTypes.STRING,
          Password: DataTypes.STRING,
          Role: DataTypes.STRING,
      },
      {
        timestamps: false,
      }
    );
    return Admin;
  };