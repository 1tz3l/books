const express = require('express')
const libros = express()
const { PORT } = require('./src/config/config')
const { database } = require('./src/config/database-config')


try {
  database.authenticate().then(() => {
    console.log('Connection to the database has been established successfully.');
    libros.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}