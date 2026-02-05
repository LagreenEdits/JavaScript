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
    console.error(err.stack); // logging para desarrolladores
    const status = err.statusCode || 500;
    res.status(status).json({
        error: err.message,
        status: status === 500 ? "Error del servidor" : "Error del cliente"
    });
});

module.exports = app;