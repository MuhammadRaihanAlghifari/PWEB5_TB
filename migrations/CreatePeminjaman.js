"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("peminjaman", {
      id_peminjaman: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email_user: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "users",
          key: "email"
        }
      },
      id_admin: {
        type: Sequelize.STRING,
        // references: {
        //   model: "admin",
        //   key: "id_admin",
        // },
      },
      tanggal_pengajuan: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("peminjaman");
  },
};
