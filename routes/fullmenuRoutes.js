const express = require('express');
const router = express.Router();
const fullmenuController = require('../controller/fullmenuController');

router.get([ '/' ], fullmenuController.renderFullMenu);

module.exports = router;