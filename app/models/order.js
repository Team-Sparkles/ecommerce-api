const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  items: [{
    item: String,
    quantity: Number
  }],
  checkoutComplete: Boolean,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
