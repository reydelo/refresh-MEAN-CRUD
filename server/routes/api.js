var express = require('express');
var router = express.Router();
var Transaction = require('../models/transaction.js');

router.get('/transactions', function(req, res) {
  Transaction.find(function(err, transactions) {
    if (err) {
      res.json({'message' : err});
    } else {
      res.json(transactions);
    }
  });
});

router.get('/transaction/:id', function(req, res) {
  Transaction.findById(req.params.id, function(err, transaction) {
    if (err) {
      res.json({'message' : err});
    } else {
      res.json(transaction);
    }
  });
});

router.post('/transactions', function(req, res) {
  newTransaction = new Transaction({
    date : req.body.date,
    payee : req.body.payee,
    category : req.body.category,
    amount : req.body.amount
  });
  newTransaction.save(function(err, transaction) {
    if (err) {
      res.json({'message' : err});
    } else {
      res.json(transaction);
    }
  });
});

router.put('/transaction/:id', function(req, res) {
  var update = {
    date : req.body.date,
    payee : req.body.payee,
    category : req.body.category,
    amount : req.body.amount
  };
  Transaction.findByIdAndUpdate(req.params.id, update, function(err, transaction) {
    if (err) {
      res.json({'message' : err});
    } else {
      res.json(transaction);
    }
  });
});

router.delete('/transaction/:id', function(req, res) {
  Transaction.findByIdAndRemove(req.params.id, function(err, transaction) {
    if (err) {
      res.json({'message' : err});
    } else {
      res.json(transaction);
    }
  });
});

module.exports = router;
