
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => { //funcion para generar el token y como parametros recibe el id del usuario
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Registro para autenticar
exports.register = async (req, res) => { //exports.register es una funcion asincrona que recibe la peticion y envia la respuesta
  try {
    const { username, email, password } = req.body;

    const exists = await User.findOne({ email }); //verifica si el usuario ya existe
    if (exists) return res.status(400).json({ message: "El usuario ya existe 😅😅" }); //si existe, retorna un error 400

    const user = await User.create({ username, email, password }); //si no existe, crea el usuario

    res.status(201).json({
      id: user._id,
      username: user.username,
      token: generateToken(user._id) //genera el token con el id del usuario
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login para autenticar
exports.login = async (req, res) => { //exports.login es una funcion asincrona que recibe la peticion y envia la respuesta
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); //busca el usuario por el email en la base de datos
    if (!user || !(await user.matchPassword(password))) { //si no existe el usuario o la contraseña no coincide
      return res.status(401).json({ message: "Credenciales inválidas 😖😖" });
    }

    res.json({
      id: user._id,
      username: user.username,
      token: generateToken(user._id) //genera el token con el id del usuario
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
