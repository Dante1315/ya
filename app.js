const express = require('express')
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importando rutas
const funkoRoutes = require('./routes/funko');
const { urlencoded } = require('body-parser');


// configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Dante@23$',
    port: '3306',
    database: 'tareasd'
}, 'single'));
app.use(express.urlencoded({extended: false}));


//routes
app.use('/', funkoRoutes);


// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//empezando servidor


app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
