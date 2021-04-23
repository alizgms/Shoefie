const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

// Middleware
const validarCliente = require('../middlewares/ValidarCliente');

router.get('/', loginController.index);
router.post('/', validarCliente, loginController.create);

module.exports = router;
