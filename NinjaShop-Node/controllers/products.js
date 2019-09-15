const Product = require('../models/Product');
module.exports.productsList = async function productsList(ctx, next) {
    const products = await Product.find().limit(10); 
    ctx.body = {products: products};
}