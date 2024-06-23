const bcrypt = require('bcrypt');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', [{
        email: 'agif@student.unand.ac.id',
        nama: 'agif',
        id: '2211522031',
        hp: '081298076037',
        password: await bcrypt.hash('agif',10),
        departement:'Sistem Informasi',
        alamat:'Kapalo koto',
        role:'mahasiswa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'admin@gmail.com',
        nama: 'admin',
        password: await bcrypt.hash('admin',10),
        departement:'administrasi',
        role:'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
       }
   
   
   ],{});
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
