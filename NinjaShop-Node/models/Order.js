const mongoose = require('mongoose');
const connection = require('../libs/connection');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },

  products: [{
    type: mongoose.Types.ObjectId,
    required: true,
  }],

},{
    timestamps: true,
});

module.exports = connection.model('Order', orderSchema);