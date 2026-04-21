const Product = require('../models/productModel');

const getAllProducts = async () => {
    // El PDF pide explícitamente usar populate para ver los datos de la categoría [cite: 83]
    return await Product.find().populate('categoria'); 
};

const createProduct = async (productData) => {
    const newProduct = new Product(productData);
    return await newProduct.save();
};

const updateProduct = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
};

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};