const sqlite3 = require ('sqlite3').verbose();
const Module = require('module');
const path = require ('path');

const dbPath = path.resolve(__dirname, 'users.db');

const db1 = new sqlite3.Database(dbPath, (err) => {
    if(err) {
        console.error(err);
        return res.statu(500).send('Veri Tabanı Bağlantı Hatası.');
    }
    else{
        console.log('Veri tabanına Bağlanıldı Users');
    }
});

db1.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT)');

module.exports = db1;
