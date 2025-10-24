require("dotenv").config({ path: "../.env" }); //cargamos las variables de entorno
const app = require("./app"); //importamos la aplicacion de express
const connectDB = require("./config/db"); //importamos la funcion para conectar a la base de datos

console.log("MONGO_URI desde .env:", process.env.MONGO_URI);

const PORT = process.env.PORT || 4000; //puerto donde correra el servidor

connectDB(); //conectamos a la base de datos osea el boton start

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT} 🚀🚀`);
});