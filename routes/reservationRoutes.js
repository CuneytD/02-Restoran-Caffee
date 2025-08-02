const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');

router.get([ '/' ], reservationController.renderReservation);


module.exports = router;