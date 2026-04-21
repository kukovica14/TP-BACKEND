# TP Back-End - API Cerveza 621 🍺

Proyecto desarrollado para el curso de Programación Back-End. Consiste en una API RESTful para la gestión de productos y categorías de una marca de cerveza artesanal, incluyendo autenticación de usuarios y persistencia en MongoDB.

## 🚀 Tecnologías Utilizadas
* **Node.js** & **Express** (Servidor)
* **MongoDB Atlas** & **Mongoose** (Base de datos y modelado)
* **JWT (JSON Web Token)** (Seguridad)
* **Bcryptjs** (Encriptación de contraseñas)
* **Dotenv** (Variables de entorno)

## 🛠️ Configuración del Proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
Variables de Entorno:
Crear un archivo .env en la raíz basado en el archivo .env.example provisto:

Fragmento de código
PORT=3000
MONGO_URI=tu_conexion_mongodb
JWT_SECRET=tu_clave_secreta
Ejecutar en desarrollo:

Bash
npm run dev
🔐 Endpoints Principales
Usuarios (Auth)
POST /api/users/register - Registro de nuevo usuario.

POST /api/users/login - Login y obtención de Token JWT.

Productos (Requiere Token)
GET /api/products - Listar todos los productos (con .populate() de categorías).

POST /api/products - Crear un nuevo producto.

PUT /api/products/:id - Editar un producto.

DELETE /api/products/:id - Eliminar un producto.

Categorías
GET /api/categories - Listar categorías.

POST /api/categories - Crear una categoría.

📂 Estructura de Carpetas
src/models: Esquemas de Mongoose.

src/services: Lógica de negocio y comunicación con la DB.

src/controllers: Manejo de peticiones y respuestas.

src/routes: Definición de rutas y aplicación de Middlewares.

src/config: Configuración de la base de datos. 