const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const filmSchema = new Schema({
  judul: { type: String },
  video: { type: String },
  cover: { type: String },
  harga: { type: Number },
  durasi: { type: String },
  kategori: [{ type: String }],
  pemain: [{ type: String }],
  description: { type: String },
  view: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'Action' },
  _watchlater: [{ type: Schema.ObjectId, ref: 'Action' }],
  _love: [{ type: Schema.ObjectId, ref: 'Action' }],
  _review: [{ type: Schema.ObjectId, ref: 'Review' }],
});

const Film = mongoose.model('Film', filmSchema);
module.exports = Film;