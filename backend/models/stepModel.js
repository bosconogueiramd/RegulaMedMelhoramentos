const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  stepNumber: Number,
  title: String,
  content: String,
  imageUrl: String
});

module.exports = mongoose.model('Step', stepSchema);
