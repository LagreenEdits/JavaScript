const express = require('express');
const app = express();
const port = 3000;

function loggerPersonalizado(req, res, next)  {
    const metodo = req.method;
    const ruta = req.originalUrl;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${metodo} a la ruta ${ruta}`);
    next();
}

app.use(loggerPersonalizado); //Middleware global

app.get('/a', (req, res) => {
    res.send('<h1>Bienvenido a la ruta A, Admin!</h1>'); 
});

app.post('/b', (req, res) => {
    res.send('<h1>Bienvenido a la ruta A, Admin!</h1>'); 
});

app.put('/c', (req, res) => {
    res.send('<h1>Bienvenido a la ruta A, Admin!</h1>'); 
});

app.delete('/d', (req, res) => {
    res.send('<h1>Bienvenido a la ruta A, Admin!</h1>'); 
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});