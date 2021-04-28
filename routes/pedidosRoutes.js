const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const router = express.Router();

router.get('/', pedidosController.index);
router.post('/', pedidosController.store);

module.exports = router;
