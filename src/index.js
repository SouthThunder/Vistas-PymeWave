const { apple } = require('color-convert');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql= require('mysql');
const myConnection = require('express-myconnection');
const cookieParser = require('cookie-parser');
const favicon= require('serve-favicon');
const engines= require('consolidate');



const app = express();

//Importing routers
const customerRoutes = require('./routes/home.routes');
const signInRoute = require('./routes/sign-in.routes');
const docRoute = require('./routes/doc.routes');
const signUpRoute = require('./routes/sign-up.routes');
const signUpEmpresaRoute = require('./routes/empresa.routes');
const signUpUsuarioRoute = require('./routes/usuario.routes');


// settings
app.set('port', process.env.PORT || 3000); 
app.set('views', __dirname+'/views')
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//middlewares
app.use(morgan('dev'));
app.use(express.json());// comprueba si el dato es de formato json
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: '12345',
  port: 3306,
  database: 'PymeWave'
}, 'single'))


//routes 
app.use('/' , customerRoutes);
app.use('/signIn' , signInRoute);
app.use('/Who-are-us',docRoute);
app.use('/signUp', signUpRoute);
app.use('/signUp/empresa',signUpEmpresaRoute);
app.use('/signUp/usuario',signUpUsuarioRoute);



// static files -> frameworks, javascript, stylesheets, images, etc. (Reutilizable en toda la aplicación)
app.use(express.static(path.join(__dirname, 'public'))); // le indica donde esta la carpeta public
app.use(favicon(path.join(__dirname, 'public/images' ,'favicon.ico')))


// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });