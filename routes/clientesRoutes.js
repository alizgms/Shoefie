const express = require('express');
const clientesController = require('../controllers/clientesController');
const router = express.Router();

router.get('/', clientesController.index);
router.post('/', clientesController.create);

module.exports = router;
