const express = require('express');
const {
    register, 
    login} = require('../controllers/authController');
const {
    validateRegister,
    validateLogin
    } = require('../middlewares/authValidator');
const { validateDataBase } = require ('../middlewares/dataBaseValidator')

const router = express.Router();

// Ruta de registro
router.post('/register', validateDataBase, validateRegister, register);
// Ruta de login
router.post('/login', validateDataBase, validateLogin, login);

module.exports = router;