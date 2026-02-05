const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/errorHandler');

const protect = async (req, res, next) => {
    try {
        let token;

        // 1. Verificar si existe el header y empieza con Bearer
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        // 2. Si no hay token, lanzamos error 401
        if (!token) {
            throw new AppError('No estás autorizado, no se proporcionó un token', 401);
        }

        // 3. Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 4. Buscar al usuario y adjuntarlo a la petición (req.user)
        const currentUser = await User.findById(decoded.id).select('-password');

        if (!currentUser) {
            throw new AppError('El usuario perteneciente a este token ya no existe', 401);
        }

        // Éxito: Pasamos al siguiente middleware o controlador
        req.user = currentUser;
        next();

    } catch (error) {
        // Manejo específico para errores de JWT (opcional, pero muy profesional)
        if (error.name === 'JsonWebTokenError') {
            return next(new AppError('Token inválido. Por favor inicia sesión de nuevo', 401));
        }
        if (error.name === 'TokenExpiredError') {
            return next(new AppError('Tu sesión ha expirado. Por favor inicia sesión de nuevo', 401));
        }
        
        // Cualquier otro error (base de datos, etc.)
        next(error);
    }
};

module.exports = { protect };