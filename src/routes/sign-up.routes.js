const express = require('express');
const router = express.Router();

const signUpController = require('../controllers/sign-upController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', signUpController.access);


module.exports = router;
