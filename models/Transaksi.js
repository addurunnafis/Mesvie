const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

var transaksiSchema = mongoose.Schema({
  _id: String,
  paymentType: String,
  status: String,
  item : {
  	type: { type: String },
  	quantity: { type: Number },
  	price: { type: Number }
  },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);

module.exports = Transaksi;