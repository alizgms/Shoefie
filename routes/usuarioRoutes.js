const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

router.get('/', usuarioController.index);
router.post('/', usuarioController.store);
// router.post('/connect', loginController.login);

module.exports = router;
