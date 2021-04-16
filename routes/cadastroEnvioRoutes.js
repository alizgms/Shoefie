const express = require('express');
const router = express.Router();
const cadastroEnvioController = require('../controllers/cadastroEnvioController');

router.get('/', cadastroEnvioController.index);
router.post('/', cadastroEnvioController.create);
router.get('/:id', cadastroEnvioController.show);

module.exports = router;
