const mongoose = require('mongoose');
const Category = require('../models/Category');
const Product = require('../models/Product');

async function fillBase() {
    category = await Category.create({
        title: 'Саке',
        subcategories: [{
            title: '38%',
        }, {
            title: '40%',
        }
        ],
        });
    
    product = await Product.create({
        title: 'Плохое саке',
        price: 5,
        category: category.id,
        subcategory: category.subcategories[0].id,
        images: 'sake1.png',
    });
    product = await Product.create({
        title: 'Крестьянское саке',
        price: 10,
        category: category.id,
        subcategory: category.subcategories[0].id,
        images: 'sake1.png',
    });    
    product = await Product.create({
        title: 'Самурайское саке',
        price: 35,
        category: category.id,
        subcategory: category.subcategories[1].id,
        images: 'sake1.png',
    });   
    product = await Product.create({
        title: 'Императорское саке',
        price: 1000,
        category: category.id,
        subcategory: category.subcategories[1].id,
        images: 'sake1.png',
    });   
    
    mongoose.disconnect();
}

fillBase();


