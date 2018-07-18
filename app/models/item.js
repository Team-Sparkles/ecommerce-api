const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

itemSchema.virtual('dollarAmount').get(function () {
  return (this.price / 100).toFixed(2)
})

module.exports = mongoose.model('Item', itemSchema)
