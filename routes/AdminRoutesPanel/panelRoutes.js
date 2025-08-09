const express = require('express');
const router = express.Router();
const panelController = require('../../controller/AdminControlerPanel/panelController')
const auth = require('../../middleware/auth');

// Buradan itibaren tüm rotalar korunur
router.use(auth);

router.get('/', panelController.getPanel);

// Ürün Ekle
router.post('/chefmenu-ekle', panelController.postChefmenuEkle);
router.post('/fullmenu-ekle', panelController.postFullmenuEkle);
router.post('/gallerionemenu-ekle', panelController.postGalleriOneEkle);
router.post('/todaymenu-ekle', panelController.postTodaymenuEkle);


// Ürün Güncelle
router.post('/chefmenu/:id/guncelle', panelController.postChefmenuGuncelle);
router.post('/fullmenu/:id/guncelle', panelController.postFullmenuGuncelle);
router.post('/gallerionemenu/:id/guncelle', panelController.postGalleriOneGuncelle);
router.post('/todaymenu/:id/guncelle', panelController.postTodaymenuGuncelle);


// Ürün Sil
router.post('/chefmenu/:id/sil', panelController.postChefmenuSil);
router.post('/fullmenu/:id/sil', panelController.postFullmenuSil);
router.post('/gallerionemenu/:id/sil', panelController.postGalleriOneSil);
router.post('/todaymenu/:id/sil', panelController.postTodaymenuSil);

module.exports = router;