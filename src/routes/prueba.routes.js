const express = require('express');
const router = express.Router();

const pruebaController = require('../controllers/pruebaController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', pruebaController.render);


module.exports = router;
