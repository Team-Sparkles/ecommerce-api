const express = require('express')
const bodyParser = require('body-parser')
const stripe = require('stripe')('sk_test_MQiVj9qMDQXGBocG860fkC1K')
// pull in Mongoose model for orders
const Order = require('../models/order')

const keyPublishable = process.env.PUBLISHABLE_KEY
const keySecret = process.env.SECRET_KEY_STRIPE

const router = express.Router()

router.use(express.static('public'))

router.use(bodyParser.urlencoded({
  extended: false
}))
router.use(bodyParser.json())

// when a post request is received to our charge route
router.post('/charge', (req, res) => {
  console.log('    ')
  console.log('--------------------------')
  console.log('CHARGE POST REQUEST')
  // console.log('inside router.post and req.body is: ')
  // console.log(req.body)
  // console.log('    ')
  console.log('and req.body.card.metadata is: ')
  console.log(req.body.card.metadata)

  // locate the metadata we sent within `req.body.card.metadata`
  // and save to `amount` and `orderId` variables for later access
  let amount = req.body.card.metadata.amount
  let orderId = req.body.card.metadata.orderId

  // create a customer record in Stripe
  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
    // when Stripe responds with a customer record, send a charge
    // record to Stripe, passing our amount and orderId that we captured on the
    // old metadata into this metadata
    .then(customer =>
      stripe.charges.create({
        amount,
        description: `Order # ${orderId}`,
        currency: 'usd',
        customer: customer.id,
        metadata: {
          orderId: orderId,
          amount: amount
        }
      }))
    // when Stripe responds with a charge record, capture the charge ID it
    // supplies as variable `chargeId`
    .then(charge => {
      console.log('    ')
      console.log('--------------------------')
      console.log('STRIPE CHARGE')
      console.log('after creating customer, charge.metadata is ')
      console.log(charge.metadata)
      console.log('    ')
      console.log('and charge is ')
      console.log(charge)
      let chargeId = charge.id

      // we now have the charge ID, order ID, and amount all available in the
      // same place
      console.log('    ')
      console.log('--------------------------')
      console.log('DATA NOW ACCESSIBLE ON BACK END')
      console.log('chargeId is: ', chargeId)
      console.log('order ID is: ', orderId)
      console.log('amount is: ', amount)

      Order.findById(orderId)
        // console log the original order record
        .then(order => {
          console.log('    ')
          console.log('--------------------------')
          console.log('UPDATING ORDER')
          console.log('order we need to add charge ID to is: ')
          console.log(order)

          // save the charge id to the appropriate order record and set
          // `checkoutCompleted` to true
          Order.update({ _id: orderId }, { $set: { chargeId: chargeId, checkoutComplete: true }}, () => {
            // fetch the order again so we can ensure the changes saved
            Order.findById(orderId)
              .then((order) => {
                console.log('    ')
                console.log('UPDATED ORDER is: ')
                console.log(order)
                // return the updated order
                return order
              })
          })
        })
      // send the charge to Stripe
      res.send(charge)
    })
    .catch(err => {
      // console.log('Error:', err)
      res.status(500).send({
        error: 'Purchase Failed'
      })
    })
})

module.exports = router
