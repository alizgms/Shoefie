const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// Middlewares
const validarUsuario = require('../middlewares/ValidarUsuario');

router.get('/login', usuariosController.login);
router.post('/login', usuariosController.auth);
router.post('/', validarUsuario, usuariosController.store);
router.delete('/:id', usuariosController.delete);

module.exports = router;
