const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const validarUsuario = require('../middlewares/ValidarCliente');
const router = express.Router();

router.get('/', usuariosController.index);
router.post('/login', usuariosController.login);
router.post('/', validarUsuario, usuariosController.store);

module.exports = router;
