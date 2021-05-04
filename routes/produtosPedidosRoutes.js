const express = require('express');
const produtosPedidosController = require('../controllers/produtosPedidosController');
const router = express.Router();

router.delete('/:id', produtosPedidosController.delete);

// carrinho add produto
router.get('/', produtosPedidosController.indexCarrinho);

router.get('/all', produtosPedidosController.index);
router.post('/:id', produtosPedidosController.store);

module.exports = router;
