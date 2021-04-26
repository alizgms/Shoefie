const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const router = express.Router();

// router.get('/:id', pedidosController.show);
router.get('/', pedidosController.index);
router.post('/', pedidosController.create);

module.exports = router;
