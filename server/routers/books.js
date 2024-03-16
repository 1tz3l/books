const { addBook, updateBook, deleteBook } = require('../controllers/books_controller');
const Router = require('express');
const router = Router();

router.route('/books').post(addBook);
router.route('/books/:booksID').put(updateBook).delete(deleteBook);

module.exports = {router};