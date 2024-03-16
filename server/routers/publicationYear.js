const { addYear, updateYear, deleteYear } = require('../controllers/publicationYear_controller');
const Router = require('express');
const router = Router();

router.route('/publication_year').post(addYear);
router.route('/publication_year/:yearsID').put(updateYear).delete(deleteYear);

module.exports = {router};