"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("KategoriBuku", {
        id_kategori: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          nama_kategori: {
            type: Sequelize.STRING,
            allowNull: false
          },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("KategoriBuku");
  },
};
