const db = require('../data/db');
const GalleryOne = require('../models/galleryOne');



exports.renderGallery = (req, res) => {
    db.all('SELECT * FROM galleryOne', (err, galleryOne) => {
        if(err) return res.status(500).send('Database Error (galleryOne)');   

        res.render('gallery', { galleryOne });
    });    
};
