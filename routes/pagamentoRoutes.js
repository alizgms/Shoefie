const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

router.get('/', pagamentoController.index);
router.post('/', pagamentoController.create);

module.exports = router;
