/**
 * CONFIGURACIÓN DE DEPENDENCIAS Y SERVIDOR
 * Módulos de infraestructura y constantes de red
 */
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const puerto = 3000;

/**
 * CONFIGURACIÓN DE SEGURIDAD Y PERSISTENCIA TEMPORAL
 * Definición de Secret Key y Mock Data (Usuarios y Películas)
 */
const SECRET_KEY = "clave_biblioteca_456!";

const users = [
    { id: 1, username: 'juan', password: '5678', role: 'admin' },
    { id: 2, username: 'admin2', password: 'abcd', role: 'admin' },
    { id: 3, username: 'esteban', password: 'qwer', role: 'user' },
    { id: 4, username: 'camila', password: '5_5_5', role: 'user' }
];

const movies = [
    { id: 1, title: "Un show mas", author: "J.G. Quintel" },
    { id: 2, title: "Avatar", author: "James Cameron" }
];

/**
 * MIDDLEWARES GLOBALES
 * Lógica de pre-procesamiento de datos
 */
app.use(express.json()); // Middleware para JSON

/**
 * CONTROL DE ACCESO (MIDDLEWARES)
 * Validación de tokens y protección de integridad
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
 * RUTAS PÚBLICAS Y DE AUTENTICACIÓN
 * Endpoints de acceso libre y generación de identidad digital
 */
app.get('/', (req, res) => {
    res.send('Bienvenido al Cine Online');
});

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
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '5m' });

    res.json({ message: "Login exitoso", token });
});

/**
 * RUTAS PROTEGIDAS (ACCESO DE USUARIO)
 * Recursos de consulta que requieren token válido
 */
app.get('/movies', authenticateToken, (req, res) => {
    res.json({ message: 'Lista de películas', movies });
});

app.get('/movie/:id', authenticateToken, (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    return movie ? res.json(movie) : res.status(404).json({ message: 'Pelicula no encontrada' });
});

app.get('/profile', authenticateToken, (req, res) => {
    res.json({ perfil: req.user });
});

/**
 * RUTAS ADMINISTRATIVAS (ESCRITURA)
 * Gestión de catálogo restringida por rol jerárquico
 */
// TODO: Paso 6 - Agregar películas (solo admin)
app.post('/movies/add', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acceso solo para administradores' });
    }

    const { title, author } = req.body;
    const movie = { id: movies.length + 1, title, author };
    movies.push(movie);

    res.json({ message: 'Película agregada con éxito', movie: movie });
});

/**
 * INICIALIZACIÓN DEL SERVICIO
 * Apertura de socket en el puerto configurado
 */
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});