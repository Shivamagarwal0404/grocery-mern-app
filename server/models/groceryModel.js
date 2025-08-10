// server/models/groceryModel.js
const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Please enter the grocery name'] },
    price: { type: Number, required: [true, 'Please enter the price'], default: 0 },
    quantity: { type: Number, required: [true, 'Please enter the quantity'], default: 1 },
    imageUrl: { type: String, default: '' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false } // optional
  },
  { timestamps: true }
);

module.exports = mongoose.model('Grocery', grocerySchema);
