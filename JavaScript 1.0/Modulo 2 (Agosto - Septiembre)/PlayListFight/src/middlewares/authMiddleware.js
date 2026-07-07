const jwt = require('jsonwebtoken'); //importamos jsonwebtoken para verificar el token
const User = require('../models/User'); //importamos el modelo de usuario

const protect = async (req, res, next) => { //middleware para proteger las rutas
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { //verifica que el token venga en los headers y que empiece con Bearer
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next(); //si todo esta bien, pasa al siguiente middleware o controlador
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed 🥲🥲' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token 😞😞' });
    }
};

module.exports = { protect };