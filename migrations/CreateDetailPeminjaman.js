"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DetailPeminjaman", {
        id_peminjaman: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: 'Peminjaman',
              key: 'id_peminjaman'
            }  
          },
          kode_buku: {
            type: Sequelize.STRING,
            primaryKey: true,
            references: {
              model: 'Buku',
              key: 'kode_buku'
            }
            
          },
          tanggal_peminjaman: {
            type: Sequelize.DATE,
            allowNull: false
          },
          durasi_peminjaman: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          tanggal_jatuh_tempo: {
            type: Sequelize.DATE,
            allowNull: false
          },
          tanggal_pengembalian: {
            type: Sequelize.DATE,
            allowNull: true
          },
          denda: {
            type: Sequelize.INTEGER,
            allowNull: true
          },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DetailPeminjaman");
  },
};
