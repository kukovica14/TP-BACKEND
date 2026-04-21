const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ message: "Acceso denegado. No hay token." });

    try {
        // El token suele venir como "Bearer TOKEN_ACA", lo limpiamos:
        const verified = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = verified;
        next(); // Si el token es válido, continúa a la siguiente función
    } catch (error) {
        res.status(401).json({ message: "Token no válido" });
    }
};

module.exports = verifyToken;