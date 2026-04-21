const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar usuario
router.post('/register', userController.registerUser);

// Ruta para iniciar sesión (Login)
router.post('/login', userController.loginUser);

// ESTO SIEMPRE AL FINAL
module.exports = router;