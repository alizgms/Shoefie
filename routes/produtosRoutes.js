const express = require('express');
const produtosController = require('../controllers/produtosController');
const router = express.Router();

// middleware
const loginAuthenticate = require('../middlewares/LoginAuthenticate');

// router.get('/', produtosController.index);
router.delete('/:id', produtosController.delete);
router.post('/', produtosController.store);
router.use(loginAuthenticate);

module.exports = router;
