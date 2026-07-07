const AppError = require("../utils/errorHandler");
const mongoose = require("mongoose");

exports.validateDataBase = (req, res, next) => {

    try {
        
        if (mongoose.connection.readyState !== 1) {
            throw new AppError("El servicio no está disponible. Error de conexion con la base de datos", 503);
        }

        next();

    } catch (error) {
        next(error);
    }
};