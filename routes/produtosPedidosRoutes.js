const express = require('express');
const produtosPedidosController = require('../controllers/produtosPedidosController');
const router = express.Router();

router.get('/:id', produtosPedidosController.carrinho);

router.get('/', produtosPedidosController.index);
router.post('/', produtosPedidosController.store);

module.exports = router;
