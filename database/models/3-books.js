/* This model is used to define the structure of the books table in the database.
It has a many-to-one relationship with the authors table 
and a many-to-many relationship with the publicationYear table. */

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    // Helper method for defining associations
    static associate(models) {
      //  Associations can be defined here
      books.belongsTo(models.authors, {
        foreignKey: 'authorID'
      });
      books.belongsTo(models.publicationYear, {
        foreignKey: 'publicationYearID'
      });
    }
  }
  books.init({
    authorID: DataTypes.INTEGER,
    publicationYearID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    numberOfPages: DataTypes.INTEGER,
    ISBN: DataTypes.STRING,
    language: DataTypes.STRING,
    publicationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};