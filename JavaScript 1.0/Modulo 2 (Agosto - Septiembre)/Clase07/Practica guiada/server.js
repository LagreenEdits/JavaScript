/**
 * @fileoverview Punto de entrada principal del servidor Express.
 * Implementa un flujo de control de errores centralizado y rutas de ejemplo.
 */

const express = require('express');
const AppError = require('./appError');
const app = express();

/**
 * CONFIGURACIÓN DE MIDDLEWARES
 * Habilita el parseo de cuerpos de solicitud en formato JSON.
 */
app.use(express.json());

/**
 * @route GET /
 * @description Ruta de bienvenida para verificar el estado del servidor.
 */
app.get('/', (req, res) => {
  res.send("Bienvenido al servidor con AppError");
});

/**
 * @route GET /error
 * @description Ejemplo de ruta con validación lógica.
 * Utiliza el objeto 'next' para delegar el manejo de errores al middleware central.
 */
app.get('/error', (req, res, next) => {
  // Validación de parámetros de consulta (Query Parameters)
  if (!req.query.nombre) {
    /**
     * Si falla la validación, se invoca next() pasando una instancia de AppError.
     * Esto salta inmediatamente al middleware de manejo de errores.
     */
    return next(new AppError("El parámetro 'nombre' es obligatorio", 400));
  }
  
  // Respuesta exitosa si la validación es correcta
  res.send(`Hola ${req.query.nombre}`);
});

/**
 * MIDDLEWARE CENTRALIZADO DE MANEJO DE ERRORES
 * Este bloque captura cualquier error enviado mediante next(err) en la aplicación.
 * @param {Error|AppError} err - Objeto de error capturado.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función de continuación de Express.
 */
app.use((err, req, res, next) => {
  // Registro del error en los logs del servidor para depuración
  console.error(err.stack);

  /**
   * Determinación del código de estado. 
   * Si el error no es una instancia de AppError, se asume un error interno (500).
   */
  const status = err.statusCode || 500;

  // Respuesta unificada al cliente en formato JSON
  res.status(status).json({
    error: err.message,
    status: status === 500 ? "Error del servidor" : "Error del cliente"
  });
});

/**
 * INICIALIZACIÓN DEL SERVICIO
 * Escucha peticiones entrantes en el puerto definido.
 */
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});