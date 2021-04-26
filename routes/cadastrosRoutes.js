const express = require('express');
const cadastrosController = require('../controllers/cadastrosController');
const router = express.Router();

router.get('/', cadastrosController.index);
router.post('/', cadastrosController.create);

module.exports = router;
