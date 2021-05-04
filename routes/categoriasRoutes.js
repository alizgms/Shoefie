const express = require('express');
const categoriasController = require('../controllers/categoriasController');
const router = express.Router();

// middleware
const loginAuthenticate = require('../middlewares/LoginAuthenticate');

router.get('/produtos',loginAuthenticate, categoriasController.index);

router.post('/', categoriasController.store);

module.exports = router;
