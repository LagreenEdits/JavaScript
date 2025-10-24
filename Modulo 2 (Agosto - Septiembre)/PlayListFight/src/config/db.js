//aqui va la configiuracion de la base de datos
const mongoose = require("mongoose");

const connectDB = async () => { //asincrona porque todas las operaciones a bases de datos son de promesas
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected to mongoDB 👍👍");
    } catch (error) {
        console.log("Error connecting to mongoDB 😞😞", error.message);
    }
};

module.exports = connectDB; //exportamos la funcion para usarla en otro lado
