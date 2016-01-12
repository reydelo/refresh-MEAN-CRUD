var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Transaction = mongoose.model('transactions');

router.get('/transactions', function(req, res) {
  Transaction.find(function(err, transactions) {
    console.log(transactions);
    res.render('api', { title: 'Transactions API', transactions : transactions });
  });
});

router.post('/transactions', function(req, res) {
  new Transaction({
    date : req.body.date,
    payee : req.body.payee,
    category : req.body.category,
    amount : req.body.amount
  }).save(function(err, transaction) {
    console.log(transaction);
    res.redirect('/api/transactions');
  });
});

module.exports = router;
