const express = require('express');
const produtoCategoria = require('../controllers/produtosCategoriasController');
const router = express.Router();

router.get('/', produtoCategoria.index);
router.post('/', produtoCategoria.store);

module.exports = router;
