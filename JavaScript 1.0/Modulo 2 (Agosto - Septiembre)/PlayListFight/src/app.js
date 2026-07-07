const express = require('express'); //importamos express
const authRoutes = require('./routes/authRoutes'); //importamos las rutas de autenticacion
const playlistRoutes = require('./routes/playlistRoutes'); //importamos las rutas de playlist

const app = express(); //creamos la aplicacion de express

app.use(express.json()); //middleware para parsear el body como json

app.use('/auth', authRoutes); //usamos las rutas de autenticacion en la ruta /auth
app.use('/playlists', playlistRoutes); //usamos las rutas de playlist en la ruta /playlists

module.exports = app; //exportamos la aplicacion para usarla en otro lado
