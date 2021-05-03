const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// Middlewares
const validarUsuario = require('../middlewares/ValidarUsuario');

router.get('/', usuariosController.index);
router.get('/login', usuariosController.login);
router.get('/signup', usuariosController.signup);
router.get('/profile', usuariosController.profile);
router.post('/auth', validarUsuario, usuariosController.store);

router.post('/login', usuariosController.auth);
router.delete('/:id', usuariosController.delete);

module.exports = router;
