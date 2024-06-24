module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
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
    }, {
      timestamps: false
    });
    return users;
  };