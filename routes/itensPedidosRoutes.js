const express = require('express');
const itensPedidosController = require('../controllers/itensPedidosController');
const router = express.Router();

router.get('/', itensPedidosController.index);
router.post('/', itensPedidosController.create);

module.exports = router;
