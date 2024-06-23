"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Buku", {
        kode_buku: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
          },
          judul_buku: {
            type: Sequelize.STRING,
            allowNull: false
          },
          penulis: {
            type: Sequelize.STRING,
            allowNull: false
          },
          pengarang: {
            type: Sequelize.STRING,
            allowNull: false
          },
          tahun_terbit: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          stok_buku: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          id_kategori: {
            type: Sequelize.INTEGER,
            references: {
              model: 'KategoriBuku',
              key: 'id_kategori'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Buku");
  },
};
