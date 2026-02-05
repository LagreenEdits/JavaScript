const express = require('express');
const {home} = require('../controllers/homeController');

const router = express.Router();

// Ruta de home
router.get('', home);
router.get('/home', home);

module.exports = router;