// MODULES //
const router = require('express').Router();
const controller = require('../controllers/controller.js');

// ROUTES //
const users = router;
const dashboard = router;

// CRUD USERS //
users.post('/login', controller.login); // User log in //
users.post('/signin', controller.signin); // User sign in //

// CRUD DASHBOARD //
dashboard.post('/create-product', controller.createProduct); // Create a product for your store //
dashboard.post('/delete-product', controller.deleteProduct); // Delete a product from your store //
dashboard.get('/get-products', controller.getProducts); // Get all the products from your store //
dashboard.post('/create-category', controller.createCategory); // Create a category for your store //
dashboard.post('/delete-category', controller.deleteCategory); // Delete a category from your store //
dashboard.get('/get-categories', controller.getCategories); // Get all the categories from your store //

module.exports = { users, dashboard }