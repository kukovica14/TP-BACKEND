const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoria: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', // Referencia al modelo de Categoría
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);