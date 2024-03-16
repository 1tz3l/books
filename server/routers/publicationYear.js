const { addYear, updateYear, deleteYear } = require('../controllers/publicationYear_controller');
const Router = require('express');
const router = Router();

router.route('/publicationYear').post(addYear);
router.route('/publicationYear/:publicationYearID').put(updateYear).delete(deleteYear);

module.exports = {router};