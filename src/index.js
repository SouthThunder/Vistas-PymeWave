const { apple } = require('color-convert');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql= require('mysql');
const myConnection = require('express-myconnection');
const cookieParser = require('cookie-parser');
const favicon= require('serve-favicon');


const app = express();


// settings
app.set('port', process.env.PORT || 3000); 


//middlewares
app.use(morgan('dev'));
app.use(express.json());// comprueba si el dato es de formato json
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: 'Aerochord-razihel1',
  port: 3306,
  database: 'PymeWave'
}, 'single'))


//routes 
app.use('/Pymeweb/home' , require('./routes/home.routes'));


// static files -> frameworks, javascript, stylesheets, images, etc. (Reutilizable en toda la aplicación)
app.use(express.static(path.join(__dirname, 'public'))); // le indica donde esta la carpeta public
app.use(favicon(path.join(__dirname, 'public/images' ,'favicon.ico')))


// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });