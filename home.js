const express = require ('express');
const app = express();
const path = require('path')

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views' ));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


// routes 
const indexRoutes = require('./routes/indexRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const fullmenuRoutes = require('./routes/fullmenuRoutes');
const fotoGalleryRoutes = require('./routes/fotoGalleryRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes');


// Admin Routes
app.use('/panel', require('./routes/AdminRoutesPanel/panelRoutes'));


// index Routes
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);
app.use('/gallery', fotoGalleryRoutes);
app.use('/menu' , fullmenuRoutes);
app.use('/reservation', reservationRoutes);

app.use('/', indexRoutes );


app.listen(3000, () => {
    console.log('Program Çalışmaya Başladı(http://localhost:3000)');
});

