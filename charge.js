const express = require('express')
const app = express()
const stripe = require('stripe')('sk_test_MQiVj9qMDQXGBocG860fkC1K')

app.post('/charge', (req, res) => {
  let amount = 500

  stripe.chargers.create({
    amount,
    description: 'test charge',
  })
})
