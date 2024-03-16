/* This model is used to define the structure of the authors table in the database. 
It has a one-to-many relationship with the books table. */

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    // Helper method for defining associations
    static associate(models) {
      // Associations can be defined here
      authors.hasMany(models.books, {
        foreignKey: 'authorID'
      });
    }
  }
  authors.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    biography: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'authors',
  });
  return authors;
};