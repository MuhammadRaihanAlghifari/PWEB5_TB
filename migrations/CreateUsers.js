'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        
      },
      id: {
        type: Sequelize.STRING,
        unique: true
      },
      nama: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING
      },
      departement: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};