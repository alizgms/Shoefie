const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.get('/', loginController.index);
router.post('/', loginController.create);

module.exports = router;
