const AppError = require("../utils/errorHandler");

// Middleware para validar datos de registro
exports.validateCreatePlaylist = (req, res, next) => {
    const { titulo, descripcion, canciones } = req.body;

    try {
        if (!titulo) throw new AppError("El título es obligatorio", 400);

        if (descripcion.length > 200) throw new AppError("La descripción no debe exceder los 200 caracteres", 400);

        if (!canciones || canciones.length === 0) throw new AppError("Las canciones son obligatorias", 400);

        next();

    } catch (error) {
        next(error);
    }
};

exports.validateGetPlaylistById = (req, res, next) => {
    const { id } = req.params;
    try {
        if (id.length !== 24) {
            throw new AppError("ID de playlist inválido", 400);
        }

        next();

    } catch (error) {
        next(error);
    }
};

exports.validateUpdatePlaylist = (req, res, next) => {
    const { titulo, descripcion, canciones} = req.body;
    const { id } = req.params;
    try {
        if (id.length !== 24) {
            throw new AppError("ID de playlist inválido", 400);
        }
        if (!titulo) throw new AppError("El título es obligatorio", 400);

        if (descripcion.length > 200) throw new AppError("La descripción no debe exceder los 200 caracteres", 400);

        if (!canciones || canciones.length === 0) throw new AppError("Las canciones son obligatorias", 400);

        next();

    } catch (error) {
        next(error);
    }
};

exports.validateDeletePlaylist = (req, res, next) => {
    const { id } = req.params;
    try {
        if (id.length !== 24) {
            throw new AppError("ID de playlist inválido", 400);
        }

        next();

    } catch (error) {
        next(error);
    }
};

exports.validateVotePlaylist = (req, res, next) => {
    const { id } = req.params;
    try {
        if (id.length !== 24) {
            throw new AppError("ID de playlist inválido", 400);
        }

        next();
        
    } catch (error) {
        next(error);
    }
};