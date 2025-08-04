const db = require('../data/db');
const Gallerione = require('../models/gallerione');



exports.renderGallery = (req, res) => {
    db.all('SELECT * FROM gallerione', (err, gallerione) => {
        if(err) return res.status(500).send('Database Error (gallerione)');   

        res.render('gallery', { gallerione });
    });    
};
