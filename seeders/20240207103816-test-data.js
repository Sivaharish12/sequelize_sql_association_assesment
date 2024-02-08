'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('userSubscriptions',[{
      id:1,
      app_id:1,
      user_id:120,
      sub_id:null,
      type:'all',
      subscribed:'f',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:2,
      app_id:2,
      user_id:120,
      sub_id:1,
      type:'sub',
      subscribed:'t',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:1,
      app_id:1,
      user_id:121,
      sub_id:null,
      type:'all',
      subscribed:'f',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:2,
      app_id:3,
      user_id:121,
      sub_id:1,
      type:'sub',
      subscribed:'t',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      id:1,
      app_id:1,
      user_id:122,
      sub_id:null,
      type:'all',
      subscribed:'t',
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
