const db = require('../data/db')


exports.renderHome = (req,res) => {
    db.all('SELECT * FROM todaymenu', (err,todaymenu) => {
        if(err) return res.status(500).send('Veritabanı Hatası (todaymenu)');

    db.all('SELECT * FROM chefmenu', (err2, chefmenu) => {
        if(err2) return res.status(500).send('Veritaban Hatası (Chefmenu)');

        res.render('index', {todaymenu, chefmenu });
    });
    });    
};