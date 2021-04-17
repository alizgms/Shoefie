const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.index);
router.post('/', produtosController.create);

module.exports = router;
