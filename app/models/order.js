const mongoose = require('mongoose')
// const Item = require('../models/item')

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  checkoutComplete: Boolean,
  total: {
    type: Number,
    default: 0 },
  chargeId: String,
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

// THIS WORKED
// orderSchema.virtual('dumb').get(function () {
//   return 'this is dumb'
// }) // end virtual

// THIS DIDN'T WORK BECAUSE IT TRIED TO RETURN A PROMISE, NOT A NUMBER
// orderSchema.virtual('virtualTotal').get(function () {
//   // find array of item IDs
//   const itemArray = this.items
//   // map this into an array of promises from Mongoose queries to find the whole
//   // item objects
//   const promiseArray = itemArray.map(itemId => Item.findById(itemId).exec())
//   // wait for all those promises to resolve, then calculate the total by
//   // reducing the total.price of each item into a total
//   return Promise.all(promiseArray).then(function (itemDetailArray) {
//     console.log('ITEMS FROM PROMISE.ALL IS: ')
//     console.log(itemDetailArray)
//     const virtualTotal = itemDetailArray.reduce((total, item) => {
//         total += item.price
//         return total
//       }, 0)
//     // return that total
//     console.log('VIRTUAL TOTAL IS: ', virtualTotal)
//     console.log(typeof virtualTotal)
//     return virtualTotal
//   }) // end Promise.all
// }) // end virtual

module.exports = mongoose.model('Order', orderSchema)
