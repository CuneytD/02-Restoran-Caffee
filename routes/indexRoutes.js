const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

router.get( ['/', '/index' ], indexController.renderHome );

module.exports = router;