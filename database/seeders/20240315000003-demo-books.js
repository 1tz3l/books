// This file is used to seed the database with some initial data

'use strict';

const booksData = [
  {
    authorID: 1,
    publicationYearID: 1, //2010
    title: 'Ausländer',
    description: "Cuando sus padres mueren, Peter es enviado a un orfanato de Varsovia. Pero Peter es un Volksdeutscher: de sangre alemana. Gracias a sus cabellos rubios y sus ojos azules, es el perfecto prototipo de las Juventudes Hitlerianas. Empieza a formarse sus propias ideas: él no quiere ser un nazi, así que correrá un riesgo.",
    numberOfPages: 313,
    ISBN: '978-8466641340', 
    language: 'Español',
    publicationDate: '2010-01-01'
  },
  {
    authorID: 2,
    publicationYearID: 2, //1320
    title: 'La Divina Commedia',
    description: "La Divina Commedia es una de las obras maestras de la literatura italiana y universal. Es una de las obras fundamentales de la transición del pensamiento medieval al renacentista. La obra está dividida en tres partes: Infierno, Purgatorio y Paraíso.",
    numberOfPages: 432,
    ISBN: '978-8420682884',
    language: 'Español',
    publicationDate: '1320-01-01'
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
