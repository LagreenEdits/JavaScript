const express = require('express');
const {register, login} = require('../controllers/authController');
const {
    validateRegister,
    validateLogin
    } = require('../middlewares/authValidator');

const router = express.Router();

// Ruta de registro
router.post('/register', validateRegister, register);
// Ruta de login
router.post('/login', validateLogin, login);

module.exports = router;