const express = require('express');
const categoriasController = require('../controllers/categoriasController');
const router = express.Router();

router.get('/', categoriasController.index);
router.post('/', categoriasController.store);

module.exports = router;
