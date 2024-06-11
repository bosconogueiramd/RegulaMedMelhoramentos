const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  step: Number,
  content: String,
});

const Step = mongoose.model('Step', stepSchema);

module.exports = Step;
