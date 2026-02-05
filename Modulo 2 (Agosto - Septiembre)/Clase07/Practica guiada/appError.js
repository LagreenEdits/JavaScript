/**
 * @fileoverview Clase personalizada para la gestión de excepciones de la aplicación.
 * Extiende la clase nativa Error para incluir códigos de estado HTTP.
 */

/**
 * Representa un error operativo dentro de la aplicación.
 * @extends Error
 */
class AppError extends Error {
    /**
     * Crea una instancia de AppError.
     * @param {string} message - Descripción legible del error.
     * @param {number} statusCode - Código de estado HTTP (ej. 400, 404, 500).
     */
    constructor(message, statusCode) {
        /**
         * Llama al constructor de la clase padre (Error) para inicializar
         * el mensaje y capturar el stack trace de forma nativa.
         */
        super(message);
        
        /**
         * @property {number} statusCode - Código HTTP asociado al error.
         * Útil para que el middleware de errores sepa qué status enviar al cliente.
         */
        this.statusCode = statusCode;
    }
}

/**
 * Exportación del módulo para su uso en controladores y middlewares.
 */
module.exports = AppError;