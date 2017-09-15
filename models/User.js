const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  fullname: { type: String },
  bio: { type: String },
  phone: { type: String },
  address: { type: String },
  photo: { type: String, default: "profil.jpg" },
  active: { type: Boolean, required: true, default: false },
  watcher: {
    coin: { type: Number, default: 100 },
    _watchlater: [{ type: Schema.ObjectId, ref: 'Action' }],
    _love: [{ type: Schema.ObjectId, ref: 'Action' }],
    _history: [{ type: Schema.ObjectId, ref: 'Action' }],
    _review: [{ type: Schema.ObjectId, ref: 'Review' }]
  },
  filmmaker: {
    coin: { type: Number, default: 0 },
    token: { type: Number, default: 10 },
    _daftarfilm: [{ type: Schema.ObjectId, ref: 'Film' }]
  },
  created_at: { type: Date, default: Date.now },
  temporarytoken: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;