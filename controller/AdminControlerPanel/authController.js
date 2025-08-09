const db1 = require('../../data/db1');
const bcrypt = require('bcrypt');



// Giriş işlemleri 

exports.getLogin = (req,res) => {
    res.render('login', {error: null });
};

exports.postLogin = (req,res) => {
    const {email, password } = req.body;

    db1.get('SELECT * FROM users WHERE email = ? ', [email], (err, user) => {
        if(err || !user) {
            return res.render('/login', {error: 'E-posta bulunamadı.'});
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if(!isPasswordValid){
            return res.render('/login' ,{error: 'Şifre Hatalı '});
        }

        // Oturum Açma
        req.session.userId = user.id;
        res.redirect('/panel');
    });
};


// Kayıt İşlemleri 

exports.getRegister = (req,res) => {
    res.render('register', {error: null });
};

// register Kayıt sayfası post 

exports.postRegister = (req,res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.render('register', {error : 'Lütfen Tüm Alanları Doldurun'});
    }
    const hashedPassword = bcrypt.hashSync(password, 10 );

    const query = 'INSERT INTO users (email, password) VALUES (?, ? )';
    db1.run(query, [email, hashedPassword], 
        function (err){
            if(err){
                return res.render('register', {error: 'Daha önce bu E-posta Kayıt Edilmiş'});
            }
            res.redirect('/login');
        });
};

// GET panal Koruma Sayfası 

exports.getPanel = (req,res) => {
    if(!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('panel');
};

// GET PANEL ÇIKIŞ

exports.logout = (req,res) => {
    req.session.destroy(() => {
    res.redirect('/login');
    });
};




