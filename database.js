var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transaction = new Schema(
  {
    date : Date,
    payee : String,
    category : String,
    amount : Number,
  }
);

mongoose.model('transactions', Transaction);
mongoose.connect('mongodb://localhost/refresh-MEAN-CRUD');
