// Description: Main file for the application
const { PORT } = require('./config/config')
const { database } = require('./config/database-config')
const { libros } = require('./server/server_index')

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