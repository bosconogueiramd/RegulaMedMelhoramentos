const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  crm: String,
  birthDate: String,
  isAdmin: Boolean,
  matricula: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
