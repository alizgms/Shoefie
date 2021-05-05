const express = require('express');
const cadastrosController = require('../controllers/cadastrosController');
const router = express.Router();

// middleware
const LoginAuthenticate = require('../middlewares/LoginAuthenticate');

router.use(LoginAuthenticate);
router.get('/address', cadastrosController.cadastroEndereco);
router.get('/', cadastrosController.index);
router.post('/', cadastrosController.store);

module.exports = router;
