const express = require('express');
const router = express.Router();

const signInController = require('../controllers/sign-inController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', signInController.render);


module.exports = router;
