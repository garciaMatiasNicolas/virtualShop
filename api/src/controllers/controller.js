// MODULES //
const createCategory = require("./dashboard/categories/createCategory.js");
const deleteCategory = require("./dashboard/categories/deleteCategory.js");
const createProduct = require("./dashboard/products/createProduct.js");
const getCategories = require("./shop/getCategories.js");
const deleteProduct = require("./dashboard/products/deleteProduct.js");
const getProducts = require("./shop/getProducts.js");
const login = require("./user/login.js");
const signin = require("./user/signin.js");

// EXPORT CONTROLLER //
const controller = {
    getCategories,
    getProducts,
    login,
    signin,
    deleteCategory,
    createCategory,
    createProduct,
    deleteProduct
}

module.exports = controller;