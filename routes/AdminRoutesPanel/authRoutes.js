const express = require('express');
const router = express.Router();
const authController = require('../../controller/AdminControlerPanel/authController');


// kayıt 

router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

// Giriş

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Koruma



// Çıkış
router.get('/logout', authController.logout);

module.exports = router;
