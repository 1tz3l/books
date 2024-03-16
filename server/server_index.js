const express = require('express');
const { router: authorRouter } = require('./routers/author');
const { router: publicationYearRouter } = require('./routers/publicationYear');
const { router: booksRouter } = require('./routers/books');

const libros = express();
libros.use(express.json());

//Array of routers 
const routers = [authorRouter, publicationYearRouter, booksRouter];

// Use each router in the array
routers.forEach((router) => {
    libros.use(router);
});

module.exports = { libros };