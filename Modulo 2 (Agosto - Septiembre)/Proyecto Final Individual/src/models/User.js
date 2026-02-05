const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 2,
        unique: true},
    email: {
        type: String, 
        required: true, 
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
        unique: true},
    password: {
        type: String, 
        required: true,
        minlength: 10}
});

// Encriptar contraseña antes de guardar
userSchema.pre('save', async function() {
    if (!this.isModified('password')) return;//garatiza que solo se encripte si ya hay una encriptación previa
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    // 'this.password' se refiere a la contraseña encriptada del documento actual
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);