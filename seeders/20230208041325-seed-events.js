'use strict';

const eventsData = require('../data/eventsData');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    eventsData.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el
    });
    await queryInterface.bulkInsert('Events', eventsData, {});
    // console.log(eventsData, "events");
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
