const db = require('../../data/db');
const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();

router.use(auth);

exports.getPanel = (req, res) => {
  
  
  
  db.all('SELECT * FROM chefmenu', (err, chefmenu) => {
    if (err) return res.status(500).send('Veritabanı hatası (chefmenu)');

    db.all('SELECT * FROM fullmenu', (err, fullmenu) => {
    if (err) return res.status(500).send('Veritabanı hatası (fullmenu)');
    
     db.all('SELECT * FROM gallerione', (err, gallerione) => {
    if (err) return res.status(500).send('Veritabanı hatası (gallerione)');

    db.all('SELECT * FROM todaymenu', (err, todaymenu) => {
    if (err) return res.status(500).send('Veritabanı hatası (todaymenu)');

    res.render('panel', { chefmenu, todaymenu, fullmenu, gallerione });
  });
  });
  });
  });
}


// ----- ürün ekle ----
// chefmenu
exports.postChefmenuEkle = (req, res) => {
  const { name, price, description, imageUrl, isHome, isActive } = req.body;

  if(!name || !name.trim()) {
    return res.status(500).send('Lütfen Geçerli Bir isim Giriniz');
  }
  
  if(!price || isNaN(price) || Number(price) <= 0) {
    return res.status(500).send('Lütfen Geçerli Bir Fiyat Giriniz');
  };

  db.run(
    `INSERT INTO chefmenu (name, price, description, imageUrl, isHome, isActive) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, price, description, imageUrl, isHome ? 1 : 0, isActive ? 1 : 0],
    function (err) {
      if (err) {
        return res.status(500).send('Kayıt eklenirken bir hata oluştu');  
      }
      res.redirect('/panel');
    });
}

// fullmenu
exports.postFullmenuEkle = (req, res) => {
  const { name, price, description, imageUrl, isHome, isActive } = req.body;

  if(!name || !name.trim()) {
    return res.status(500).send('Lütfen Geçerli Bir isim Giriniz');
  }
  
  if(!price || isNaN(price) || Number(price) <= 0) {
    return res.status(500).send('Lütfen Geçerli Bir Fiyat Giriniz');
  };

  db.run(
    `INSERT INTO fullmenu (name, price, description, imageUrl, isHome, isActive) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, price, description, imageUrl, isHome ? 1 : 0, isActive ? 1 : 0],
    function (err) {
      if (err) {
        return res.status(500).send('Kayıt eklenirken bir hata oluştu');  
      }
      res.redirect('/panel');
    });
}

// gallerionemenu
exports.postGalleriOneEkle = (req, res) => {
    const { imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, isHome, isActive } = req.body;
     
        
    db.run(
      `INSERT INTO gallerione (imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, isHome, isActive) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, isHome ? 1 : 0, isActive ? 1 : 0],
      function (err) {
        if (err) {
            console.error(err);
            return res.status(500).send('Kayıt eklenirken bir hata oluştu');  
        }
        res.redirect('/panel');
    });
};

// todaymenu
exports.postTodaymenuEkle = (req, res) => {
  const { name, price, description, imageUrl, isHome, isActive } = req.body;

  if(!name || !name.trim()) {
    return res.status(500).send('Lütfen Geçerli Bir isim Giriniz');
  }
  
  if(!price || isNaN(price) || Number(price) <= 0) {
    return res.status(500).send('Lütfen Geçerli Bir Fiyat Giriniz');
  };

  
  db.run(
    `INSERT INTO todaymenu (name, price, description, imageUrl, isHome, isActive) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, price, description, imageUrl, isHome ? 1 : 0, isActive ? 1 : 0],
    function (err) {
        console.log(err);
      if (err) {
        return res.status(500).send('Kayıt eklenirken bir hata oluştu');  
    }
    res.redirect('/panel');
    });
};


// ---------  Ürün Güncelle  -----------

// Cheffmenu
exports.postChefmenuGuncelle = (req,res) => {
    const { id } = req.params;
    const { name, price, description, imageUrl, isHome, isActive } = req.body;
    db.run( 
      `UPDATE chefmenu SET name=?, price=?, description=?, imageUrl=?, isHome=?, isActive=? WHERE id=?`,
      [name, price, description, imageUrl, isHome ? 1 : 0, isActive ? 1 : 0, id],
      function (err) {
        if (err) {
          return res.status(500).send('Güncelleme Sırasında Hata Oluştu');    
        }
        res.redirect('/panel');
      });
}

// Fullmenu
exports.postFullmenuGuncelle = (req,res) => {
    const { id } = req.params;
    const { name, price, description, imageUrl, isHome, isActive } = req.body;
    db.run( 
      `UPDATE fullmenu SET name=?, price=?, description=?, imageUrl=?, isHome=?, isActive=? WHERE id=?`,
      [name, price, description, imageUrl, isHome ? 1 : 0, isActive ? 1 : 0, id],
      function (err) {
        if (err) {
          return res.status(500).send('Güncelleme Sırasında Hata Oluştu');    
        }
        res.redirect('/panel');
      });
}

// Gallerione
exports.postGalleriOneGuncelle = (req, res) => {
    const { id } = req.params;
    const { imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, isHome, isActive } = req.body;
    db.run( 
      `UPDATE gallerione SET imageUrl1=?, imageUrl2=?, imageUrl3=?, imageUrl4=?, imageUrl5=?, isHome=?, isActive=? WHERE id=?`,
      [imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, isHome ? 1 : 0, isActive ? 1 : 0, id],
      function (err) {
        if (err) {
            console.error(err);
            return res.status(500).send('Güncelleme Sırasında Hata Oluştu');    
        }
        res.redirect('/panel');
      });
};

// Todaymenu
exports.postTodaymenuGuncelle = (req, res) => {
  const { id } = req.params;
  const { name, price, description, imageUrl, isHome, isActive } = req.body;
  db.run(
    `UPDATE todaymenu SET name=?, price=?, description=?, imageUrl=?, isHome=?, isActive=? WHERE id=?`,
    [name, price, description, imageUrl, isHome ? 1 : 0, isActive ? 1 : 0, id],
    function (err) {
      if (err) {
        return res.status(500).send('Güncelleme Sırasında Hata Oluştu');    
    }
    res.redirect('/panel');
    });
};




// ---- ürün silme -----

// Chefmenu 
exports.postChefmenuSil = (req,res) => {
    const { id } = req.params;
    db.run(`DELETE FROM chefmenu WHERE id=?`, [id], function (err) {
      if (err) {
        return res.status(500).send('Silme işlemi sırasında hata oluştu');
      }
      res.redirect('/panel');
    });
}

// Fullmenu
exports.postFullmenuSil = (req,res) => {
    const { id } = req.params;
    db.run(`DELETE FROM fullmenu WHERE id=?`, [id], function (err) {
      if (err) {
        return res.status(500).send('Silme işlemi sırasında hata oluştu');
      }
      res.redirect('/panel');
    });
}

// Gallerione
exports.postGalleriOneSil = (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM gallerione WHERE id=?`, [id], function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('Silme işlemi sırasında hata oluştu');
      }
      res.redirect('/panel'); 
    });
};

// Todaymenu

exports.postTodaymenuSil = (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM todaymenu WHERE id=?`, [id], function (err) {
    if (err) {
        return res.status(500).send('Silme işlemi sırasında hata oluştu');
    }
    res.redirect('/panel');    
  });
};