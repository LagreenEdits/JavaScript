const express = require('express'); //importa el framework express para crear aplicaciones web y manejar rutas y solicitudes HTTP de manera más sencilla
const app = express(); // crea una instancia de la aplicación express
const port = 3000;


app.use(express.json()); // middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.static('pagina web 2')); // sirve archivos estaticos desde la carpeta 'pagina web 2'

app.get('/peliculas/:nombre', (req, res) => {
    const nombre= req.params.nombre;
    res.send(`Detalles de la película: ${nombre}`);
});

app.post('/peliculas', (req, res) => {
    const {titulo} = req.body;
    res.status(201).send(`Película creada: ${JSON.stringify(nuevaPelicula)}`);
});

//crear listener
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
    console.log('visita http://localhost:3000 para ver la página web');
    console.log('visita http://localhost:3000/peliculas/nombreDeLaPelicula para ver los detalles de una película');
    console.log('envía una solicitud POST a http://localhost:3000/peliculas con un cuerpo JSON { "titulo": "Nombre de la película" } para crear una nueva película');
});
