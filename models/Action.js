const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const actionSchema = new Schema({
  type: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  _film: { type: Schema.ObjectId, ref: 'Film' }
});

const Action = mongoose.model('Action', actionSchema);
module.exports = Action;