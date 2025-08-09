const sqlite3 = require('sqlite3').verbose();
const Todaymenu = require('../models/todaymenu');
const Chefmenu = require('../models/chefmenu');
const Fullmenu = require('../models/fullmenu');
const GalleryOne = require('../models/gallerione');


// Menu için data base oluşturma 
const db = new sqlite3.Database('menu.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS todaymenu (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, price REAL NOT NULL, description TEXT, imageUrl TEXT, isHome BOOLEAN DEFAULT 1, isActive BOOLEAN DEFAULT 1)');

    db.run('CREATE TABLE IF NOT EXISTS chefmenu (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, price REAL NOT NULL, description TEXT, imageUrl TEXT, isHome BOOLEAN DEFAULT 1, isActive BOOLEAN DEFAULT 1)');

    db.run('CREATE TABLE IF NOT EXISTS fullmenu (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, price REAL NOT NULL, description TEXT, imageUrl TEXT, isHome BOOLEAN DEFAULT 1, isActive BOOLEAN DEFAULT 1)');

     db.run('CREATE TABLE IF NOT EXISTS gallerione (id INTEGER PRIMARY KEY AUTOINCREMENT, imageUrl1 TEXT, imageUrl2 TEXT, imageUrl3 TEXT, imageUrl4 TEXT, imageUrl5 TEXT, isHome BOOLEAN DEFAULT 1, isActive BOOLEAN DEFAULT 1)');

    

});


module.exports = db;