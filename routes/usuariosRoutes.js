const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// Middlewares
const validarUsuario = require('../middlewares/ValidarUsuario');
const loginAuthenticate = require('../middlewares/LoginAuthenticate');

// logoff
router.get('/logoff', usuariosController.logoff);
// login
router.get('/login', usuariosController.login);
// tela cadastro
router.get('/signup', usuariosController.signup);
// cadastrar
router.post('/register', validarUsuario, usuariosController.store);
// autentica usuario
router.post('/login', usuariosController.auth);

router.use(loginAuthenticate);
router.get('/profile', usuariosController.profile);
router.delete('/', usuariosController.delete);
router.put('/', usuariosController.edit);

module.exports = router;
