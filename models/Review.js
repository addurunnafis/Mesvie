const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const reviewSchema = new Schema({
  text: { type: String, required: true, },
  created_at: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  _film: { type: Schema.ObjectId, ref: 'Film' }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;