const { addAuthor, updateAuthor, deleteAuthor } = require('../controllers/author_controller');
const Router = require('express');
const router = Router();

router.route('/authors').post(addAuthor).get(getAuthors);
router.route('/authors/:authorsID').put(updateAuthor).delete(deleteAuthor);

module.exports = {router};