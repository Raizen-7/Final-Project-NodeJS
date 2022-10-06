// Models
const { User } = require('./user.model');
const { Product } = require('./product.model');
const { Order } = require('./order.model');
const { Cart } = require('./cart.model');
const { Category } = require('./category.modul');
const { ProductImg } = require('./productImg.model');
const { ProductInCart } = require('./productInCart.model');

//models relations to app 
const initModels = () => {
// 1st relation - 1 User <--> M Product
    User.hasMany(Product);
    Product.belongsTo(User);

// 2nd relation - 1 User <--> M Order
    User.hasMany(Order);
    Order.belongsTo(User);

//3rd relation - 1 User <--> 1 Cart
    User.hasOne(Cart);
    Cart.belongsTo(User);

//4th relation - 1 Order <--> 1 Cart
    Cart.hasOne(Order);
    Order.belongsTo(Cart);

//5th relation - 1 Category <--> 1 Product
    Category.hasOne(Product);
    Product.belongsTo(Category);

//6th relation - 1 Product <--> M ProductImg
    Product.hasMany(ProductImg);
    ProductImg.belongsTo(Product);

//7th relation - 1 Cart <--> M ProductInCart
    Cart.hasMany(ProductInCart);
    ProductInCart.belongsTo(Cart);

 // 1 Cart <--> M ProductInCart
    Cart.hasMany(ProductInCart);
    ProductInCart.belongsTo(Cart);

};

module.exports = { initModels };
