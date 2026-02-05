const AppError = require("../utils/errorHandler");

// Middleware para validar datos de registro
const validateRegister = (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        if (!username) throw new AppError("El nombre es obligatorio", 400);
        if (username.length < 2) throw new AppError("El nombre debe tener al menos 2 caracteres", 400);

        if (!email) throw new AppError("El email es obligatorio", 400);
        if (!/^\S+@\S+\.\S+$/.test(email)) throw new AppError("El email no es válido", 400);

        if (!password) throw new AppError("La contraseña es obligatoria", 400);
        if (password.length < 10) throw new AppError("La contraseña debe tener al menos 10 caracteres", 400);

        next();

    } catch (error) {
        next(error);
    }
};

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email) throw new AppError("El email es obligatorio", 400);
        if (!/^\S+@\S+\.\S+$/.test(email)) throw new AppError("El email no es válido", 400);

        if (!password) throw new AppError("La contraseña es obligatoria", 400);
        if (password.length < 10) throw new AppError("La contraseña debe tener al menos 10 caracteres", 400);

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { validateRegister, validateLogin };