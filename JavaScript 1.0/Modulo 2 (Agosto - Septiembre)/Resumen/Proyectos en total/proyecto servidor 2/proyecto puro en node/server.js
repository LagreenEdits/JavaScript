const http = require('http'); //modulo nativo de node para crear servidores web y sirve para manejar solicitudes y respuestas HTTP
const fs = require('fs'); //modulo nativo de node para trabajar con el sistema de archivos y sirve para leer y escribir archivos en el servidor
const path = require('path'); //modulo para construir rutas de archivos y sirve para manejar rutas de archivos y directorios de manera segura y compatible con diferentes sistemas operativos

const puerto = 3000;

const servidor = http.createServer((req, res) => {

    if(req.url === '/api/recomendados' && req.method === 'GET') { // si la ruta es /api/recomendados y el metodo es GET
        const videosRecomendados = [
        {id: '1', titulo: 'Cómo aprender Node.js', canal: 'NodeMaster', duracion: '10:00'},
        {id: '2', titulo: 'Introducción a JavaScript', canal: 'JS Guru', duracion: '8:30'},
        {id: '3', titulo: 'Desarrollo web con Express', canal: 'WebDev', duracion: '12:45'},
        {id: '4', titulo: 'Bases de datos con MongoDB', canal: 'DB Experts', duracion: '15:20'},
        {id: '5', titulo: 'Frontend con React', canal: 'React Masters', duracion: '20:15'}
        ];
        const jsonData = JSON.stringify(videosRecomendados); // mi servidor devuelve un JSON
        res.writeHead(200, {'Content-Type': 'application/json'});
       res.end(jsonData); //cerrar la respuesta y se envía el JSON al cliente
    } else {
       const filePath = path.join(__dirname, 'pagina web 1', '404.html'); // ruta al archivo HTML, sirve para transformarlo en una ruta absoluta
        
        fs.readFile(filePath, (err, data) => { //la data es el contenido del archivo de error 404
            if (err) { //si no es nulo el err se manda un error 500
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error interno del servidor');
            } else { // si no hay error se manda el archivo 404
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(data); // enviar el archivo HTML al cliente
            }
        });
    }

});

servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
    console.log('visita http://localhost:3000/api/recomendados para ver los videos recomendados');
});
