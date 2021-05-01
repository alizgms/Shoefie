const express = require('express');
const cadastrosController = require('../controllers/cadastrosController');
const router = express.Router();

router.get('/', cadastrosController.register);
// router.get('/', cadastrosController.index);
router.post('/', cadastrosController.store);

module.exports = router;
