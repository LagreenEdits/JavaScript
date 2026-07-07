const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

function validarDatos (req, res, next)  {
    const { nombre } = req.body; // Obtener los datos desde el cuerpo de la solicitud
    if(!nombre) {
        return res.status(400).send('<h1>Faltan datos: nombre es obligatorio.</h1>');
    }  
    next();
}

app.get('/registro', validarDatos, (req, res) => {
    res.send(`<h1>Bienvenido, registro ${req.body.nombre} validado!</h1>`); 
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});