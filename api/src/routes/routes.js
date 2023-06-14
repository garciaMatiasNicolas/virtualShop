// MODULES //
const router = require('express').Router();
const controller = require('../controllers/controller.js');
const jwt = require('jsonwebtoken');



// ROUTES //
const users = router;
const dashboard = router;

// MIDDELWARE //
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    jwt.verify(token, 'elbotas', (err, decoded) => {
      if (err) {
        console.error('Error al verificar el token:', err);
        res.status(403).json({result: 'error', error: 'Token invalido'}); // Token inválido
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({result: 'error', error: 'No se envio un token'}); // No se proporcionó un token
  }
}

// CRUD USERS //
users.post('/login', controller.login); // User log in //
users.post('/signin', controller.signin); // User sign in //
users.get('/user', controller.getUser) // Get user name //

// CRUD DASHBOARD //
dashboard.post('/create-product', controller.createProduct); // Create a product for your store //
dashboard.post('/delete-product', controller.deleteProduct); // Delete a product from your store //
dashboard.get('/get-products', authenticateToken, controller.getProducts); // Get all the products from your store //
dashboard.post('/create-category', controller.createCategory); // Create a category for your store //
dashboard.post('/delete-category', controller.deleteCategory); // Delete a category from your store //
dashboard.get('/get-categories', controller.getCategories); // Get all the categories from your store //

module.exports = { users, dashboard }