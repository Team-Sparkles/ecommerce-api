// const express = require('express')
//
// // Set your secret key: remember to change this to your live secret key in production
// // See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_MQiVj9qMDQXGBocG860fkC1K')
//
// // Token is created using Checkout or Elements!
// // Get the payment token ID submitted by the form:
//  // Using Express
//
// const charge = stripe.charges.create({
//   amount: 999,
//   currency: 'usd',
//   description: 'Example charge',
//   source: token
// })
// const router = express.Router()
//
// // POST /charge
// router.post('/charge', (req, res, next) => {
//   charge(req)
//     .then(data => {
//       res.render('thanks')
//     })
//     .catch(error => {
//       res.render('error', error)
//     })
// })
//
// module.exports = router

// const express = require('express')
//
// // Set your secret key: remember to change this to your live secret key in production
// // See your keys here: https://dashboard.stripe.com/account/apikeys
// const stripe = require('stripe')('sk_test_MQiVj9qMDQXGBocG860fkC1K')
//
// // Token is created using Checkout or Elements!
// // Get the payment token ID submitted by the form:
// const token = req.body.stripeToken // Using Express
//
// const charge = stripe.charges.create({
//   amount: 999,
//   currency: 'usd',
//   description: 'Example charge',
//   source: token
// })
// const router = express.Router()
//
//
// module.exports = router
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

var stripe = require("stripe")("sk_test_MQiVj9qMDQXGBocG860fkC1K");

// POST /charge
// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
const token = request.body.stripeToken; // Using Express

const charge = stripe.charges.create({
  amount: 999,
  currency: 'usd',
  description: 'Example charge',
  source: token,
});

app.post('/charge', (req, res, next) => {
  charge(req).then(data => {
    res.render('thanks');
  }).catch(error => {
    res.render('error', error);
  });
});
