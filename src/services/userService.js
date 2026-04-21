const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save(); 
};

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Usuario no encontrado');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Contraseña incorrecta');

    // Generar el Token (JWT) usando la clave del .env
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
};

// TODO AL FINAL
module.exports = {
    createUser,
    getUserByEmail,
    loginUser
};