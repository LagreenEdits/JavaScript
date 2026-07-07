const express = require('express');
const app = express();
const port = 3000;

function medirTiempo (req, res, next)  {
    const inicio = Date.now();
    res.on('finish', () => {
        const duracion = Date.now() - inicio;
        console.log(`Tiempo de respuesta: ${duracion} ms`);
    });
    next();
}

app.use(medirTiempo); //Middleware global

app.get('/a', (req, res) => {
    res.send('<h1>Bienvenido a la ruta A, señor!</h1>'); 
});

app.get('/b', (req, res) => {
    res.send('<h1>Bienvenido a la ruta B, señor!</h1>'); 
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});