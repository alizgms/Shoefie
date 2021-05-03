const express = require('express');
const produtosController = require('../controllers/produtosController');
const router = express.Router();

router.get('/', produtosController.index);
router.delete('/:id', produtosController.delete);
router.post('/', produtosController.store);

module.exports = router;
