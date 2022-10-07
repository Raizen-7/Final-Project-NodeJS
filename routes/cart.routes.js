const express = require('express');

// Controllers
const {
    purchaseCart,
    getUserCart,
    addProductToCart,
    removeProductFromCart,
    updateProductInCart
} = require('../controllers/orders.controller');

// Middlewares
const { protectSession } = require('../middlewares/auth.middlewares');

const cartRouter = express.Router();

cartRouter.use(protectSession);

cartRouter.get('/', getUserCart);

cartRouter.post('/add-product', addProductToCart);

cartRouter.patch('/update-cart', updateProductInCart);

cartRouter.post('/purchase', purchaseCart);

cartRouter.delete('/:productId', removeProductFromCart);

module.exports = { cartRouter };
