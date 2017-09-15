const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

var notificationSchema = mongoose.Schema({
  event: { type: String }, 
  seen: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  referenceType: { type: String },
  _reference: { type: Schema.ObjectId },
  _receiver: { type: Schema.ObjectId, ref:'User' },
  _creator: { type: Schema.ObjectId, ref: 'User' },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;