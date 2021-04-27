const express = require('express');
const produtosPedidosController = require('../controllers/produtosPedidosController');
const router = express.Router();

router.get('/', produtosPedidosController.index);
router.post('/', produtosPedidosController.store);

module.exports = router;
