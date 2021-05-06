const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const router = express.Router();

// middleware
const loginAuthenticate = require('../middlewares/LoginAuthenticate');

router.use(loginAuthenticate);
// Acompanhar envio
router.get('/shipping', pedidosController.shippingDetail);
// Finalizar pagamento
router.get('/checkout', pedidosController.checkout);
router.post('/', pedidosController.store);

module.exports = router;
