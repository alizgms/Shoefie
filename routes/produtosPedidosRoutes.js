const express = require('express');
const produtosPedidosController = require('../controllers/produtosPedidosController');
const router = express.Router();

// middleware
const loginAuthenticate = require('../middlewares/LoginAuthenticate');

router.use(loginAuthenticate);

router.delete('/:id', produtosPedidosController.delete);

// carrinho add produto
router.get('/', produtosPedidosController.indexCarrinho);
router.get('/all', produtosPedidosController.index);
router.post('/', produtosPedidosController.store);

module.exports = router;
