'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[{
      id:120,
      name:'hari',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id:121,
      name:'hp',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id:122,
      name:'hrp',
      createdAt:new Date(),
      updatedAt:new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
