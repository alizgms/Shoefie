const express = require('express');
const produtosPedidosController = require('../controllers/produtosPedidosController');
const router = express.Router();

router.get('/:id', produtosPedidosController.carrinho);
router.get('/all', produtosPedidosController.index);
router.post('/:id', produtosPedidosController.store);

module.exports = router;
