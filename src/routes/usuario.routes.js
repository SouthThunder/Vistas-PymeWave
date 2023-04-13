const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', usuarioController.access);


module.exports = router;
