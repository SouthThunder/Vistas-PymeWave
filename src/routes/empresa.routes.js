const express = require('express');
const router = express.Router();

const empresaController = require('../controllers/empresaController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', empresaController.access);

router.post('/add', empresaController.register);


module.exports = router;
