const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const router = express.Router();

// middleware
// const loginAuthenticate = require('../middlewares/LoginAuthenticate');

// router.use(loginAuthenticate);
router.get('/shipping', pedidosController.shippingDetail);
router.post('/', pedidosController.store);

module.exports = router;
