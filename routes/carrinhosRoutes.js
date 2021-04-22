const express = require('express');
const carrinhosController = require('../controllers/carrinhosController');
const router = express.Router();

router.get('/:id', carrinhosController.show);
router.post('/', carrinhosController.create);

module.exports = router;
