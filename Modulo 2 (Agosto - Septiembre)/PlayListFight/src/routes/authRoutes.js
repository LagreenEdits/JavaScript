const express = require('express'); //importamos express
const {register, login} = require('../controllers/authController'); //importamos los controladores de autenticacion

const router = express.Router(); //creamos el router

// Ruta de registro
router.post('/register', register);
// Ruta de login
router.post('/login', login);

module.exports = router;