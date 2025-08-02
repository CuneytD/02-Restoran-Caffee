const express = require('express');
const router = express.Router();
const fotoGalleryController = require('../controller/fotoGalleryController');

router.get('/', fotoGalleryController.renderGallery);


module.exports = router;