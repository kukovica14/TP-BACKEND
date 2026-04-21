const express = require('express');
const cors = require('cors');
const conectarDB = require('./src/config/db');
require('dotenv').config();

// 1. Inicializar la app
const app = express();

// 2. Conectar a la Base de Datos (MongoDB Atlas)
conectarDB();

// 3. Middlewares Globales
app.use(cors()); // Permite peticiones desde otros dominios
app.use(express.json()); // Permite que la API reciba datos en formato JSON

// 4. Importar las Rutas
const categoryRoutes = require('./src/routes/categoryRoute');
const productRoutes = require('./src/routes/productRoute');
const userRoutes = require('./src/routes/userRoute');

// 5. Vincular las Rutas a la API
// Es vital que esto esté ANTES del app.listen
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// 6. Ruta de prueba rápida (opcional, para verificar que la API vive)
app.get('/', (req, res) => {
    res.send('🚀 API de Nacho funcionando correctamente');
});

// 7. Configuración del Puerto y Encendido del Servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log('✅ Rutas cargadas correctamente');
});