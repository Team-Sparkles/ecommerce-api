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
  let amount = 200

  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      }))
    .then(charge => {
      // console.log('charge is ', charge)
      return charge
    })
    .then(charge => res.send(charge))
    .catch(err => {
      console.log('Error:', err)
      res.status(500).send({
        error: 'Purchase Failed'
      })
    })
})

module.exports = router
