const express = require('express');
const produtosController = require('../controllers/produtosController');
const router = express.Router();

router.get('/', produtosController.index);
router.post('/', produtosController.create);

module.exports = router;
