// This file is used to seed the database with some initial data

'use strict';

const authorsData = [
  {
    id: 1,
    firstName: 'Paul',
    lastName: 'Dowswell',
    biography: 'Paul writes award-winning historical fiction for young adults. His novels are sold throughout the English speaking world and have been published in an additional ten languages. Paul is also a prolific writer of non-fiction for children with over seventy titles to his name.'
  },
  {
    id: 2,
    firstName: 'Dante',
    lastName: 'Alighieri',
    biography: 'Italian poet, prose writer, literary theorist, moral philosopher, and political thinker. He is best known for the monumental epic poem La commedia, later named La divina commedia (The Divine Comedy).'
  }
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
