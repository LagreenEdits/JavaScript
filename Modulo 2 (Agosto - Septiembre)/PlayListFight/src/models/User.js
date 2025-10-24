const mongoose = require('mongoose'); //importamos mongoose para definir el esquema
const bcrypt = require('bcryptjs'); //importamos bcrypt para encriptar la contraseña

const userSchema = new mongoose.Schema({ //definimos el esquema del usuario
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

//esto es un middleware que se ejecuta antes de guardar el usuario
userSchema.pre('save', async function(next) { // Encriptar contraseña antes de guardar
    if (!this.isModified('password')) return next();//garatiza que solo se encripte si ya hay una encriptación previa
    const salt = await bcrypt.genSalt(10); //generamos el salt y el 10 significa la complejidad de la encriptación de ciclos
    this.password = await bcrypt.hash(this.password, salt); //hasheamos la contraseña con el salt osea la encriptamos, salt es un string aleatorio que se añade a la contraseña para hacerla más segura
    next();
});

module.exports = mongoose.model('User', userSchema); //exportamos el modelo para usarlo en otro lado, user significa el nombre de la coleccion en la base de datos y userSchema es el esquema que definimos arriba