const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

// View Engine Ayarları
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Statik Dosyalar ve Form Verisi Alma
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Session Ayarları
app.use(session({
  secret: 'gizliAnahtar123',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,       // XSS saldırılarına karşı koruma
    maxAge: 1000 * 60 * 60 // 1 saat geçerli
  }
}));

// ROUTES Import
const indexRoutes = require('./routes/indexRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const fullmenuRoutes = require('./routes/fullmenuRoutes');
const fotoGalleryRoutes = require('./routes/fotoGalleryRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/AdminRoutesPanel/authRoutes');
const panelRoutes = require('./routes/AdminRoutesPanel/panelRoutes');

// Auth Middleware (Paneli korumak için)
const authMiddleware = require('./middleware/auth');

// PUBLIC ROUTES
app.use('/', indexRoutes);
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);
app.use('/gallery', fotoGalleryRoutes);
app.use('/menu', fullmenuRoutes);
app.use('/reservation', reservationRoutes);
app.use('/', authRoutes); // login & register işlemleri

// PROTECTED ROUTES (Giriş yapmış kullanıcılar)
app.use('/panel', authMiddleware, panelRoutes);

// 404 Sayfası
app.use((req, res) => {
  res.status(404).send('Sayfa Nerede Arkadaş');
});

// Server Başlatma
app.listen(3000, () => {
  console.log('Program Çalışmaya Başladı (http://localhost:3000)');
});
