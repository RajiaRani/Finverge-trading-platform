// backend/models/UserModel.js
const mongoose = require('mongoose');
const { UserSchema } = require('../schemas/UserSchema.js');

const UserModel =
  mongoose.models.User || mongoose.model('User', UserSchema); // collection => "users"

module.exports = { UserModel };
