const express = require('express')
const libros = express()
const { PORT } = require('./src/config/config')
const { database } = require('./src/config/database-config')


database.authenticate().then( () => {
  console.log('Connection to the database has been established successfully.')
  libros.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
  })
});