const Category = require('../models/categoryModel');

const getAllCategories = async () => {
    return await Category.find(); // Lógica de DB [cite: 106]
};

const createCategory = async (categoryData) => {
    const newCategory = new Category(categoryData);
    return await newCategory.save();
};

const updateCategory = async (id, categoryData) => {
    return await Category.findByIdAndUpdate(id, categoryData, { new: true });
};

const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
};

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
};