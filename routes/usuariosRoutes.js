const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const validarUsuario = require('../middlewares/ValidarCliente');
const router = express.Router();

router.get('/login', usuariosController.index);
router.post('/login', usuariosController.auth);
router.post('/', validarUsuario, usuariosController.store);
router.delete('/:id', usuariosController.delete);

module.exports = router;
