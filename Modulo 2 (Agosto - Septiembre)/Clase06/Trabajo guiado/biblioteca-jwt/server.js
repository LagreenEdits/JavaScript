/**
 * CONFIGURACIÓN DE DEPENDENCIAS Y SERVIDOR
 * Inicialización de módulos core y definición de red
 */
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const puerto = 3000;

/**
 * CONFIGURACIÓN DE SEGURIDAD Y DATOS SIMULADOS
 * Persistencia en memoria y llaves maestras de cifrado
 */
const SECRET_KEY = "clave_biblioteca_456!";

const users = [
    { id: 1, username: 'maria', password: '1234', role: 'admin' },
    { id: 2, username: 'jose', password: 'abcd', role: 'user' },
    { id: 3, username: 'lina', password: '0000', role: 'user' }
];

const books = [
    { id: 1, title: "Cien Años de Soledad", author: "Gabriel García Márquez" },
    { id: 2, title: "El Principito", author: "Antoine de Saint-Exupéry" }
];

/**
 * MIDDLEWARES GLOBALES
 * Interceptores de peticiones entrantes
 */
app.use(express.json()); // Middleware para JSON

/**
 * MIDDLEWARES DE AUTENTICACIÓN
 * Verificación de integridad y vigencia de tokens JWT
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido o expirado' });
        }
        req.user = user;
        next();
    });
}

/**
 * RUTAS PÚBLICAS
 * Recursos de libre acceso
 */
app.get('/', (req, res) => {
    res.send('Bienvenido a la Biblioteca Digital');
});

/**
 * RUTAS DE AUTENTICACIÓN
 * Control de acceso y generación de identidad digital
 */
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    let user;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            user = users[i];
            break;
        }
    }

    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const payload = { id: user.id, username: user.username, role: user.role };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '20m' });

    res.json({ message: "Login exitoso", token });
});

/**
 * RUTAS PROTEGIDAS (Lectura)
 * Recursos que requieren autenticación previa
 */
app.get('/books', authenticateToken, (req, res) => {
    res.json({ message: 'Lista de libros', books });
});

app.get('/profile', authenticateToken, (req, res) => {
    res.json({ perfil: req.user });
});

/**
 * RUTAS ADMINISTRATIVAS (Escritura y Gestión)
 * Acceso restringido por Rol mediante validación de Payload
 */
// TODO: Paso 6 - Agregar libros (solo admin)
app.post('/books/add', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acceso solo para administradores' });
    }

    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);

    res.json({ message: 'Libro agregado con éxito', book: newBook });
});

/**
 * INICIALIZACIÓN DEL SERVICIO
 */
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});