/* This model is used to define the structure of the publicationYear table in the database. 
It has a many-to-many relationship with the books table. */

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publicationYear extends Model {
    // Helper method for defining associations
    static associate(models) {
      //  Associations can be defined here
      publicationYear.hasMany(models.books, {
        foreignKey: 'publicationYearID'
      });
    }
  }
  publicationYear.init({
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'publicationYear',
    freezeTableName: true // This line prevents Sequelize from pluralizing the table name
  });
  return publicationYear;
};