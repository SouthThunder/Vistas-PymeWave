const express = require('express');
const router = express.Router();

const initialHomeController = require('../controllers/initialHomeController')
//Controlador, responde cuando alguien viene a la ruta del servidor 

router.get('/', initialHomeController.list);
router.post('/search', initialHomeController.search);


module.exports = router;
