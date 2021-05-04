const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// Middlewares
const validarUsuario = require('../middlewares/ValidarUsuario');
const loginAuthenticate = require('../middlewares/ValidarUsuario');

router.post('/logoff', usuariosController.logoff);
router.get('/', usuariosController.index);
router.get('/login', usuariosController.login);
router.get('/signup', usuariosController.signup);
router.post('/auth', validarUsuario, usuariosController.store);

router.get('/profile', loginAuthenticate, usuariosController.profile);
router.post('/login', usuariosController.auth);
router.delete('/:id', usuariosController.delete);

module.exports = router;
