// ====== server.js ======
// 1. Configuración inicial
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "clave_biblioteca_456!";

// 2. Servidor básico
app.get("/", (req, res) => {
  res.send("Bienvenido a la Biblioteca Digital");
});

// 3. Usuarios y login
const users = [
    { id: 1, username: "maria", password: "1234", role: "admin" },
    { id: 2, username: "jose",  password: "abcd", role: "user"  },
    { id: 3, username: "lina",  password: "0000", role: "user"  },
];

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

    const payload = { id: user.id, username: user.username, role: user.role };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "20m" });
    res.json({ message: "Login exitoso", token });
});

// 4. Middleware para validar token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token no proporcionado" });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Token inválido o expirado" });
        req.user = user;
        next();
    });
}

// 5. Rutas protegidas
const books = [
    { id: 1, title: "Cien Años de Soledad", author: "Gabriel García Márquez" },
    { id: 2, title: "El Principito",         author: "Antoine de Saint-Exupéry" },
];

app.get("/books", authenticateToken, (req, res) => {
    res.json({ books });
});

// 6. Agregar libros solo admin
app.post("/books/add", authenticateToken, (req, res) => {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Solo admins" });

    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.json({ message: "Libro agregado", book: newBook });
});

// 7. Perfil del usuario
app.get("/profile", authenticateToken, (req, res) => {
    res.json({ perfil: req.user });
});

// 8. Iniciar servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
