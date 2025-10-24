const express = require('express');
const app = express();
const port = 3000;

function verificarRol(req, res, next)  {
    const rol = req.query.rol; // Obtener el rol desde los parámetros de consulta
    if(rol !== 'admin') {
        return res.status(403).send('<h1>Acceso denegado: necesitas ser Admin.</h1>');
    }  
    next();
}

app.get('/admin', verificarRol, (req, res) => {
    res.send('<h1>Bienvenido, Admin!</h1>'); 
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});