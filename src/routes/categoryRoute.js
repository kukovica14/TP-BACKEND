const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Definir los endpoints para categorías [cite: 8]
router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);

module.exports = router;