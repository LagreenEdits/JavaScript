const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');
const playlistRoutes = require('./routes/playlistRoutes');

const app = express();

app.use(express.json());

app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/playlists', playlistRoutes);

// --- Middleware de manejo de errores ---
app.use((err, req, res, next) => {
    console.error(err.stack); 

    const status = err.statusCode || 500;

    // Lógica Senior: Si el status es 500 o mayor, es un error de servidor
    const errorType = status >= 500 ? "Error del servidor" : "Error del cliente";

    res.status(status).json({
        error: err.message,
        status: errorType
    });
});

module.exports = app;