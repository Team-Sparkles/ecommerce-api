const express = require('express')
const bodyParser = require('body-parser')
const stripe = require('stripe')('sk_test_MQiVj9qMDQXGBocG860fkC1K')

const keyPublishable = process.env.PUBLISHABLE_KEY
const keySecret = process.env.SECRET_KEY_STRIPE

const router = express.Router()

router.use(express.static('public'))

router.use(bodyParser.urlencoded({
  extended: false
}))
router.use(bodyParser.json())

router.post('/charge', (req, res) => {
  console.log('    ')
  console.log('--------------------------')
  console.log('CHARGE POST REQUEST')
  console.log('inside router.post and req.body is: ')
  console.log(req.body)
  console.log('    ')
  console.log('and req.body.card.metadata is: ')
  console.log(req.body.card.metadata)

  let amount = req.body.card.metadata.amount
  let orderId = req.body.card.metadata.orderId

  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
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
      console.log('chargeId is: ', chargeId)
      console.log('order ID is: ', orderId)
      console.log('amount is: ', amount)
      // THIS IS WHERE WE SHOULD SAVE THE CHARGE ID ONTO THE ORDER 
      return charge
    })
    .then(charge => res.send(charge))
    .catch(err => {
      // console.log('Error:', err)
      res.status(500).send({
        error: 'Purchase Failed'
      })
    })
})

module.exports = router
