const express = require('express');
const router = express.Router();

const docController = require('../controllers/docController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', docController.render);


module.exports = router;
