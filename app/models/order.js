const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  checkoutComplete: Boolean,
  total: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function () {
  const itemArray = this.items
  // console.log('itemArray sdfsdfds is ', itemArray)
  const leTotal = itemArray.reduce((total, item) => {
    total += item.price
    return total
  }, 0)
  // Slow down and pay attention to what you're getting. You had
  // all of the item objects the entire time. This should've been simple.
  // I should've made sure you weren't getting all of the objects. #woops

  return leTotal
})

module.exports = mongoose.model('Order', orderSchema)
