const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', customerController.list);


module.exports = router;
