const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sibaca", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
