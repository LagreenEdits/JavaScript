const express = require('express');
const app = express();
const port = 3000;

function verificarToken(req, res, next)  {
    const token = req.headers['token']; // Obtener el token desde los headers
    if(token !== '12345') {
        return res.status(403).send('<h1>Acceso denegado: token inválido.</h1>');
    }  
    next();
}

app.get('/secreto', verificarToken, (req, res) => {
    res.send('<h1>Bienvenido, Admin a la ruta secreta!</h1>'); 
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});