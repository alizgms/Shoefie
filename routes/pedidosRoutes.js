const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const router = express.Router();

router.get('/', pedidosController.show);
router.post('/', pedidosController.create);

module.exports = router;
