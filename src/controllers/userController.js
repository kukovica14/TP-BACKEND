const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json({ 
            message: "¡Usuario registrado!", 
            user: newUser 
        });
    } catch (error) {
        
        res.status(400).json({ 
            message: "Error en el registro",
            error: error.message,
            detalles: error.errors 
        });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await userService.loginUser(email, password);
        res.status(200).json(result); 
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};