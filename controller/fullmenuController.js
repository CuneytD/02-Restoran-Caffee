const db = require('../data/db');

exports.renderFullMenu = (req, res) => {
    db.all('SELECT * FROM fullmenu', (err, fullmenu) => {
        if (err) return res.status(500).send('Veritabanı Hatası (Fullmenu)');
              
        res.render('menu', { fullmenu });
    });
}