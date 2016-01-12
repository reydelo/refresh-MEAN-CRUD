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

mongoose.connect(process.env.MONGO_URI);

module.exports = mongoose.model('transactions', Transaction);
