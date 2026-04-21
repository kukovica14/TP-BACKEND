const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
}, { timestamps: true }); // Agrega fecha de creación y actualización automáticamente

module.exports = mongoose.model('Category', categorySchema);